<script lang="ts">
	import ChevronRight from 'svelte-radix/ChevronRight.svelte';
	import Code from 'svelte-radix/Code.svelte';
	import type { PageData } from './$types.js';
	// import { config } from '$lib/stores/index.js';
	import { cn } from '$lib/utils.js';
	import Article from '$lib/components/Blog/Article.svelte';

	let doc = {
		title: 'Test Post',
		description: 'An insightful and succinct blurb about the post.'
	};

	export let data: PageData;
	$: markdown = data.markdown;
	// $: doc = data.metadata;
	// $: componentSource = data.metadata.source?.replace('default', $config.style ?? 'default');
</script>

<svelte:head>
	<title>{doc.title} | The Coredump</title>
	<meta name="description" content={doc.description} />
	<meta name="author" content="Youwen Wu" />
</svelte:head>

<main class="max-w-4xl md:mx-auto mx-4 mt-8 mb-14">
	<Article title={doc.title} description={doc.description} content={markdown} />
</main>
