import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://yaarrwinlogin.com/";

const paths = [
  "/",
  "/games",
  "/how-to-play",
  "/yaarwin-login",
  "/yaarwin-register",
  "/gift-code",
  "/gift-code-guide",
  "/download-app",
  "/yaarwin-agency-programme",
  "/yaarwin-bonuses",
  "/yaarwin-giftcode-today",
  "/yaarwin-working-gift-codes-2026",
  "/about",
  "/contact",
  "/blog",
  "/faq",
  "/editorial-policy",
  "/content-review-policy",
  "/responsible-gaming",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
  "/sitemap",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0] || "";

        const urls = paths
          .map((p) => {
            const priority = p === "/" ? "1.0" : "0.7";

            return `
  <url>
    <loc>${BASE_URL}${p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
          })
          .join("");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
