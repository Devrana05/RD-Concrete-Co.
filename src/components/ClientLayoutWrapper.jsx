"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Check if we are on an admin route
  const isAdminRoute = pathname && pathname.startsWith("/admin");

  if (isAdminRoute) {
    // Return just the children (no storefront Navbar or Footer)
    // The specific admin layout will handle its own shell.
    return <>{children}</>;
  }

  // Standard storefront layout
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingSocial />
    </>
  );
}
