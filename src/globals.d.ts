interface BlogDocument {
	time: number;
	title: string;
	content: string;
	primaryTags: string[];
	secondaryTags: string[];
	blurb: string;
	image?: string;
	description: string;
}

declare module 'remark-sectionize';
