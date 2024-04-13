<script lang="ts">
	import * as Breadcrumb from '../ui/breadcrumb';

	export let slug: string;
	export let title: string;

	$: trail = slug.split('/').slice(0, slug.split('/').length - 1);
</script>

<Breadcrumb.Root class="mb-4">
	<Breadcrumb.List>
		<Breadcrumb.Item><Breadcrumb.Link href="/blog">The Coredump</Breadcrumb.Link></Breadcrumb.Item>
		<Breadcrumb.Separator />
		{#each trail as crumb, i}
			<Breadcrumb.Item>{crumb}</Breadcrumb.Item>
			<Breadcrumb.Separator />
		{/each}
		<Breadcrumb.Item>
			<Breadcrumb.Page>
				{title}
			</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>
