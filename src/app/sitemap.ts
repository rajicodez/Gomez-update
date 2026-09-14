import type { MetadataRoute } from "next";
import { branches } from "@/data/branches";
import { healthPackages } from "@/data/packages";
import { siteUrl } from "@/lib/seo";

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

  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
