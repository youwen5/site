<script lang="ts">
	import ChevronRight from 'svelte-radix/ChevronRight.svelte';
	import Code from 'svelte-radix/Code.svelte';
	import type { PageData } from './$types.js';
	// import { config } from '$lib/stores/index.js';
	import { cn } from '$lib/utils.js';

	let doc = {
		title: 'Test Post',
		description: ''
	};

	export let data: PageData;
	$: markdown = data.markdown;
	// $: doc = data.metadata;
	// $: componentSource = data.metadata.source?.replace('default', $config.style ?? 'default');
</script>

<svelte:head>
	<title>Youwen Wu | The Coredump</title>
	<meta name="description" content="My blog on computer science, math, and more." />
	<meta name="author" content="Youwen Wu" />
</svelte:head>

<main class="container max-w-5xl mx-auto my-8">
	<div class="mx-auto w-full min-w-0 mb-4">
		<div class="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
			<div class="overflow-hidden text-ellipsis whitespace-nowrap">Docs</div>
			<ChevronRight class="h-4 w-4" />
			<div class="font-medium text-foreground">{doc.title}</div>
		</div>
		<div class="space-y-2">
			<h1 class={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
				{doc.title}
			</h1>
			{#if doc.description}
				<p class="text-balance text-lg text-muted-foreground">
					{doc.description}
				</p>
			{/if}
		</div>

		<!-- <div class="pb-12 pt-8 mx-auto"> -->
		<!-- </div> -->
		<!-- <div class="hidden text-sm xl:block">
		<div class="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden pt-4">
			{#key $page.url.pathname}
				<TableOfContents />
			{/key}
		</div>
	</div> -->
	</div>
	{@html markdown}
</main>
