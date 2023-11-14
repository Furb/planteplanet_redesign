import { getProduct } from "@/utils/woo-api";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params: { slug } }: Props) {
  const product__single = await getProduct(slug);
  console.log(product__single);

  return (
    <>
      <h1>{product__single.slug}</h1>
      <h2>{slug}</h2>
    </>
  );
}
