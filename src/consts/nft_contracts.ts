import type { Chain } from "thirdweb";
import { avalancheFuji, polygonAmoy } from "./chains";
import { base, baseSepolia } from "thirdweb/chains";
import { baseGoerli, baseMainnet } from "thirdweb/chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0x6b869a0cF84147f05a447636c42b8E53De65714E",
    chain: avalancheFuji,
    title: "Steakhouse: Liberatorz",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/bafybeigonh3hde5suwcb3qvkh6ljtvxv7ubfmcqbwfvi3ihoi3igd27jwe/SteakhouseLogo.svg",
    type: "ERC721",
  },
  {
    address: "0xFfad5A63E1Ed90DaC920A11340f9DfBc0ed3d3ee",
    chain: baseMainnet,
    title: "Welcome to ATL5D",
    description: "You can flip this Welcome to ATL5D sign in the ATL5D Discord.",
    thumbnailUrl:
      "https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeid5v6etpjup37xxann3xhkqaxkoiebku5tqt5xbegnfqvdmvpykji/0.jpg",
    slug: "atl5d",
    type: "ERC721",
  },

  {
    address: "0x0896Db00D8987Fba2152aa7c14c4255eBC7354cE",
    chain: avalancheFuji,
    title: "Happiness Engineers",
    description: "Buy this Dmerch to unlock a joke that will turn your frown upside down.",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/Qmct2vS78Uwug3zVtqQognskPPRmd4wRQiaDAQWt1kRJws/0.png",
    slug: "unnamed-collection",
    type: "ERC721",
  },
  {
    address: "0x0ACaCa3d3F64bb6e6D3564BBc891c58Bd4A4c83c",
    chain: avalancheFuji,
    title: "GoroBot",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/bafybeiay3ffxy3os56bvnu5cmq7gids4v6n4hf5nvvcb3gy2dzavi3ltnu/profile.jpg",
    slug: "gorobot",
    type: "ERC721",
  },
  {
    address: "0x4b6CDEFF5885A57678261bb95250aC43aD490752",
    chain: polygonAmoy,
    title: "Mata NFT",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/bafybeidec7x6bptqmrxgptaedd7wfwxbsccqfogzwfsd4a7duxn4sdmnxy/0.png",
    type: "ERC721",
  },
];
