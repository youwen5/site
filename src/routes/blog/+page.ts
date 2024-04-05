import type { PageLoad } from './$types.js';
import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';
import markedAlert from 'marked-alert';

export const prerender = true;
export const csr = false;

const options = {
	throwOnError: false
};
marked.use(markedKatex(options));
marked.use(markedAlert());

export const load: PageLoad = async ({ fetch }) => {
	try {
		const data = await fetch('/test.md');
		const markdown = await marked.parse(await data.text());

		return {
			markdown
		};
	} catch (e) {
		return {
			markdown: `Error: ${e}`
		};
	}
};
