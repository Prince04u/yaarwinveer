import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const paths = [
  "/", "/games", "/how-to-play", "/yaarwin-login", "/yaarwin-register",
  "/gift-code", "/gift-code-guide", "/download-app",
  "/yaarwin-agency-programme", "/yaarwin-bonuses",
  "/yaarwin-giftcode-today", "/yaarwin-working-gift-codes-2026",
  "/about", "/contact", "/blog", "/faq",
  "/editorial-policy", "/content-review-policy", "/responsible-gaming",
  "/privacy-policy", "/terms", "/disclaimer", "/sitemap",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.7"}</priority></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
