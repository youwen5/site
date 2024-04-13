<script lang="ts">
	import type { PageData } from './$types';
	import Article from '$lib/components/Blog/Article.svelte';
	import { toc, createTocStore } from '@svelte-put/toc';
	import StickyToc from '$lib/components/Toc/StickyToc.svelte';
	import TocHeader from '$lib/components/Toc/TocHeader.svelte';
	import '$lib/styles/katex.css';
	import '$lib/styles/markdown.pcss';
	import { onMount } from 'svelte';

	const tocStore = createTocStore();

	export let data: PageData;

	let doc: BlogDocument = {
		title: data.metadata.title,
		primaryTags: data.metadata.manifest.tags.primary,
		secondaryTags: data.metadata.manifest.tags.secondary,
		date: data.metadata.manifest.date,
		content: data.content,
		blurb: data.metadata.manifest.blurb,
		description: data.metadata.manifest.description,
		slug: data.slug,
		image: data.metadata.cover
	};

	onMount(() => {
		console.log(data.metadata.deps);
		console.log(data.metadata);
	});
</script>

<svelte:head>
	<title>{doc.title} | The Coredump</title>
	<meta name="description" content={doc.description} />
	<meta name="author" content="Youwen Wu" />

	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.min.css"
		integrity="sha512-dSQLLtgaq2iGigmy9xowRshaMzUHeiIUTvJW/SkUpb1J+ImXOPNGAI7ZC8V5/PiN/XN83B8uIk4qET7AMhdC5Q=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

<TocHeader {tocStore} placeholder="On this page" />

<div class="lg:flex mx-auto mt-24 lg:mt-14 px-4">
	<div class="flex-shrink xl:basis-1/4" />
	<main
		class="flex-grow basis-3/4 xl:basis-2/4 flex-shrink"
		use:toc={{
			store: tocStore,
			observe: true,
			anchor: {
				properties: { 'aria-hidden': 'true', class: 'hidden' },
				position: 'before'
			},
			scrollMarginTop: 150,
			selector: ':where(h2, h3, h4, h5, h6)'
		}}
	>
		<Article {doc} />
	</main>

	<aside class="basis-1/4 relative hidden lg:block">
		<div class="fixed mx-8">
			<StickyToc {tocStore} />
		</div>
	</aside>
</div>
