<script>
	import { GithubLogo } from 'svelte-radix';
</script>

<footer class="h-24 px-2 mb-4 text-sm md:text-md xl:text-lg">
	<hr class="mb-4" />
	<div class="flex justify-center flex-col gap-4">
		<div class="flex justify-around gap-4">
			<a
				href="https://github.com/couscousdude"
				target="_blank"
				class="dark:brightness-75 dark:hover:brightness-100"><GithubLogo /></a
			>
		</div>
		<p class="text-zinc-400 dark:text-zinc-700 text-center">
			&copy 2024 Youwen Wu | Built with <strong>SvelteKit</strong> and
			<strong>shad-cn</strong> |
			<a href="https://github.com/couscousdude/coredump" target="_blank" class="hover:underline"
				>View the source</a
			>
		</p>
	</div>
</footer>
