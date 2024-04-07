<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Button from './ui/button/button.svelte';
	import { ChevronUp } from 'svelte-radix';

	let showButton = false;

	function handleScroll() {
		const threshold = 400;

		showButton = window.scrollY > threshold;
	}

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

<svelte:window on:scroll={handleScroll} />

{#if showButton}
	<div class="fixed bottom-10 right-10 z-30" transition:fly={{ y: 50, duration: 150 }}>
		<Button size="icon" class="scale-125 md:scale-150" on:click={scrollToTop}><ChevronUp /></Button>
	</div>
{/if}
