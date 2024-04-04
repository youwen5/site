<script>
	import Name from '$lib/assets/Name.svelte';
	import { HamburgerMenu } from 'svelte-radix';
	import { Drawer } from 'vaul-svelte';
	import Separator from '../ui/separator/separator.svelte';
</script>

<Drawer.Root shouldScaleBackground direction="top">
	<Drawer.Trigger class="md:hidden">
		<HamburgerMenu class="icon border-1 border-primary" />
	</Drawer.Trigger>
	<Drawer.Portal>
		<Drawer.Overlay class="fixed inset-0 bg-black/40" />
		<Drawer.Content
			class="fixed top-0 left-0 right-0 mb-24 flex flex-col rounded-b-2xl z-50 bg-accent"
		>
			<div class="flex-1 rounded-b-2xl bg-accent p-4 shadow-xl dark:shadow-none">
				<div class="mx-auto max-w-md">
					<Drawer.Title class="mb-4 font-medium">
						<span class="px-2 flex justify-center">
							<Name href="/" width="80vw" height="auto" />
						</span>
						<Separator class="h-1 rounded-3xl mt-1" />
					</Drawer.Title>
					<p class="mb-2 text-zinc-600"></p>
					<p class="mb-8 text-zinc-600">
						It uses
						<a
							href="https://www.bits-ui.com/docs/components/dialog"
							class="underline"
							target="_blank"
						>
							Bits' Dialog primitive
						</a>
						under the hood and is inspired by
						<a
							href="https://twitter.com/devongovett/status/1674470185783402496"
							class="underline"
							target="_blank"
						>
							this tweet.
						</a>
					</p>
				</div>
				<div class="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-zinc-300" />
			</div>
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>
