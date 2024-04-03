<main class="background w-full h-screen">
	<div class="container max-w-3xl mx-auto p-10">
		<h1 class="text-4xl md:text-5xl font-bold text-center tracking-tight mt-20">
			🚧 Under Construction 🚧
		</h1>
		<div class="text-2xl md:text-3xl font-medium mt-10 text-center">
			<p>Please excuse the mess! This page is currently under construction.</p>
		</div>
	</div>
</main>

<style lang="postcss">
	.background {
		--dot-bg: theme('colors.background');
		--dot-color: theme('colors.foreground');
		--dot-size: 1px;
		--dot-space: 22px;
		background:
			linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%)
				center / var(--dot-space) var(--dot-space),
			linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center /
				var(--dot-space) var(--dot-space),
			var(--dot-color);

		--cursor-color: theme('colors.foreground');
	}
</style>
