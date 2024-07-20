import { MetadataRoute } from "next";
import { siteUrl } from "./constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: [],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
