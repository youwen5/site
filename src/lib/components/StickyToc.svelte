<script lang="ts">
	import { toclink, type TocStore } from '@svelte-put/toc';
	import * as Card from '$lib/components/ui/card';
	import { onMount } from 'svelte';

	export let tocStore: TocStore;
	export let distanceFromRight: number;

	let el: HTMLElement;

	let hide = false;

	const readjust = () => {
		el && (el.style.right = `calc(${distanceFromRight - el.clientWidth}px - 20px)`);
	};

	onMount(() => {
		readjust();
	});

	$: readjust();

	$: if (distanceFromRight < 220 && !hide) {
		hide = true;
	}

	$: if (distanceFromRight >= 220 && hide) {
		hide = false;
	}

	const calcIndent = (el: HTMLElement) => {
		readjust();
		if (el.tagName === 'H1' || el.tagName === 'H2') return '0px';
		if (el.tagName === 'H3') return '1rem';
		if (el.tagName === 'H4') return '2rem';
		if (el.tagName === 'H5') return '3rem';
		if (el.tagName === 'H6') return '4rem';
		return '0px';
	};

	const calcTextClasses = (el: HTMLElement) => {
		if (el.tagName === 'H1') return 'text-lg mb-2';
		if (el.tagName === 'H2') return 'text-lg my-2';
		return 'text-sm my-2 text-muted-foreground';
	};
</script>

<aside class="fixed top-36 x-4 mx-4" bind:this={el}>
	<Card.Root>
		<Card.Header>
			<Card.Title><h2 class="text-xl">On this page</h2></Card.Title>
		</Card.Header>
		<Card.Content>
			{#if $tocStore.items.size}
				<ol>
					{#each $tocStore.items.values() as tocItem}
						<li
							style="margin-left: {calcIndent(tocItem.element)}"
							class={calcTextClasses(tocItem.element)}
						>
							<!-- svelte-ignore a11y-missing-attribute a11y-missing-content -->
							<a
								use:toclink={{ store: tocStore, tocItem, observe: true }}
								class="hover:underline"
							/>
						</li>
					{/each}
				</ol>
			{/if}
		</Card.Content>
	</Card.Root>
</aside>
