<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Placeholder from '$lib/assets/img/galaxy.jpg';
	import Button from '../ui/button/button.svelte';
	import PostMetadata from './PostMetadata.svelte';
	import { faker } from '@faker-js/faker';

	export let title: string;
	export let blurb: string;
	export let description: string;
</script>

<Card.Root>
	<Card.Header>
		<h3 class="text-4xl font-serif font-bold mb-4 leading-tight">{title}</h3>
		<p class="text-muted-foreground text-xl">{blurb}</p>
		<PostMetadata
			primaryTags={Array.from({ length: 3 }, () => faker.hacker.noun())}
			secondaryTags={Array.from({ length: 2 }, () => faker.hacker.noun())}
			time={Date.now() / 1000}
			length={faker.number.int(1000)}
		/>
	</Card.Header>
	<Card.Content class="grid grid-cols-3 gap-6">
		<img
			src={Placeholder}
			alt="Placeholder"
			class="col-span-3 md:col-span-1 rounded-2xl shadow-md"
		/>
		<div class="flex flex-col justify-around col-span-3 md:col-span-2 gap-4">
			<p class="text-primary/95 font-serif leading-relaxed">{description}</p>
			<Button variant="outline" href="/blog/2024/test-post" class="text-xl flex-grow sm:flex-grow-0"
				>Read More</Button
			>
		</div>
	</Card.Content>
</Card.Root>
