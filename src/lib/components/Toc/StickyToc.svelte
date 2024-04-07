<script lang="ts">
	import { toclink, type TocStore } from '@svelte-put/toc';
	import * as Card from '$lib/components/ui/card';

	export let tocStore: TocStore;

	const calcTextClasses = (el: HTMLElement) => {
		if (el.tagName === 'H1') return 'text-md xl:text-lg font-medium';
		if (el.tagName === 'H2') return 'text-md xl:text-lg';
		if (el.id === 'end-marker') return 'text-lg xl:text-xl';
		return 'text-sm text-muted-foreground';
	};
</script>

<Card.Root>
	<Card.Header>
		<Card.Title><h2 class="text-lg xl:text-xl font-serif">On this page</h2></Card.Title>
	</Card.Header>
	<Card.Content>
		{#if $tocStore.items.size}
			<ol>
				{#each $tocStore.items.values() as tocItem}
					<li>
						<!-- svelte-ignore a11y-missing-attribute a11y-missing-content -->
						<a
							use:toclink={{ store: tocStore, tocItem, observe: true }}
							class:highlighted={$tocStore.activeItem === tocItem}
							class={`hover:bg-muted px-2 py-1 rounded-r-sm transition-all border-l-secondary border-l-4 ${calcTextClasses(tocItem.element)}`}
						/>
					</li>
				{/each}
			</ol>
		{/if}
	</Card.Content>
</Card.Root>

<style lang="postcss">
	.highlighted {
		@apply bg-blue-200 dark:bg-blue-900 border-l-blue-500;
	}
</style>
