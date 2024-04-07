<script lang="ts">
	import MobileToc from '$lib/components/Toc/MobileToc.svelte';
	import type { PageData } from './$types';
	import Article from '$lib/components/Blog/Article.svelte';
	import { toc, createTocStore } from '@svelte-put/toc';
	import StickyToc from '$lib/components/Toc/StickyToc.svelte';

	const tocStore = createTocStore();

	export let data: PageData;

	let doc: BlogDocument = {
		title: 'Test Post',
		primaryTags: ['Computer Science', 'Mathematics'],
		secondaryTags: ['Calculus', 'Taylor Series'],
		time: Date.now() / 1000,
		content: data.markdown,
		blurb: 'A short and succinct, yet descriptive blurb about the post.',
		description:
			'An insightful and longer description of the post. This should be a bit more detailed than the blurb. It should give the reader a good idea of what the post is about.'
	};
	// $: doc = data.metadata;
	// $: componentSource = data.metadata.source?.replace('default', $config.style ?? 'default');
</script>

<svelte:head>
	<title>{doc.title} | The Coredump</title>
	<meta name="description" content={doc.description} />
	<meta name="author" content="Youwen Wu" />
</svelte:head>

<div class="lg:flex mx-auto mt-14 px-4">
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
			scrollMarginTop: 120
		}}
	>
		<Article {doc}>
			<svelte:fragment slot="mobile-toc">
				<MobileToc {tocStore} />
			</svelte:fragment>
		</Article>
	</main>

	<aside class="basis-1/4 relative hidden lg:block">
		<div class="fixed mx-8">
			<StickyToc {tocStore} />
		</div>
	</aside>
</div>
