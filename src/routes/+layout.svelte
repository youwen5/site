<script lang="ts">
	import '$lib/app.css';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource/geist-sans/latin.css';
	import '@fontsource/geist-mono/latin.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Youwen Wu</title>
	<meta name="description" content="My personal website and blog." />
	<meta name="author" content="Youwen Wu" />
</svelte:head>

<ModeWatcher />
<Navbar />
<div class="px-4 pt-24">
	<slot />
</div>

<Footer />
