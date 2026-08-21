import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ravi Teja Marpu | Azure Cloud Data Engineer",
  description: "Portfolio of Ravi Teja Marpu — Azure Cloud Data Engineer specializing in Databricks, PySpark, ETL, DevOps, AI and data platforms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}