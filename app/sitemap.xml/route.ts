export const dynamic = "force-dynamic";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://chiboy.vercel.app/</loc>
  </url>
  <url>
    <loc>https://chiboy.vercel.app/kemitraan</loc>
  </url>
  <url>
    <loc>https://chiboy.vercel.app/dokumentasi</loc>
  </url>
  <url>
    <loc>https://chiboy.vercel.app/testimoni</loc>
  </url>
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=UTF-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
    },
  });
}