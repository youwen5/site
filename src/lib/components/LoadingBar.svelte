<script lang="ts">
	import { Progress } from 'bits-ui';
	import { fly } from 'svelte/transition';

	export let state: 'loading' | 'done' = 'done';

	let value = 0;

	let hidden = true;

	$: {
		if (state === 'loading') {
			hidden = false;
			value = 0;
		} else {
			hidden = false;
			value = 100;
		}
		setTimeout(() => {
			hidden = true;
		}, 1500);
	}
</script>

{#if !hidden}
	<div class="fixed top-0 right-0 w- z-40" transition:fly={{ y: -25, duration: 500 }}>
		<Progress.Root
			{value}
			max={100}
			class="relative h-[15px] overflow-hidden bg-dark-10 shadow-mini-inset rounded-r-xl"
		>
			<div
				class="h-full w-full flex-1 bg-foreground shadow-mini-inset transition-all duration-1000 ease-in-out rounded-r-xl"
				style={`transform: translateX(-${100 - (100 * (value ?? 0)) / (100 ?? 1)}%)`}
			/>
		</Progress.Root>
	</div>
{/if}
