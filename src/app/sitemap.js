import { products } from "@/data/products";

export default function sitemap() {
  const baseUrl = "https://www.rdccindia.com";

  // Core Static Pages
  const staticPages = [
    "",
    "/about",
    "/products",
    "/certificates",
    "/clients",
    "/contact",
    "/privacy",
    "/terms",
    "/faq",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic Product Pages
  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...productPages];
}
