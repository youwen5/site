<script lang="ts">
	import type { PageData } from './$types';
	import Article from '$lib/components/Blog/Article.svelte';
	import { toc, createTocStore } from '@svelte-put/toc';
	import StickyToc from '$lib/components/Toc/StickyToc.svelte';
	import TocHeader from '$lib/components/Toc/TocHeader.svelte';

	const tocStore = createTocStore();

	export let data: PageData;

	let doc: BlogDocument = {
		title: data.metadata.title,
		primaryTags: data.metadata.manifest.tags.primary,
		secondaryTags: data.metadata.manifest.tags.secondary,
		time: data.metadata.manifest.date.getTime() / 1000,
		content: data.content,
		blurb: data.metadata.manifest.blurb,
		description: data.metadata.manifest.description
	};
	// $: doc = data.metadata;
	// $: componentSource = data.metadata.source?.replace('default', $config.style ?? 'default');
</script>

<svelte:head>
	<title>{doc.title} | The Coredump</title>
	<meta name="description" content={doc.description} />
	<meta name="author" content="Youwen Wu" />
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
