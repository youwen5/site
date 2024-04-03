<script lang="ts">
	import '$lib/app.css';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource/geist-sans/latin.css';
	import '@fontsource/geist-mono/latin.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<ModeWatcher />
<Navbar />
<div class="pb-24 px-4 pt-24">
	<slot />
</div>

<Footer />
