<script lang="ts">
	import Archive from '$lib/components/Blog/Archive.svelte';

	import ChevronRight from 'svelte-radix/ChevronRight.svelte';
	import type { PageData } from './$types.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Coredump from '$lib/assets/Coredump.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import PostCard from '$lib/components/Blog/PostCard.svelte';

	export let data: PageData;

	$: posts = data.posts;

	let loaded = false;

	onMount(() => {
		loaded = true;
	});

	$: postArray = Object.entries(posts).map(([key, value]) => {
		return { slug: key, ...value };
	});
</script>

<svelte:head>
	<title>Youwen Wu | The Coredump</title>
	<meta name="description" content="My blog on computer science, math, games, art, and more." />
	<meta name="author" content="Youwen Wu" />
</svelte:head>

<main class="dots-background">
	<div class="max-w-5xl md:mx-auto py-12 my-1 container px-4">
		{#if loaded}
			<Coredump width="100%" height="auto" transition="vertical" />
			<p
				class="text-lg sm:text-xl md:text-2xl text-muted-foreground font-mono text-center sm:text-left"
				in:fly={{ duration: 300, y: -50, delay: 200 }}
			>
				ramblings on computer science, math, games, and more.
			</p>
			<span
				class="flex flex-wrap items-center mt-8 md:hidden"
				in:fly={{ duration: 300, x: -50, delay: 300 }}
			>
				<a href="#archive" class="flex items-center font-mono gap-2 hover:underline"
					><ChevronRight />Archive</a
				>
			</span>

			<div class="grid grid-cols-3 mt-20 gap-8">
				<div class="col-span-3 md:col-span-2">
					<h2
						class="text-4xl font-serif font-bold"
						id="latest"
						in:fly|global={{ y: -50, delay: 300 }}
					>
						Latest Posts
					</h2>
					{#each postArray as post, i}
						<div
							class="grid grid-cols-1 gap-4 mt-8"
							in:fly|global={{ x: -50, delay: 350 + i * 100 }}
						>
							<PostCard doc={post} />
						</div>
					{/each}
				</div>
				<div in:fly={{ y: -50, delay: 300 }} class="col-span-3 md:col-span-1">
					<Archive />
				</div>
			</div>
		{:else}
			<div class="h-screen"></div>
		{/if}
	</div>
</main>
