import type { Metadata } from "next";
import { site } from "@/data/site";

export const siteUrl = new URL(site.url);
export const defaultSocialImage = "/images/2021-05-11.jpg";
export const defaultTitle = "Gomez Hospital Avissawella | Private Healthcare & Medical Services";
export const defaultDescription = "Gomez Hospital in Avissawella provides private healthcare, specialist consultations, laboratory, pharmacy, emergency, diagnostic, inpatient and channeling services.";

/** Use the production origin and omit filters, fragments and trailing slashes. */
export function canonicalUrl(path: string): string {
  const url = new URL(path, siteUrl);
  const pathname = url.pathname.replace(/\/+$/, "") || "/";
  return new URL(pathname, siteUrl).toString();
}

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

export function createPageMetadata({
  title, description, path, image = defaultSocialImage,
  imageAlt = "Gomez Hospital Avissawella main building",
}: PageMetadata): Metadata {
  const canonical = canonicalUrl(path);
  const socialTitle = title.includes("Gomez Hospital")
    ? title : title + " | Gomez Hospital Avissawella";
  return {
    // Existing complete branded titles bypass the root template to avoid duplication.
    title: title.includes("Gomez Hospital") ? { absolute: title } : title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website", locale: "en_LK", url: canonical,
      siteName: site.name, title: socialTitle, description,
      images: [{
        url: new URL(image, siteUrl).toString(), alt: imageAlt,
        ...(image === defaultSocialImage ? { width: 1360, height: 766 } : {}),
      }],
    },
    twitter: {
      card: "summary_large_image", title: socialTitle, description,
      images: [{ url: new URL(image, siteUrl).toString(), alt: imageAlt }],
    },
  };
}
