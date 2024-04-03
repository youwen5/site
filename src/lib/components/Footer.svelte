<script>
	import { GithubLogo } from 'svelte-radix';
</script>

<footer class="h-24 px-2 mb-4 text-sm md:text-md xl:text-lg">
	<hr class="my-4" />
	<div class="flex justify-center flex-col gap-4">
		<div class="flex justify-around gap-4 brightness-75 hover:brightness-100">
			<a href="https://github.com/couscousdude" target="_blank"><GithubLogo /></a>
		</div>
		<p class="text-zinc-400 dark:text-zinc-700 text-center">
			&copy Youwen Wu 2024 | Built with <strong>SvelteKit</strong> and
			<strong>shad-cn</strong> |
			<a href="https://github.com/couscousdude/coredump" target="_blank" class="hover:underline"
				>View the source</a
			>
		</p>
	</div>
</footer>
