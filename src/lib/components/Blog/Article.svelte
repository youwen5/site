<script lang="ts">
	import { ChevronRight } from 'svelte-radix';
	import PostMetadata from './PostMetadata.svelte';
	import Separator from '../ui/separator/separator.svelte';

	export let doc: BlogDocument;
</script>

<article>
	<div class="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
		<div class="overflow-hidden text-ellipsis whitespace-nowrap">The Coredump</div>
		<ChevronRight class="h-4 w-4" />
		<div class="font-medium text-foreground">{doc.title}</div>
	</div>
	<div class="space-y-2">
		<h1 class="scroll-m-20 text-5xl font-bold font-serif tracking-tight">
			{doc.title}
		</h1>
		{#if doc.description}
			<p class="text-balance text-lg text-muted-foreground">
				{doc.description}
			</p>
		{/if}
		<PostMetadata
			primaryTags={doc.primaryTags}
			secondaryTags={doc.secondaryTags}
			time={doc.time}
			length={doc.content.length}
			reverseDateAndRest
		/>
	</div>

	<div class="markdown-body mt-8 font-serif">
		{@html doc.content}
		<div role="note" id="end-marker" aria-label="End of article" class="invisible h-0 w-0">End</div>
	</div>
</article>
