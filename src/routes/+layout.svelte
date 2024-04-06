<script lang="ts">
	import '$lib/app.pcss';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource/geist-sans/latin.css';
	import '@fontsource/geist-mono/latin.css';
	import '@fontsource/zilla-slab/latin.css';
	import '@fontsource/merriweather/latin.css';
	import Footer from '$lib/components/Footer.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { onMount } from 'svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	let root: HTMLElement | null;

	onMount(() => {
		root = document.getElementsByTagName('html')[0];

		root?.classList.add('smoothscroll');
	});

	beforeNavigate(() => {
		root?.classList.remove('smoothscroll');
	});

	afterNavigate(() => {
		root?.classList.add('smoothscroll');
	});
</script>

<Toaster />
<ModeWatcher />

<Navbar />
<div class="pt-24">
	<slot />
</div>

<Footer />
