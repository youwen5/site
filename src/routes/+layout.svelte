<script lang="ts">
	import '$lib/app.css';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource/geist-sans/latin.css';
	import '@fontsource/geist-mono/latin.css';
	import '@fontsource/zilla-slab/latin.css';
	import '@fontsource/merriweather/latin.css';
	import Footer from '$lib/components/Footer.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('Hello from the layout!');
	});
</script>

<Toaster />
<ModeWatcher />

<Navbar />
<div class="pt-24">
	<slot />
</div>

<Footer />
