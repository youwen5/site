<script lang="ts">
	import ChevronRight from 'svelte-radix/ChevronRight.svelte';
	import Code from 'svelte-radix/Code.svelte';
	import type { PageData } from './$types.js';
	// import { config } from '$lib/stores/index.js';
	import { cn } from '$lib/utils.js';
	import Article from '$lib/components/Blog/Article.svelte';
	import { toc, createTocStore } from '@svelte-put/toc';
	import StickyToc from '$lib/components/StickyToc.svelte';
	import { onMount } from 'svelte';

	let distanceFromRight = 0;

	let mainElement: HTMLElement;

	const handleResize = () => {
		const screenWidth = window.innerWidth;
		const mainWidth = mainElement.offsetWidth;
		distanceFromRight = screenWidth - mainWidth - mainElement.offsetLeft;
		console.log(distanceFromRight);
	};

	onMount(() => {
		handleResize();
	});

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

<svelte:window on:resize={handleResize} />

<main
	bind:this={mainElement}
	class="max-w-4xl mx-auto lg:mx-0 xl:mx-auto px-4 mt-8 mb-14"
	use:toc={{
		store: tocStore,
		observe: true,
		anchor: {
			properties: { 'aria-hidden': 'true', 'tab-index': '-1', class: 'hidden' },
			position: 'before'
		}
	}}
>
	<Article {doc} />
</main>

<StickyToc {tocStore} {distanceFromRight} />
