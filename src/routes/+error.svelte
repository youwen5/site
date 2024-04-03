<script>
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Home } from 'svelte-radix';

	const error = $page.error ?? { message: 'unknown' };
</script>

<main class="flex justify-center h-screen">
	<div class="max-w-md p-8 rounded outline-primary outline-1 outline mt-20 h-min">
		<h1 class="text-4xl font-bold mb-4">Oops!</h1>
		<p class="text-gray-600 mb-8">An error occurred: {error.message}</p>
		<Button href="/" size="lg"><Home class="mr-2" />Back to homepage</Button>
	</div>
</main>
