import { notFound } from "next/navigation";
import { getProductById, getProductsByCategory } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);
  
  if (!product) {
    return { title: "Product Not Found — R.D. Concrete Co." };
  }
  
  return {
    title: `${product.name} — R.D. Concrete Co.`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);
  
  if (!product || product.status !== "active") {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
