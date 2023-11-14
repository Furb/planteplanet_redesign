import Link from "next/link";
import { getProducts } from "@/utils/woo-api";

export default async function Products() {
  const product__list = await getProducts();
  return (
    <section className='py-24'>
      <h2 className='text-right'>45 products</h2>

      <div className='flex justify-between'>
        <div id='sidebar'>Sidebar</div>
        <div
          id='product__list'
          className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'
        >
          {product__list.map((product) => (
            <Link
              href={`/shop/product/${product.slug}`}
              className='flex flex-col'
              key={product.id}
            >
              <p>{product.name}</p>
              <p>{product.id}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
