import React from "react";
import CategorySlide from "./micro-components/CategorySlide";

const Category = () => {
  return (
    <section className="mt-10">
      <div className="head mb-8">
        <h2 className="text-center text-gray-900 text-3xl">Shop With Categories</h2>
      </div>

      <div>
        <CategorySlide />
      </div>
    </section>
  );
};

export default Category;
