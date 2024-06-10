import type { Chain } from "thirdweb";
import { avalancheFuji, ethereum } from "./chains";
import { polygon } from "thirdweb/chains"
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
    address: "0x540713d47c820484cF5eAEE19B3c6131c99ec161",
    chain: polygon,
    title: "Hair Estate",
    description: "Buy this Dmerch Hair Estate to unlock @haircolorvet hair stylist services.",
    thumbnailUrl:
      "https://i.imgur.com/ZpzmdiA.jpeg",
    slug: "hair-estate",
    type: "ERC721",
  },
  {
    address: "0xFfad5A63E1Ed90DaC920A11340f9DfBc0ed3d3ee",
    chain: base,
    title: "Welcome to ATL5D",
    description: "Buy this Welcome to ATL5D Dmerch",
    thumbnailUrl:
      "https://i.imgur.com/bclbtZW.jpeg",
    slug: "atl5d",
    type: "ERC1155",
  },
  {
    address: "0x78C9d5e3479aD27c4869aF9E1922C6fFb5829Ac8",
    chain: polygon,
    title: "M.L.K DRIVE LNE",
    description: "Buy this M.L.K DRIVE LNE deed mapped to the Atlanta MLK Drive.",
    thumbnailUrl:
      "https://i.imgur.com/UJkxIY3.jpeg",
    type: "ERC1155",
  },
];
