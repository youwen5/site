<script lang="ts">
	import ChevronRight from 'svelte-radix/ChevronRight.svelte';
	import * as Card from '$lib/components/ui/card';
	import Code from 'svelte-radix/Code.svelte';
	import type { PageData } from './$types.js';
	// import { config } from '$lib/stores/index.js';
	import { cn } from '$lib/utils.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Coredump from '$lib/assets/Coredump.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import PostCard from '$lib/components/Blog/PostCard.svelte';
	import { faker } from '@faker-js/faker';

	let loaded = false;

	onMount(() => {
		loaded = true;
	});

	let testDoc: BlogDocument = {
		title: 'An introduction to Taylor Series',
		primaryTags: ['Computer Science', 'Mathematics'],
		secondaryTags: ['Calculus', 'Taylor Series'],
		time: Date.now() / 1000,
		content:
			"This is a test post to test the layout and rendering of the blog. It's taken directly from my obsidian notebook, so some of the formatting may be off. The blog supports KaTeX math rendering and GitHub markdown alerts. Support for syntax highlighting and graphs is coming soon.",
		blurb: 'A brief introduction to Taylor Series and its applications in calculus.',
		description:
			'An insightful and longer description of the post. This should be a bit more detailed than the blurb. It should give the reader a good idea of what the post is about.'
	};
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
				my blog on computer science, math, games, art, and more.
			</p>
			<span class="flex flex-wrap items-center">
				<a href="#latest">all </a>
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
					{#each Array(5) as _, i}
						{#if i > 0}
							<div
								class="grid grid-cols-1 gap-4 mt-8"
								in:fly|global={{ x: -50, delay: 350 + i * 100 }}
							>
								<PostCard
									doc={{
										title:
											faker.hacker.noun() +
											' ' +
											faker.hacker.verb() +
											' ' +
											faker.hacker.adjective() +
											' ' +
											faker.hacker.noun(),
										primaryTags: Array(2).map(() => faker.hacker.noun()),
										secondaryTags: Array(2).map(() => faker.hacker.noun()),
										time: Date.now() / 1000,
										content: faker.lorem.paragraphs(5),
										blurb: faker.hacker.phrase(),
										description: faker.lorem.paragraphs(2)
									}}
								/>
							</div>
						{:else}
							<div
								class="grid grid-cols-1 gap-4 mt-8"
								in:fly|global={{ x: -50, delay: 350 + i * 100 }}
							>
								<PostCard doc={testDoc} />
							</div>
						{/if}
					{/each}
				</div>
				<div in:fly={{ y: -50, delay: 300 }} class="col-span-3 md:col-span-1">
					<Card.Root class="bg-primary-foreground backdrop-blur-sm border-primary/10">
						<Card.Header>
							<h2 class="text-3xl font-serif font-bold mb-6" id="archive">Archive</h2>
							<h3 class="text-3xl font-serif font-medium text-muted-foreground" id="2024">2024</h3>
							<Separator class="mt-4 bg-primary/10 h-1" />
						</Card.Header>
						<Card.Content>
							{#each Array(5) as _, i}
								<div class="grid grid-cols-1 gap-2 mb-8">
									<h3 class="text-2xl font-serif font-bold">
										{faker.hacker.noun() +
											' ' +
											faker.hacker.verb() +
											' ' +
											faker.hacker.adjective() +
											' ' +
											faker.hacker.noun()}
									</h3>
									<p class="text-lg text-muted-foreground">
										{faker.hacker.phrase()}
									</p>
									<div class="flex items-center gap-2">
										<a href="/blog/2021/01" class="text-primary hover:underline text-lg font-serif"
											>Read more</a
										>
										<ChevronRight class="w-6 h-6 text-primary" />
									</div>
								</div>
							{/each}
						</Card.Content>
					</Card.Root>
				</div>
			</div>
		{:else}
			<div class="h-screen"></div>
		{/if}
	</div>
</main>
