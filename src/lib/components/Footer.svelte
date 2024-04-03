<script>
	import { GithubLogo } from 'svelte-radix';
	import Separator from './ui/separator/separator.svelte';
</script>

<footer class="h-24 px-2 mb-4 text-sm md:text-md xl:text-lg">
	<Separator class="mb-4" />
	<div class="flex justify-center flex-col gap-4">
		<div class="flex justify-around gap-4">
			<a
				href="https://github.com/couscousdude"
				target="_blank"
				class="dark:brightness-75 dark:hover:brightness-100"><GithubLogo /></a
			>
		</div>
		<p class="text-zinc-400 dark:text-zinc-700 text-center">
			&copy 2024 Youwen Wu | Built with <a
				href="https://kit.svelte.dev"
				target="_blank"
				class="hover:underline"><strong>SvelteKit</strong></a
			>
			and
			<a href="https://www.shadcn-svelte.com/" class="hover:underline" target="_blank"
				><strong>shadcn-svelte</strong></a
			>
			|
			<a href="https://github.com/couscousdude/coredump" target="_blank" class="hover:underline"
				>View the source</a
			>
		</p>
	</div>
</footer>
