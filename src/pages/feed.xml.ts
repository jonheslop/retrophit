import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const parser = new MarkdownIt();

export async function GET(context: { site: string }) {
  const posts = await getCollection("posts");


  const sorted = posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: "RetroPHit.haus",
    description: "Documenting our journey rennovating a Victorian house in East London to the RetroPHit standard",
    site: context.site,
    items: sorted.map((post) => {
      let content = parser.render(post.body ?? "");

      content = `${content}<hr/><p>Thanks for subscribing via RSS ᕕ( ᐛ )ᕗ</p>`;

      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        content: sanitizeHtml(content, {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        }),

        link: `/${post.collection}/${post.id}/`,
      };
    }),
  });
}
