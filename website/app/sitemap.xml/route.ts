export async function GET() {
    const { default: LOADERS } = await import("@/lib/config/loaders");
    const baseUrl = "https://cliloaders.com";
    const loaderUrls = Object.keys(LOADERS).map(
        (slug) => `    <url>\n      <loc>${baseUrl}/${slug}</loc>\n      <changefreq>weekly</changefreq>\n      <priority>0.8</priority>\n    </url>`
    ).join("\n");
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}/</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${baseUrl}/changelog</loc>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
${loaderUrls}
  </urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}