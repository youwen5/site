<script lang="ts">
	import Name from '$lib/assets/Name.svelte';
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';
	import Coredump from '$lib/assets/Coredump.svelte';
	import Separator from '../ui/separator/separator.svelte';
	import Drawer from './Drawer.svelte';
	import ThemePicker from '../ThemePicker.svelte';
	import Button from '../ui/button/button.svelte';
	import { Moon, Sun } from 'svelte-radix';
	import { tocStore } from '$lib/stores';
	import TocHeader from '../Toc/TocHeader.svelte';

	let current: 'blog' | 'about' | 'home' | 'portfolio' | string;
	let readingPost = false;

	const updateCurrent = () => {
		const path = window.location.pathname;
		if (path === '/') {
			current = 'home';
		} else {
			const segments = path.split('/');

			current = segments[1] || 'home';
			if (current === 'blog' && segments.length > 2) {
				readingPost = true;
				console.log(readingPost);
			} else {
				readingPost = false;
				console.log(readingPost);
			}
		}
		console.log(current);
	};

	onMount(() => {
		return navigating.subscribe(updateCurrent);
	});
</script>

<nav class="h-24 bg-background bg-opacity-50 backdrop-blur-lg fixed w-full z-40 font-display">
	<div class="container mx-auto flex justify-between items-center h-full gap-6 overflow-x-auto">
		<Drawer />
		{#if current === 'blog'}
			<Coredump height="95%" href="/blog" />
		{:else}
			<Name height="95%" href="/" />
		{/if}
		<div class="gap-4 lg:gap-14 justify-around align-middle hidden md:flex">
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
			<ThemePicker let:builder>
				<Button builders={[builder]} variant="outline" size="icon" class="my-1">
					<Sun class="dark:hidden" />
					<Moon class="hidden dark:block" />
					<span class="sr-only">Toggle theme</span>
				</Button>
			</ThemePicker>
		</div>
	</div>
	<Separator />
</nav>
{#if readingPost}
	<TocHeader {tocStore} placeholder="On this page" />
{/if}

<style lang="postcss">
	.selected {
		@apply bg-zinc-300 dark:bg-zinc-600;
	}
</style>
