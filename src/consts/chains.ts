import { defineChain } from "thirdweb";

/**
 * All chains should be exported from this file
 */
export { ethereum } from "thirdweb/chains";

/**
 * Define any custom chain using `defineChain`
 */
export const bitrock = defineChain(7171); // don't actually use this
