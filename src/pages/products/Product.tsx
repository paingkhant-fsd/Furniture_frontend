import { useState } from "react";
import { products, filterList } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import ProductFilter from "@/components/products/ProductFilter";
import Pagination from "@/components/products/Pagination";

function Product() {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);

  function handleFilterChange(category: string[], type: string[]) {
    setSelectedCategory(category);
    setSelectedType(type);
  }

  return (
    <div className="container mx-auto">
      <section className="flex flex-col lg:ml-0 lg:flex-row">
        <section className="my-8 ml-4 w-full lg:w-1/5">
          <ProductFilter
            filterList={filterList}
            selectedCategory={selectedCategory}
            selectedType={selectedType}
            onFilterChange={handleFilterChange}
          />
        </section>
        <section className="w-full lg:ml-0 lg:w-4/5">
          <h1 className="my-8 ml-4  text-2xl font-bold">All Products</h1>
          <div className="mb-12 grid grid-cols-1 gap-6 gap-y-12 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination />
        </section>
      </section>
    </div>
  );
}

export default Product;
