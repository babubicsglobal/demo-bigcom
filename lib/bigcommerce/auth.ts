import BigCommerce from "node-bigcommerce";

export const bigcommerce = new BigCommerce({
  logLevel: "info",
  clientId: process.env.BIGCOMMERCE_CLIENT_ID,
  secret: process.env.BIGCOMMERCE_CLIENT_SECRET,
  callback: process.env.BIGCOMMERCE_AUTH_CALLBACK,
  // storeHash: process.env.BIGCOMMERCE_STORE_HASH,
  responseType: "json",
  headers: { "Accept-Encoding": "*" },
  apiVersion: "v3",
});

const bigcommerceSigned = new BigCommerce({
  secret: process.env.CLIENT_SECRET,
  responseType: "json",
});

interface QueryParams {
  [key: string]: string;
}
export function getBCAuth(query: QueryParams) {
  return bigcommerce.authorize(query);
}

// export function getBCVerify({ signed_payload_jwt }: QueryParams) {
//   return bigcommerceSigned.verifyJWT(signed_payload_jwt);
// }

export const bigcommerceClient = new BigCommerce({
  clientId: "5cu4ij70utxhqj451z67hp3ctxxybj5",
  accessToken: "dgtsnbwbi2gvbewborkhqv8hi7ybxv2",
  storeHash: "vsswcwmpjr",
  responseType: "json",
  headers: { "Accept-Encoding": "*" },
  apiVersion: "v3",
});
