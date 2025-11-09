import { mockProducts_2 } from "../lib/mockProducts";
import SectionHeader from "./SectionHeader";
import ProductGridContainer from "../components/ProductGridContainer";
import ViewAllButton from "../components/ViewAllButton";

export default function NewArrivalsPage() {
  const products = mockProducts_2; // Replace with actual data fetching when needed

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <SectionHeader
        title="New Arrivals"
        subtitle="Our new arrivals are built to withstand your activities while keeping your style sharp."
      />
      <ProductGridContainer products={products} />
      <ViewAllButton />
    </main>
  );
}
