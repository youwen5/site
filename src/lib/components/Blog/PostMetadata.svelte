<!-- 
  @component
  
  This component is used to display the metadata of a blog post. It displays the primary and secondary tags, the time the post was published, and the estimated time it takes to read the post.

  @props

  - `primaryTags` - An array of strings representing the primary tags of the post.
  - `secondaryTags` - An array of strings representing the secondary tags of the post.
  - `date` - 
  - `length` - An integer representing amount of words in the post.
  - `reverseDateAndRest` - A boolean that determines whether the date should be displayed at the bottom of the metadata.
	
	@slots

	- toc - Place a table of contents here
-->

<script lang="ts">
	import Badge from '../ui/badge/badge.svelte';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(relativeTime);

	export let primaryTags: string[] = [];
	export let secondaryTags: string[] = [];
	export let date: Date;
	export let length: number;
	export let reverseDateAndRest: boolean = false;

	let dayjsDate = dayjs(date);
</script>

<div class="grid grid-cols-1">
	{#if !reverseDateAndRest}
		<p class="text-muted-foreground/80 my-1 text-lg">{dayjsDate.format('MMMM DD, YYYY')}</p>
	{/if}
	<span class="flex items-center flex-wrap my-2 gap-2">
		{#each primaryTags as tag}
			<Badge>{tag}</Badge>
		{/each}
		{#each secondaryTags as tag}
			<Badge variant="secondary">{tag}</Badge>
		{/each}
	</span>
	<!-- Assuming adult silent reading rate of 238 wpm -->
	<span class="text-muted-foreground text-sm mt-2">
		{dayjsDate.fromNow()} | {Math.ceil(length / 238)} min read | {length} words
	</span>
	{#if reverseDateAndRest}
		<p class="text-muted-foreground/80 text-xl mt-4">{dayjsDate.format('MMMM DD, YYYY')}</p>
	{/if}
</div>
