import { NextResponse } from "next/server";

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_PLANTEPLANETER,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

export async function GET(request: Request) {
  const { data } = await api.get("products");
  return NextResponse.json(data);
}
