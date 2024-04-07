<script lang="ts">
	import type { TocStore } from '@svelte-put/toc';
	import Separator from '../ui/separator/separator.svelte';
	import { Accordion } from 'bits-ui';
	import { toclink } from '@svelte-put/toc';
	import { CaretDown } from 'svelte-radix';
	import { slide } from 'svelte/transition';

	export let tocStore: TocStore;
	export let placeholder: string;

	const calcTextClasses = (el: HTMLElement) => {
		if (el.tagName === 'H2') return 'text-xl';
		return 'text-md text-muted-foreground';
	};

	$: currentDisplayed = $tocStore.activeItem ? $tocStore.activeItem.text : placeholder;
</script>

<nav class="fixed top-24 left-0 w-full bg-background bg-opacity-50 backdrop-blur-lg z-30 lg:hidden">
	<Accordion.Root class="px-8">
		<Accordion.Item value="toc">
			<Accordion.Trigger
				class="text-xl flex w-full flex-1 items-center justify-between py-1 font-medium transition-all [&[data-state=open]>span>svg]:rotate-180"
				>{currentDisplayed}
				<span
					class="inline-flex size-8 items-center justify-center rounded-[7px] bg-transparent transition-all hover:bg-dark-10"
					><CaretDown class="size-[18px] transition-all duration-200" /></span
				>
			</Accordion.Trigger>
			<Accordion.Content transition={slide} transitionConfig={{ duration: 200 }} class="pb-[25px]">
				{#if $tocStore.items.size}
					<ol>
						{#each $tocStore.items.values() as tocItem}
							{@const selected = $tocStore.activeItem === tocItem}
							<li class="border-l-secondary border-l-4 py-1" class:highlighted={selected}>
								<!-- svelte-ignore a11y-missing-attribute a11y-missing-content -->
								<a
									use:toclink={{ store: tocStore, tocItem, observe: true }}
									class={`hover:bg-muted px-2 py-1 rounded-r-sm transition-all ${calcTextClasses(tocItem.element)}`}
								/>
							</li>
						{/each}
					</ol>
				{/if}
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
	<Separator />
</nav>

<style lang="postcss">
	.highlighted {
		@apply bg-blue-200 dark:bg-blue-900 border-l-blue-500;
	}
</style>
