interface BlogDocument {
	date: Date;
	title: string;
	content: string;
	primaryTags: string[];
	secondaryTags: string[];
	blurb: string;
	image: { src: string; alt: string; caption: string };
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
		caption: string;
	};
};
