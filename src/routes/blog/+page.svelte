<script lang="ts">
	import ChevronRight from 'svelte-radix/ChevronRight.svelte';
	import * as Card from '$lib/components/ui/card';
	import Code from 'svelte-radix/Code.svelte';
	import type { PageData } from './$types.js';
	// import { config } from '$lib/stores/index.js';
	import { cn } from '$lib/utils.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
</script>

<svelte:head>
	<title>Youwen Wu | The Coredump</title>
	<meta name="description" content="My blog on computer science, math, and more." />
	<meta name="author" content="Youwen Wu" />
</svelte:head>

<main class="dots-background">
	<div class="container max-w-5xl md:mx-auto mx-4 py-8 my-1">
		<h1 class="text-5xl md:text-6xl font-serif font-bold mt-14 sm:mt-18">The Coredump</h1>
		<p class="text-xl sm:text-2xl text-muted-foreground mt-6">
			My blog on computer science, math, and more.
		</p>
		<div class="grid grid-cols-3 mt-20 gap-2 sm:gap-4">
			<div class="col-span-2">
				<h2 class="text-3xl font-serif font-bold">Latest Posts</h2>
				<div class="grid grid-cols-1 gap-4 mt-4"></div>
			</div>
			<Card.Root class="col-span-1 bg-secondary border-primary/10 bg-opacity-75 backdrop-blur-sm">
				<Card.Header>
					<h2 class="text-3xl font-serif font-bold mb-8">Archive</h2>
					<h3 class="text-3xl font-serif font-medium text-muted-foreground">2024</h3>
					<Separator class="mt-2 mb-4" />
				</Card.Header>
				<Card.Content>
					{#each Array(5) as _, i}
						<div class="grid grid-cols-1 gap-2 mt-8">
							<h3 class="text-2xl font-serif font-bold">Post Title</h3>
							<p class="text-lg text-muted-foreground">
								An insightful and succinct blurb about the post.
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
</main>
