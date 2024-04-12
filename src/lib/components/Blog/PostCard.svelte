<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Placeholder from '$lib/assets/img/galaxy.jpg';
	import Button from '../ui/button/button.svelte';
	import PostMetadata from './PostMetadata.svelte';
	import { faker } from '@faker-js/faker';

	export let doc: {
		metadata: PostMeta;
		content: string;
		slug: string;
	};
</script>

<Card.Root>
	<Card.Header>
		<h3 class="text-3xl lg:text-4xl font-serif font-bold mb-4 leading-tight">
			{doc.metadata.title}
		</h3>
		<p class="text-muted-foreground text-xl">{doc.metadata.manifest.blurb}</p>
		<PostMetadata
			primaryTags={doc.metadata.manifest.tags.primary}
			secondaryTags={doc.metadata.manifest.tags.secondary}
			date={doc.metadata.manifest.date}
			length={doc.content.split(' ').length}
		/>
	</Card.Header>
	<Card.Content class="grid grid-cols-3 gap-6">
		<img
			src={Placeholder}
			alt="Placeholder"
			class="col-span-3 md:col-span-1 rounded-2xl shadow-md"
		/>
		<div class="flex flex-col justify-around col-span-3 md:col-span-2 gap-4">
			<p class="text-primary/95 font-serif leading-relaxed">{doc.metadata.manifest.description}</p>
			<Button variant="outline" href={`/blog/${doc.slug}`} class="text-xl flex-grow sm:flex-grow-0"
				>Read More</Button
			>
		</div>
	</Card.Content>
</Card.Root>
