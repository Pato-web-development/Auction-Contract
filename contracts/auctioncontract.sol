// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTAuction is Ownable{
    address[] public admins;
    uint256 public auctionId;
    mapping(address => uint) public bids;
    address _owner;

    struct AuctionItem {
        string name;
        IERC721 nftAddress;
        uint256 nftId;
        uint256 duration;
        bool auctionStarted;
        uint256 highestBid;
        address highestBidder;
        uint256 startingPrice;
    }
    mapping(uint256 => AuctionItem) public auctionItems;

    modifier onlyAdmin() {
        bool isAdmin = false;
        for (uint i = 0; i < admins.length; i++) {
            if (admins[i] == msg.sender) {
                isAdmin = true;
                break;
            }
        }
        require(isAdmin, "The admin is the only one that can modify admins!");
        _;
    }

    constructor() {
        admins.push(msg.sender);
        _owner=msg.sender;
    }

    function addAdmin(address _admin) public onlyAdmin {
        admins.push(_admin);
    }

    function removeAdmin(address _admin) public onlyOwner {
        for (uint i = 0; i < admins.length; i++) {
            if (admins[i] == _admin) {
                delete admins[i];
                break;
            }
        }
    }

    function startAuction(
        string memory _itemName,
        IERC721 _nftAddress,
        uint256 _nftId,
        uint256 _duration,
        uint256 _startingprice
    ) public onlyAdmin {
        auctionId += 1;
        AuctionItem storage newItem = auctionItems[auctionId];
        newItem.name = _itemName;
        newItem.nftAddress = _nftAddress;
        newItem.nftId = _nftId;
        newItem.duration = _duration;
        newItem.auctionStarted = true;
        newItem.highestBid = 0;
        newItem.highestBidder = address(0);
        newItem.startingPrice = _startingprice;
        
    }

    function placeBid(uint256 _auctionId) public payable {
        AuctionItem storage item = auctionItems[_auctionId];
        require(item.auctionStarted, "Auction not started!");
        require(
            msg.value > item.highestBid,
            "Bid lower than highest bid!"
        );
        require(msg.value > item.startingPrice);

        if (item.highestBidder != address(0)) {
            bids[item.highestBidder] += item.highestBid;
        }

        item.highestBid = msg.value;
        item.highestBidder = msg.sender;
    }

    function withdraw() public {
        require(bids[msg.sender] > 0, "Bid first before you withdraw!");

        uint amount = (bids[msg.sender] * 9) / 10;
        bids[msg.sender] = 0;

        if (!payable(msg.sender).send(amount)) {
            bids[msg.sender] = amount;
        }
    }

    function endAuction(uint256 _auctionId) public onlyAdmin {
        AuctionItem storage item = auctionItems[_auctionId];
        require(item.auctionStarted, "This auction is no longer available!");

        item.auctionStarted = false;
        if (item.highestBidder == address(0)) {
            item.nftAddress.safeTransferFrom(address(this), _owner, item.nftId);
        }
        item.nftAddress.safeTransferFrom(
            address(this),
            item.highestBidder,
            item.nftId
        );

    }

    function withdrawNft(uint256 _auctionId, address _to) public onlyAdmin {
        AuctionItem storage item = auctionItems[_auctionId];
        require(!item.auctionStarted, "The auction has not ended!");
        require(
            item.nftAddress.ownerOf(item.nftId) == address(this),
            "You don't have NFTs!"
        );
        item.nftAddress.safeTransferFrom(address(this), _to, item.nftId);
    }

    receive() payable external {

    }

    fallback() external payable{
        
    }
}
