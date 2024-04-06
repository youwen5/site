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
	<div class="fixed bottom-10 right-10 z-40" transition:fly={{ y: 50, duration: 150 }}>
		<Button size="icon" on:click={scrollToTop}><ChevronUp /></Button>
	</div>
{/if}
