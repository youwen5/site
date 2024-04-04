<script lang="ts">
	import { ChevronRight } from 'svelte-radix';

	export let content: string;
	export let title: string;
	export let description: string;
</script>

<article>
	<div class="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
		<div class="overflow-hidden text-ellipsis whitespace-nowrap">The Coredump</div>
		<ChevronRight class="h-4 w-4" />
		<div class="font-medium text-foreground">{title}</div>
	</div>
	<div class="space-y-2">
		<h1 class="scroll-m-20 text-5xl font-bold font-serif tracking-tight">
			{title}
		</h1>
		{#if description}
			<p class="text-balance text-lg text-muted-foreground">
				{description}
			</p>
		{/if}
	</div>

	<div class="markdown-body mt-8">
		{@html content}
	</div>
</article>
