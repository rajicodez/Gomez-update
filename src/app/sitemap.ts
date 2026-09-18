import type { MetadataRoute } from "next";
import { branches } from "@/data/branches";
import { healthPackages } from "@/data/packages";
import { canonicalUrl } from "@/lib/seo";

const publicRoutes = [
  "/",
  "/about",
  "/services",
  "/doctors",
  "/health-packages",
  "/promotion",
  "/event",
  "/careers",
  "/contact",
  "/collecting-centers",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...publicRoutes,
    ...branches.map((branch) => `/branches/${branch.slug}`),
    ...healthPackages.map((healthPackage) => `/health-packages/${healthPackage.id}`),
  ];

  return [...new Set(routes)].map((route) => ({
    url: canonicalUrl(route),
  }));
}
