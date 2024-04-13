<script lang="ts">
	import PostMetadata from './PostMetadata.svelte';
	import Crumbs from './Crumbs.svelte';

	export let doc: BlogDocument;
</script>

<article>
	<Crumbs slug={doc.slug} title={doc.title} />
	<header class="space-y-6">
		<div class="space-y-2">
			<h1 class="scroll-m-20 text-5xl font-bold font-serif tracking-tight">
				{doc.title}
			</h1>
			<p class="text-balance text-lg text-muted-foreground">
				{doc.blurb}
			</p>
			<PostMetadata
				primaryTags={doc.primaryTags}
				secondaryTags={doc.secondaryTags}
				date={doc.date}
				length={doc.content.length}
				reverseDateAndRest
			/>
		</div>
		<figure class="w-[80%]">
			<img src={doc.image.src} alt={doc.image.alt} class="rounded-xl shadow-md" />
			<figcaption class="mt-2 text-center text-muted-foreground">{doc.image.caption}</figcaption>
		</figure>
	</header>

	<div class="markdown-body mb-8 font-serif">
		{@html doc.content}
	</div>
</article>
