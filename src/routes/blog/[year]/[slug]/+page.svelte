<script lang="ts">
	import ChevronRight from 'svelte-radix/ChevronRight.svelte';
	import Code from 'svelte-radix/Code.svelte';
	import type { PageData } from './$types';
	// import { config } from '$lib/stores/index.js';
	import Article from '$lib/components/Blog/Article.svelte';
	import { toc, createTocStore, toclink } from '@svelte-put/toc';
	import StickyToc from '$lib/components/Toc/StickyToc.svelte';
	import { onMount } from 'svelte';
	import * as Accordion from '$lib/components/ui/accordion';
	import * as Card from '$lib/components/ui/card';

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

	const calcTextClasses = (el: HTMLElement) => {
		if (el.tagName === 'H1') return 'text-xl font-medium';
		if (el.tagName === 'H2') return 'text-lg';
		return 'text-sm text-muted-foreground';
	};

	// $: doc = data.metadata;
	// $: componentSource = data.metadata.source?.replace('default', $config.style ?? 'default');
</script>

<svelte:head>
	<title>{doc.title} | The Coredump</title>
	<meta name="description" content={doc.description} />
	<meta name="author" content="Youwen Wu" />
</svelte:head>

<div class="lg:flex max-w-6xl mx-auto mt-14 px-4">
	<main
		class="flex-grow basis-3/4 flex-shrink"
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
			<Card.Root slot="toc" class="lg:hidden">
				<Card.Content>
					<Accordion.Root>
						<Accordion.Item value="toc">
							<Accordion.Trigger>
								<p>On this page</p>
							</Accordion.Trigger>
							<Accordion.Content>
								{#if $tocStore.items.size}
									<ol class="border-l-2 border-l-blue-500 px-4">
										{#each $tocStore.items.values() as tocItem}
											<li class="py-0.5">
												<!-- svelte-ignore a11y-missing-attribute a11y-missing-content -->
												<a
													use:toclink={{ store: tocStore, tocItem, observe: true }}
													class={`${calcTextClasses(tocItem.element)}`}
												/>
											</li>
										{/each}
									</ol>
								{/if}
							</Accordion.Content>
						</Accordion.Item>
					</Accordion.Root>
				</Card.Content>
			</Card.Root>
		</Article>
	</main>

	<aside class="basis-1/4 relative hidden lg:block">
		<div class="fixed mx-8">
			<StickyToc {tocStore} />
		</div>
	</aside>
</div>
