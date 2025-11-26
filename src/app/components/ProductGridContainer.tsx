"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Product_2 } from "../lib/mockProducts";
import ProductCard from "./ProductCard_2";

interface ProductGridContainerProps {
  products: Product_2[];
  initialCount?: number; // How many products to show initially
}

export default function ProductGridContainer({ 
  products, 
  initialCount = 8 
}: ProductGridContainerProps) {
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll ? products : products.slice(0, initialCount);
  const hasMore = products.length > initialCount;

  return (
    <div className="space-y-8">
      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* See More / See Less Button */}
      {hasMore && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-400 to-green-600 hover:from-emerald-500 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-500"
          >
            {showAll ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                <span>See More ({products.length - initialCount} more items)</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}