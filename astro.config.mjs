// @ts-check

import cloudflare from "@astrojs/cloudflare";
import { satteri } from "@astrojs/markdown-satteri";
import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://retrophit.haus",
	adapter: cloudflare({
		imageService: "compile",
	}),
	markdown: {
		processor: satteri({
			features: { directive: true },
		}),
	},
	integrations: [mdx()],
});
