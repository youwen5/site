<script lang="ts">
	import { Sun, Moon } from 'svelte-radix';
	import Button from '../ui/button/button.svelte';
	import { toggleMode } from 'mode-watcher';
	import Name from '$lib/assets/Name.svelte';
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';
	import Coredump from '$lib/assets/Coredump.svelte';
	import Separator from '../ui/separator/separator.svelte';

	let current: 'blog' | 'about' | 'home' | 'portfolio' | string;

	const updateCurrent = () => {
		const path = window.location.pathname;
		if (path === '/') {
			current = 'home';
		} else {
			const segments = path.split('/');
			current = segments[1] || 'home';
		}
	};

	onMount(() => {
		return navigating.subscribe(updateCurrent);
	});
</script>

<nav class="h-20 bg-background bg-opacity-50 backdrop-blur-md fixed w-full z-50 font-display">
	<div class="container mx-auto flex justify-between items-center h-full gap-4 overflow-x-auto">
		{#if current === 'blog'}
			<Coredump height="95%" href="/blog" />
		{:else}
			<Name height="100%" href="/" />
		{/if}
		<div class="flex gap-4 lg:gap-14 justify-around align-middle">
			<a
				href="/"
				class="text-lg sm:text-xl md:text-2xl font-medium text-primary px-4 py-1 rounded-3xl hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-colors duration-200"
				class:selected={current === 'home'}>Home</a
			>
			<a
				href="/about"
				class="text-lg sm:text-xl md:text-2xl font-medium text-primary px-4 py-1 rounded-3xl hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors duration-200"
				class:selected={current === 'about'}>About</a
			>
			<a
				href="/portfolio"
				class="text-lg sm:text-xl md:text-2xl font-medium text-primary px-4 py-1 rounded-3xl hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors duration-200"
				class:selected={current === 'portfolio'}>Portfolio</a
			>
			<a
				href="/blog"
				class="text-lg sm:text-xl md:text-2xl font-medium text-primary px-4 py-1 rounded-3xl hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors duration-200"
				class:selected={current === 'blog'}>Blog</a
			>

			<Button on:click={toggleMode} variant="outline" size="icon" class="my-1">
				<Sun class="dark:hidden" />
				<Moon class="hidden dark:block" />
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</div>
	<Separator />
</nav>

<style lang="postcss">
	.selected {
		@apply bg-zinc-300 dark:bg-zinc-600;
	}
</style>
