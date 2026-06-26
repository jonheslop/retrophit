// @ts-check

import cloudflare from "@astrojs/cloudflare";
import { satteri } from "@astrojs/markdown-satteri";
import mdx from "@astrojs/mdx";
import { defineConfig, fontProviders } from "astro/config";

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
	fonts: [
		{
			provider: fontProviders.local(),
			name: "plantijn",
			cssVariable: "--font-plantijn",
			options: {
				variants: [
					{
						weight: 400,
						style: "normal",
						src: ["./src/fonts/test-martina-plantijn-regular.woff2"],
					},
					{
						weight: 400,
						style: "italic",
						src: ["./src/fonts/test-martina-plantijn-italic.woff2"],
					},
					{
						weight: 500,
						style: "normal",
						src: ["./src/fonts/test-martina-plantijn-medium.woff2"],
					},
					{
						weight: 500,
						style: "italic",
						src: ["./src/fonts/test-martina-plantijn-medium-italic.woff2"],
					},
					{
						weight: 700,
						style: "normal",
						src: ["./src/fonts/test-martina-plantijn-bold.woff2"],
					},
					{
						weight: 900,
						style: "normal",
						src: ["./src/fonts/test-martina-plantijn-black.woff2"],
					},
				],
			},
		},
	],
});
