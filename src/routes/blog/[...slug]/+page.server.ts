import crawl from '$lib/utils/crawl';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';
import parseMarkdown from '$lib/utils/parseMarkdown';

const posts = await crawl();
if (!posts) throw new Error('No posts found!');

export const load: PageServerLoad = async ({ params }) => {
	const post = posts[params.slug];

	if (!post) {
		error(404, 'Post not found.');
	}

	const parsed = await parseMarkdown(post.content);

	return {
		...post,
		content: parsed
	};
};

export const entries: EntryGenerator = () => {
	return Object.keys(posts).map((slug) => ({ slug }));
};
