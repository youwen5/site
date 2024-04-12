<script lang="ts">
	import { ChevronRight } from 'svelte-radix';

	export let slug: string;
	export let title: string;

	$: trail = slug.split('/').slice(0, slug.split('/').length - 1);
</script>

<div class="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
	<a class="overflow-hidden text-ellipsis whitespace-nowrap hover:underline" href="/blog"
		>The Coredump</a
	>
	<ChevronRight class="h-4 w-4" />
	{#each trail as crumb, i}
		<div class="text-muted-foreground">{crumb}</div>
		<ChevronRight class="h-4 w-4" />
	{/each}
	<div class="font-medium text-foreground">{title}</div>
</div>
