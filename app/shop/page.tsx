import Products from "@/components/Products";

function Shop() {
  return (
    <section>
      {/* @ts-expect-error Async Server Component */}
      <Products />
    </section>
  );
}

export default Shop;
