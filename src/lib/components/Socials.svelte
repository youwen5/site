<script>
	import {
		InstagramLogo,
		TwitterLogo,
		GithubLogo,
		LinkedinLogo,
		DiscordLogo,
		EnvelopeClosed,
		ClipboardCopy
	} from 'svelte-radix';
	import * as Popover from '$lib/components/ui/popover';

	export let center = false;

	import Button from './ui/button/button.svelte';
	import { toast } from 'svelte-sonner';

	const copyDiscord = async () => {
		try {
			await navigator.clipboard.writeText('couscousdude');
			toast('Copied Discord username to clipboard');
		} catch (e) {
			console.error(e);
			toast('Failed to copy Discord username to clipboard');
		}
	};
</script>

<div class="flex gap-2 mt-2 flex-wrap" class:justify-center={center}>
	<Button variant="ghost" size="icon" href="https://github.com/couscousdude">
		<GithubLogo />
	</Button>
	<Button variant="ghost" size="icon" href="https://www.instagram.com/uncle_uwon/"
		><InstagramLogo /></Button
	>
	<Button variant="ghost" size="icon" href="https://twitter.com/couscousdude"
		><TwitterLogo /></Button
	>
	<Button variant="ghost" size="icon" href="https://www.linkedin.com/in/youwen-wu-306221288/>">
		<LinkedinLogo />
	</Button>
	<Popover.Root>
		<Popover.Trigger>
			<Button variant="ghost" size="icon">
				<DiscordLogo />
			</Button>
		</Popover.Trigger>
		<Popover.Content>
			Discord (for some reason) doesn't support direct links to profiles. You can find me on discord
			with my username, <strong>@couscousdude</strong>.
			<Button variant="outline" size="icon" on:click={copyDiscord} class="mt-2"
				><ClipboardCopy /></Button
			>
		</Popover.Content>
	</Popover.Root>
	<Popover.Root>
		<Popover.Trigger>
			<Button variant="ghost" size="icon">
				<EnvelopeClosed />
			</Button>
		</Popover.Trigger>
		<Popover.Content>
			<p>
				You can reach my Gmail at <a class="link" href="mailto:youwenw@gmail.com"
					>youwenw@gmail.com</a
				>
			</p>
			<br />
			<p>
				Or, if you prefer, you can securely email me on Protonmail at <a
					class="link"
					href="mailto:youwenw@protonmail.com">youwenw@protonmail.com</a
				>
			</p>
		</Popover.Content>
	</Popover.Root>
</div>
