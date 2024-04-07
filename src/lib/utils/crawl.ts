import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import toml from 'toml';

export type PostMeta = {
	title: string;
	manifest: {
		authors: string[];
		date: Date;
		tags: { primary: string[]; secondary: string[] };
		blurb: string;
		description: string;
	};
	cover: {
		src: string;
		alt: string;
	};
};

export default async () => {
	const blogPath = join(process.cwd(), 'blog');
	const years = await readdir(blogPath);

	const posts: {
		[key: string]: {
			metadata: PostMeta;
			content: string;
		};
	} = {};

	for (const year of years) {
		const yearPath = join(blogPath, year);
		const directories = await readdir(yearPath);

		for (const directory of directories) {
			const postPath = join(yearPath, directory);
			const postTomlPath = join(postPath, 'post.toml');
			const contentPath = join(postPath, 'content.md');

			try {
				const postToml = await readFile(postTomlPath, 'utf-8');
				const content = await readFile(contentPath, 'utf-8');

				const metadata = toml.parse(postToml);

				posts[`${year}/${directory}`] = {
					metadata,
					content
				};
			} catch (error) {
				throw new Error(`Error reading post: ${error}`);
			}
		}
		return posts;
	}
};
