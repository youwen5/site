<script lang="ts">
	import { ChevronRight } from 'svelte-radix';
	import PostMetadata from './PostMetadata.svelte';

	export let doc: BlogDocument;
</script>

<article>
	<div class="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
		<div class="overflow-hidden text-ellipsis whitespace-nowrap">The Coredump</div>
		<ChevronRight class="h-4 w-4" />
		<div class="font-medium text-foreground">{doc.title}</div>
	</div>
	<header class="space-y-6">
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
		<slot name="mobile-toc" />
	</header>

	<div class="markdown-body my-8 font-serif">
		{@html doc.content}
	</div>
</article>
