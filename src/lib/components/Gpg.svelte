<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import ScrollArea from './ui/scroll-area/scroll-area.svelte';

	let gpg: Promise<string>;

	async function getGpg() {
		const res = await fetch(`/youwen.gpg`);
		const text = await res.text();

		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
	}
	async function copyGpg() {
		try {
			const text = await gpg;
			navigator.clipboard.writeText(text);
			toast('Copied GPG key to clipboard');
		} catch (e) {
			console.error(e);
			toast('Failed to copy GPG key to clipboard');
		}
	}
	onMount(() => {
		gpg = getGpg();
	});
</script>

<AlertDialog.Root>
	<AlertDialog.Trigger><slot /></AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>GPG Key</AlertDialog.Title>
			<AlertDialog.Description class="flex justify-center">
				{#await gpg then text}
					<ScrollArea class="max-h-60 mb-4 max-w-60" orientation="both">
						<p>{text}</p>
					</ScrollArea>
				{:catch}
					<p class="text-destructive">Couldn't fetch GPG key.</p>
				{/await}
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer class="gap-1">
			<a href="/youwen.gpg" download>
				<AlertDialog.Action>Download</AlertDialog.Action>
			</a>
			<AlertDialog.Action on:click={copyGpg}>Copy</AlertDialog.Action>
			<AlertDialog.Cancel>Close</AlertDialog.Cancel>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
