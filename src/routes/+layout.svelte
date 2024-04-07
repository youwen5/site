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
	import LoadingBar from '$lib/components/LoadingBar.svelte';

	let root: HTMLElement | null;

	let loadingState: 'loading' | 'done' = 'done';

	onMount(() => {
		root = document.getElementsByTagName('html')[0];

		root?.classList.add('smoothscroll');
	});

	beforeNavigate(() => {
		root?.classList.remove('smoothscroll');
		loadingState = 'loading';
	});

	afterNavigate(() => {
		root?.classList.add('smoothscroll');
		loadingState = 'done';
	});
</script>

<Toaster />
<ModeWatcher />

<LoadingBar state={loadingState} />

<Navbar />
<div class="pt-24">
	<slot />
</div>

<Footer />
