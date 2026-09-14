import type { Metadata } from "next";

export const siteUrl = new URL("https://gomezhospital.com");
export const defaultSocialImage = "/images/2021-05-11.jpg";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultSocialImage,
}: PageMetadata): Metadata {
  const canonical = new URL(path, siteUrl);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_LK",
      url: canonical,
      siteName: "Gomez Hospital",
      title,
      description,
      images: [
        {
          url: image,
          width: 1360,
          height: 768,
          alt: "Gomez Hospital in Avissawella",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
