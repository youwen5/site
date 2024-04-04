<!-- 
  @component @name ThemePicker

  @description - A wrapper for a dropdown menu that allows the user to
  change the color theme of the website.

  @slot builder - A slot for the button that triggers the dropdown menu.

  @prop hideLabel - A boolean that determines whether to show the label
 -->

<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { setMode } from 'mode-watcher';

	export let hideLabel: boolean = true;
	export let wide: boolean = false;

	let modes = [
		{ value: 'light', label: 'Light' },
		{ value: 'dark', label: 'Dark' },
		{ value: 'system', label: 'System' }
	];

	const changeMode = (mode: string) => {
		setMode(mode as 'light' | 'dark' | 'system');
	};
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<slot {builder} />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class={wide ? 'w-[80%]' : ''}>
		{#if hideLabel}
			<DropdownMenu.Label>Color Theme</DropdownMenu.Label>
		{/if}
		<DropdownMenu.Group>
			{#each modes as { value, label } (value)}
				<DropdownMenu.Item on:click={() => changeMode(value)} class={wide ? 'text-md' : ''}>
					{label}</DropdownMenu.Item
				>
			{/each}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
