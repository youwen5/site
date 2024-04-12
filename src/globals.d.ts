interface BlogDocument {
	date: Date;
	title: string;
	content: string;
	primaryTags: string[];
	secondaryTags: string[];
	blurb: string;
	image?: string;
	description: string;
	slug;
}

declare module 'remark-sectionize';

type PostMeta = {
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
