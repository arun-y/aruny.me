import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Arun Yadav (@aruny)

Software Engineer, builder and tinkerer with web, AI and computers in general.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- GitHub: [@aruny](https://github.com/arun-y)
- Email: hi@aruny.me

---

*This is the markdown-only version of aruny.me. Visit [aruny.me](https://aruny.me) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
