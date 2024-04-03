import type { PageLoad } from './$types.js';
import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';

const options = {
	throwOnError: false
};
marked.use(markedKatex(options));

export const load: PageLoad = async ({ fetch }) => {
	const data = await fetch('/test.md');
	const markdown = await marked.parse(await data.text());

	return {
		markdown
	};
};
