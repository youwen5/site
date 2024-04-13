<script lang="ts">
	import ChevronRight from 'svelte-radix/ChevronRight.svelte';
	import * as Card from '$lib/components/ui/card';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	export let archived: Object | undefined = undefined;
</script>

<!-- 
	Currently nothing in the archive, so this component is left unfinished.
 -->

<Card.Root class="bg-primary-foreground backdrop-blur-sm border-primary/10">
	<Card.Header>
		<h2 class="text-3xl font-serif font-bold mb-6" id="archive">Archive</h2>
		<h3 class="text-3xl font-serif font-medium text-muted-foreground" id="2024">2024</h3>
		<Separator class="mt-4 bg-primary/10 h-1" />
	</Card.Header>
	<Card.Content>
		{#if archived}
			<div class="grid grid-cols-1 gap-2 mb-8">
				<h3 class="text-2xl font-serif font-bold">Placeholder Title</h3>
				<p class="text-lg text-muted-foreground">Placeholder</p>
				<div class="flex items-center gap-2">
					<a href="/blog/2021/01" class="text-primary hover:underline text-lg font-serif"
						>Read more</a
					>
					<ChevronRight class="w-6 h-6 text-primary" />
				</div>
			</div>
		{:else}
			<p class="text-lg text-muted-foreground">Nothing here yet.</p>
		{/if}
	</Card.Content>
</Card.Root>
