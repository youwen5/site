<script lang="ts">
	import Name from '$lib/assets/Name.svelte';
	import { HamburgerMenu } from 'svelte-radix';
	import { Drawer } from 'vaul-svelte';
	import Separator from '../ui/separator/separator.svelte';
	import Button from '../ui/button/button.svelte';
	import { Sun, Moon, Home, Person, File, Backpack } from 'svelte-radix';
	import ThemePicker from '../ThemePicker.svelte';
</script>

<Drawer.Root shouldScaleBackground direction="top">
	<Drawer.Trigger asChild let:builder>
		<Button variant="outline" size="icon" builders={[builder]} class="px-2 md:hidden">
			<HamburgerMenu class="icon border-1 border-primary" />
		</Button>
	</Drawer.Trigger>
	<Drawer.Portal>
		<Drawer.Overlay class="fixed inset-0 bg-black/40" />
		<Drawer.Content
			class="fixed top-0 left-0 right-0 mb-24 flex flex-col rounded-b-2xl z-50 bg-accent dark:bg-zinc-900"
		>
			<div class="flex-1 rounded-b-2xl bg-accent dark:bg-zinc-900 p-4 shadow-xl dark:shadow-none">
				<div class="mx-auto max-w-md">
					<Drawer.Title class="font-medium">
						<span class="px-2 flex justify-center">
							<Name href="/" width="80vw" height="auto" />
						</span>
						<Separator class="h-1 rounded-3xl mt-1 dark:bg-zinc-500" />
					</Drawer.Title>
					<div class="grid grid-cols-1 my-10 gap-4">
						<Drawer.Close asChild let:builder>
							<Button
								variant="link"
								href="/"
								builders={[builder]}
								class="pl-2 text-4xl tracking-tight font-serif dark:text-zinc-200 w-min"
								><Home class="mr-2" />Home</Button
							>
						</Drawer.Close>
						<Separator class="dark:bg-zinc-500" />
						<Drawer.Close asChild let:builder>
							<Button
								variant="link"
								href="/about"
								builders={[builder]}
								class="pl-2 text-4xl tracking-tight font-serif dark:text-zinc-200 w-min"
								><Person class="mr-2" />About Me</Button
							>
						</Drawer.Close>
						<Separator class="dark:bg-zinc-500" />
						<Drawer.Close asChild let:builder>
							<Button
								variant="link"
								href="/portfolio"
								builders={[builder]}
								class="pl-2 text-4xl tracking-tight font-serif dark:text-zinc-200 w-min"
								><Backpack class="mr-2" />Portfolio</Button
							>
						</Drawer.Close>
						<Separator class="dark:bg-zinc-500" />
						<Drawer.Close asChild let:builder>
							<Button
								href="/blog"
								variant="link"
								builders={[builder]}
								class="pl-2 text-4xl tracking-tight font-serif dark:text-zinc-200 w-min"
								><File class="mr-2" />Blog</Button
							>
						</Drawer.Close>
						<Separator class="h-1 rounded-3xl mt-1 dark:bg-zinc-500 my-2" />
						<ThemePicker let:builder hideLabel wide>
							<Button variant="outline" size="lg" builders={[builder]}>
								<Sun class="mr-4 dark:hidden" />
								<Moon class="mr-4 hidden dark:block" />
								Change Theme
							</Button>
						</ThemePicker>
					</div>
				</div>
				<div class="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-zinc-300" />
			</div>
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>
