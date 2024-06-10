import type { Chain } from "thirdweb";
import { avalancheFuji, base, polygonAmoy, sepolia, ethereum } from "./chains";
import { polygon } from "thirdweb/chains"

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0x8C1D464B385A2B7EAa80dcAAD66DD8BC0256e717",
    chain: avalancheFuji,
  },
  {
    address: "0x571B773F1e4A7C080b51C36f37e06f371C515569",
    chain: polygonAmoy,
  },
  {
    address: "0xe0eFD6fb388405b67b3E9FaFc02649c70E749f03",
    chain: sepolia,
  },
  {
    address: "0xcc85af4E1EFB3F8A378D20016020124917206E4b",
    chain: base,
  },
  {
    address: "0xcc85af4E1EFB3F8A378D20016020124917206E4b",
    chain: sepolia,
  },
  {
    address: "0xaA4F87a8A991EbAeCA3a2d22eF16898D61A2371a",
    chain: polygon,
  },
  {
    address: "0xcc85af4E1EFB3F8A378D20016020124917206E4b",
    chain: ethereum,
  },
];
