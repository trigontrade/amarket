import type { Chain } from "thirdweb";
import { avalancheFuji, ethereum } from "./chains";
import { base, baseSepolia } from "thirdweb/chains";

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
    description: "Purchase this Steakhouse: Liberatorz Dmerch for a free steak meal IRL at participating Atlanta restaurants in the ATL5D Discord #foodie channel",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/bafybeigonh3hde5suwcb3qvkh6ljtvxv7ubfmcqbwfvi3ihoi3igd27jwe/SteakhouseLogo.svg",
    type: "ERC721",
  },
  {
    address: "0xC5A2c72c581eA4A17e17bEeF38a9597132830401",
    chain: avalancheFuji,
    title: "Ties",
    description: "Purchase these Dmerch ties to unlock a free $100 tie.",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/bafybeidaadqapi7twzd7pjp24tu4ngsr3teubrhop7hg3jk3oj6lqysfgm/OS-LOGO.png",
    slug: "ugly-waifu",
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
    description: "Buy this Bot Dmerch to unlock AI ATL5D services.",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/bafybeiay3ffxy3os56bvnu5cmq7gids4v6n4hf5nvvcb3gy2dzavi3ltnu/profile.jpg",
    slug: "gorobot",
    type: "ERC721",
  },
  {
    address: "0x78C9d5e3479aD27c4869aF9E1922C6fFb5829Ac8",
    chain: ethereum,
    title: "M.L.K DRIVE LNE",
    description: "Buy this M.L.K DRIVE LNE deed mapped to the Atlanta MLK Drive.",
    thumbnailUrl:
      "https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeigj2rewdhrxpkgchrdrukprnvmg2hpqzn4s4nowovvm6fvpn4wwli/MLK%201080.jpg",
    type: "ERC1155",
  },
];
