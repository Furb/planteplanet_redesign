import { Product } from "@/utils/wooCommerceTypes";

export async function getProducts() {
  const res = await fetch("http://localhost:3000/api/get-products");
  // Her stater handle errors.
  if (!res.ok) {
    throw new Error("Failed to fetch planteplanet produkter");
  }
  const product__list: Product[] = await res.json();
  return product__list;
}

export async function getProduct(slug: string): Promise<Product> {
  const res = await fetch(
    `http://localhost:3000/api/get-products/?=${slug}[0]`
  );
  // Her stater handle errors.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("ØØØVVVVV kunne ikke finde planteplaneten");
  }

  const product__single: Product = await res.json();
  return product__single;
}
