import type { PageLoad } from './$types.js';
import { unified } from 'unified';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkGfm from 'remark-gfm';
import remarkGhAlerts from 'remark-gh-alerts';

export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
	try {
		const data = await fetch('/test.md');
		const content = String(
			await unified()
				.use(remarkParse)
				.use(remarkGfm)
				.use(remarkGhAlerts)
				.use(remarkMath)
				.use(remarkRehype)
				.use(rehypeKatex)
				.use(rehypeStringify)
				.process(await data.text())
		);

		if (typeof content === 'undefined') throw new Error('No content');

		return {
			content
		};
	} catch (e) {
		return {
			markdown: `Error: ${e}`
		};
	}
};
