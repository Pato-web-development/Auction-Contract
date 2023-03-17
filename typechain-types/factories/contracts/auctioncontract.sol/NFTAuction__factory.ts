/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  NFTAuction,
  NFTAuctionInterface,
} from "../../../contracts/auctioncontract.sol/NFTAuction";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "addAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "admins",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "auctionId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "auctionItems",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "contract IERC721",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "auctionStarted",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "highestBid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "highestBidder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "startingPrice",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "bids",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "endAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "placeBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "removeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_itemName",
        type: "string",
      },
      {
        internalType: "contract IERC721",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startingprice",
        type: "uint256",
      },
    ],
    name: "startAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdrawNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d6100226100d660201b60201c565b6100de60201b60201c565b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101a2565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61230380620001b26000396000f3fe6080604052600436106100e15760003560e01c80638153ad711161007f578063b9a2de3a11610059578063b9a2de3a1461027f578063d2c069f0146102a8578063d907b130146102ec578063f2fde38b14610315576100e8565b80638153ad711461020f5780638da5cb5b146102385780639979ef4514610263576100e8565b80633ccfd60b116100bb5780633ccfd60b1461017b57806362ea82db1461019257806370480275146101cf578063715018a6146101f8576100e8565b806310782f8f146100ea57806314bfd6d0146101155780631785f53c14610152576100e8565b366100e857005b005b3480156100f657600080fd5b506100ff61033e565b60405161010c91906114b0565b60405180910390f35b34801561012157600080fd5b5061013c6004803603810190610137919061150b565b610344565b6040516101499190611579565b60405180910390f35b34801561015e57600080fd5b50610179600480360381019061017491906115c0565b610383565b005b34801561018757600080fd5b50610190610469565b005b34801561019e57600080fd5b506101b960048036038101906101b491906115c0565b61060d565b6040516101c691906114b0565b60405180910390f35b3480156101db57600080fd5b506101f660048036038101906101f191906115c0565b610625565b005b34801561020457600080fd5b5061020d61076b565b005b34801561021b57600080fd5b5061023660048036038101906102319190611771565b61077f565b005b34801561024457600080fd5b5061024d610975565b60405161025a9190611579565b60405180910390f35b61027d6004803603810190610278919061150b565b61099e565b005b34801561028b57600080fd5b506102a660048036038101906102a1919061150b565b610b83565b005b3480156102b457600080fd5b506102cf60048036038101906102ca919061150b565b610eb9565b6040516102e3989796959493929190611901565b60405180910390f35b3480156102f857600080fd5b50610313600480360381019061030e9190611986565b610fd6565b005b34801561032157600080fd5b5061033c600480360381019061033791906115c0565b6112ca565b005b60025481565b6001818154811061035457600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61038b61134d565b60005b600180549050811015610465578173ffffffffffffffffffffffffffffffffffffffff16600182815481106103c6576103c56119c6565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361045257600181815481106104205761041f6119c6565b5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055610465565b808061045d90611a24565b91505061038e565b5050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116104eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e290611ab8565b60405180910390fd5b6000600a6009600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461053b9190611ad8565b6105459190611b49565b90506000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505061060a5780600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b50565b60036020528060005260406000206000915090505481565b6000805b6001805490508110156106c3573373ffffffffffffffffffffffffffffffffffffffff1660018281548110610661576106606119c6565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036106b057600191506106c3565b80806106bb90611a24565b915050610629565b5080610704576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fb90611bec565b60405180910390fd5b6001829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b61077361134d565b61077d60006113cb565b565b6000805b60018054905081101561081d573373ffffffffffffffffffffffffffffffffffffffff16600182815481106107bb576107ba6119c6565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361080a576001915061081d565b808061081590611a24565b915050610783565b508061085e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085590611bec565b60405180910390fd5b6001600260008282546108719190611c0c565b9250508190555060006005600060025481526020019081526020016000209050868160000190816108a29190611e42565b50858160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084816002018190555083816003018190555060018160040160006101000a81548160ff0219169083151502179055506000816005018190555060008160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082816007018190555050505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006005600083815260200190815260200160002090508060040160009054906101000a900460ff16610a06576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109fd90611f60565b60405180910390fd5b80600501543411610a4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4390611ff2565b60405180910390fd5b80600701543411610a5c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168160060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b33578060050154600360008360060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b2b9190611c0c565b925050819055505b348160050181905550338160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000805b600180549050811015610c21573373ffffffffffffffffffffffffffffffffffffffff1660018281548110610bbf57610bbe6119c6565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610c0e5760019150610c21565b8080610c1990611a24565b915050610b87565b5080610c62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5990611bec565b60405180910390fd5b60006005600084815260200190815260200160002090508060040160009054906101000a900460ff16610cca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc19061205e565b60405180910390fd5b60008160040160006101000a81548160ff021916908315150217905550600073ffffffffffffffffffffffffffffffffffffffff168160060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610df9578060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342842e0e30600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684600201546040518463ffffffff1660e01b8152600401610dc69392919061207e565b600060405180830381600087803b158015610de057600080fd5b505af1158015610df4573d6000803e3d6000fd5b505050505b8060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342842e0e308360060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684600201546040518463ffffffff1660e01b8152600401610e829392919061207e565b600060405180830381600087803b158015610e9c57600080fd5b505af1158015610eb0573d6000803e3d6000fd5b50505050505050565b6005602052806000526040600020600091509050806000018054610edc90611c6f565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0890611c6f565b8015610f555780601f10610f2a57610100808354040283529160200191610f55565b820191906000526020600020905b815481529060010190602001808311610f3857829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154908060040160009054906101000a900460ff16908060050154908060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060070154905088565b6000805b600180549050811015611074573373ffffffffffffffffffffffffffffffffffffffff1660018281548110611012576110116119c6565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036110615760019150611074565b808061106c90611a24565b915050610fda565b50806110b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ac90611bec565b60405180910390fd5b60006005600085815260200190815260200160002090508060040160009054906101000a900460ff161561111e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111590612101565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e83600201546040518263ffffffff1660e01b815260040161119691906114b0565b602060405180830381865afa1580156111b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111d79190612136565b73ffffffffffffffffffffffffffffffffffffffff161461122d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611224906121af565b60405180910390fd5b8060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342842e0e308584600201546040518463ffffffff1660e01b81526004016112929392919061207e565b600060405180830381600087803b1580156112ac57600080fd5b505af11580156112c0573d6000803e3d6000fd5b5050505050505050565b6112d261134d565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611341576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133890612241565b60405180910390fd5b61134a816113cb565b50565b61135561148f565b73ffffffffffffffffffffffffffffffffffffffff16611373610975565b73ffffffffffffffffffffffffffffffffffffffff16146113c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c0906122ad565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000819050919050565b6114aa81611497565b82525050565b60006020820190506114c560008301846114a1565b92915050565b6000604051905090565b600080fd5b600080fd5b6114e881611497565b81146114f357600080fd5b50565b600081359050611505816114df565b92915050565b600060208284031215611521576115206114d5565b5b600061152f848285016114f6565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061156382611538565b9050919050565b61157381611558565b82525050565b600060208201905061158e600083018461156a565b92915050565b61159d81611558565b81146115a857600080fd5b50565b6000813590506115ba81611594565b92915050565b6000602082840312156115d6576115d56114d5565b5b60006115e4848285016115ab565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611640826115f7565b810181811067ffffffffffffffff8211171561165f5761165e611608565b5b80604052505050565b60006116726114cb565b905061167e8282611637565b919050565b600067ffffffffffffffff82111561169e5761169d611608565b5b6116a7826115f7565b9050602081019050919050565b82818337600083830152505050565b60006116d66116d184611683565b611668565b9050828152602081018484840111156116f2576116f16115f2565b5b6116fd8482856116b4565b509392505050565b600082601f83011261171a576117196115ed565b5b813561172a8482602086016116c3565b91505092915050565b600061173e82611558565b9050919050565b61174e81611733565b811461175957600080fd5b50565b60008135905061176b81611745565b92915050565b600080600080600060a0868803121561178d5761178c6114d5565b5b600086013567ffffffffffffffff8111156117ab576117aa6114da565b5b6117b788828901611705565b95505060206117c88882890161175c565b94505060406117d9888289016114f6565b93505060606117ea888289016114f6565b92505060806117fb888289016114f6565b9150509295509295909350565b600081519050919050565b600082825260208201905092915050565b60005b83811015611842578082015181840152602081019050611827565b60008484015250505050565b600061185982611808565b6118638185611813565b9350611873818560208601611824565b61187c816115f7565b840191505092915050565b6000819050919050565b60006118ac6118a76118a284611538565b611887565b611538565b9050919050565b60006118be82611891565b9050919050565b60006118d0826118b3565b9050919050565b6118e0816118c5565b82525050565b60008115159050919050565b6118fb816118e6565b82525050565b600061010082019050818103600083015261191c818b61184e565b905061192b602083018a6118d7565b61193860408301896114a1565b61194560608301886114a1565b61195260808301876118f2565b61195f60a08301866114a1565b61196c60c083018561156a565b61197960e08301846114a1565b9998505050505050505050565b6000806040838503121561199d5761199c6114d5565b5b60006119ab858286016114f6565b92505060206119bc858286016115ab565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611a2f82611497565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611a6157611a606119f5565b5b600182019050919050565b7f596f7520646f6e277420686176652061206269642e0000000000000000000000600082015250565b6000611aa2601583611813565b9150611aad82611a6c565b602082019050919050565b60006020820190508181036000830152611ad181611a95565b9050919050565b6000611ae382611497565b9150611aee83611497565b9250828202611afc81611497565b91508282048414831517611b1357611b126119f5565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611b5482611497565b9150611b5f83611497565b925082611b6f57611b6e611b1a565b5b828204905092915050565b7f4f6e6c792061646d696e732063616e20706572666f726d2074686973206f706560008201527f726174696f6e2e00000000000000000000000000000000000000000000000000602082015250565b6000611bd6602783611813565b9150611be182611b7a565b604082019050919050565b60006020820190508181036000830152611c0581611bc9565b9050919050565b6000611c1782611497565b9150611c2283611497565b9250828201905080821115611c3a57611c396119f5565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611c8757607f821691505b602082108103611c9a57611c99611c40565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611d027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611cc5565b611d0c8683611cc5565b95508019841693508086168417925050509392505050565b6000611d3f611d3a611d3584611497565b611887565b611497565b9050919050565b6000819050919050565b611d5983611d24565b611d6d611d6582611d46565b848454611cd2565b825550505050565b600090565b611d82611d75565b611d8d818484611d50565b505050565b5b81811015611db157611da6600082611d7a565b600181019050611d93565b5050565b601f821115611df657611dc781611ca0565b611dd084611cb5565b81016020851015611ddf578190505b611df3611deb85611cb5565b830182611d92565b50505b505050565b600082821c905092915050565b6000611e1960001984600802611dfb565b1980831691505092915050565b6000611e328383611e08565b9150826002028217905092915050565b611e4b82611808565b67ffffffffffffffff811115611e6457611e63611608565b5b611e6e8254611c6f565b611e79828285611db5565b600060209050601f831160018114611eac5760008415611e9a578287015190505b611ea48582611e26565b865550611f0c565b601f198416611eba86611ca0565b60005b82811015611ee257848901518255600182019150602085019450602081019050611ebd565b86831015611eff5784890151611efb601f891682611e08565b8355505b6001600288020188555050505b505050505050565b7f61756374696f6e206e6f74207374617274656400000000000000000000000000600082015250565b6000611f4a601383611813565b9150611f5582611f14565b602082019050919050565b60006020820190508181036000830152611f7981611f3d565b9050919050565b7f596f757220626964206d75737420626520686967686572207468616e2074686560008201527f2063757272656e742068696768657374206269642e0000000000000000000000602082015250565b6000611fdc603583611813565b9150611fe782611f80565b604082019050919050565b6000602082019050818103600083015261200b81611fcf565b9050919050565b7f41756374696f6e206e6f7420696e2070726f6772657373000000000000000000600082015250565b6000612048601783611813565b915061205382612012565b602082019050919050565b600060208201905081810360008301526120778161203b565b9050919050565b6000606082019050612093600083018661156a565b6120a0602083018561156a565b6120ad60408301846114a1565b949350505050565b7f41756374696f6e206973207374696c6c206f6e676f696e672e00000000000000600082015250565b60006120eb601983611813565b91506120f6826120b5565b602082019050919050565b6000602082019050818103600083015261211a816120de565b9050919050565b60008151905061213081611594565b92915050565b60006020828403121561214c5761214b6114d5565b5b600061215a84828501612121565b91505092915050565b7f6e6674206e6f742070726573656e740000000000000000000000000000000000600082015250565b6000612199600f83611813565b91506121a482612163565b602082019050919050565b600060208201905081810360008301526121c88161218c565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061222b602683611813565b9150612236826121cf565b604082019050919050565b6000602082019050818103600083015261225a8161221e565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612297602083611813565b91506122a282612261565b602082019050919050565b600060208201905081810360008301526122c68161228a565b905091905056fea2646970667358221220b83fc2742dfc885a40cac01982365ea4eb4802405f3070555bfe652be568d7af64736f6c63430008110033";

type NFTAuctionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTAuctionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTAuction__factory extends ContractFactory {
  constructor(...args: NFTAuctionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTAuction> {
    return super.deploy(overrides || {}) as Promise<NFTAuction>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTAuction {
    return super.attach(address) as NFTAuction;
  }
  override connect(signer: Signer): NFTAuction__factory {
    return super.connect(signer) as NFTAuction__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTAuctionInterface {
    return new utils.Interface(_abi) as NFTAuctionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTAuction {
    return new Contract(address, _abi, signerOrProvider) as NFTAuction;
  }
}