<script lang="ts">
  import Name from '$lib/assets/Name.svelte'
  import { onMount } from 'svelte'
  import { navigating } from '$app/stores'
  import Coredump from '$lib/assets/Coredump.svelte'
  import Separator from '../ui/separator/separator.svelte'
  import Drawer from './Drawer.svelte'
  import ThemePicker from '../ThemePicker.svelte'
  import Button from '../ui/button/button.svelte'
  import { Moon, Sun } from 'svelte-radix'

  let current: 'blogpost' | 'blog' | 'about' | 'home' | 'portfolio' | string

  const updateCurrent = () => {
    const path = window.location.pathname
    // if (path === '/') {
    //   current = 'home'
    // } else {
    //   const segments = path.split('/')
    //   current = segments[1] || 'home'
    // }

    if (path === '/blog') {
      current = 'blog'
    } else if (path.startsWith('/blog')) {
      current = 'blogpost'
    } else {
      const segments = path.split('/')
      current = segments[1] || 'home'
    }
  }

  onMount(() => navigating.subscribe(updateCurrent))
</script>

<nav
  class="h-16 lg:h-24 bg-background bg-opacity-50 backdrop-blur-lg md:fixed w-full z-40 font-serif"
  class:fixed={current !== 'blogpost'}
  class:absolute={current === 'blogpost'}
>
  <div class="container mx-auto flex justify-between items-center h-full gap-6 overflow-x-auto">
    <Drawer />
    {#if current === 'blog' || current === 'blogpost'}
      <Coredump height="95%" href="/blog" />
    {:else}
      <Name height="95%" href="/" />
    {/if}
    <div class="gap-4 lg:gap-14 justify-around align-middle hidden md:flex tracking-tight">
      <a
        href="/"
        class="text-lg border-b-4 sm:text-xl md:text-2xl font-medium text-primary px-2 py-1 rounded-b-sm rounded-t-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300 border-b-secondary"
        class:selected={current === 'home'}>Home</a
      >
      <a
        href="/about"
        class="text-lg border-b-4 sm:text-xl md:text-2xl font-medium text-primary px-2 py-1 rounded-b-sm rounded-t-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300 border-b-secondary"
        class:selected={current === 'about'}>About</a
      >
      <a
        href="/portfolio"
        class="text-lg border-b-4 sm:text-xl md:text-2xl font-medium text-primary px-2 py-1 rounded-b-sm rounded-t-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300 border-b-secondary"
        class:selected={current === 'portfolio'}>Portfolio</a
      >
      <a
        href="https://blog.youwen.dev"
        class="text-lg border-b-4 sm:text-xl md:text-2xl font-medium text-primary px-2 py-1 rounded-b-sm rounded-t-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300 border-b-secondary"
        class:selected={current === 'blog' || current === 'blogpost'}>Blog</a
      >
      <ThemePicker let:builder>
        <Button builders={[builder]} variant="outline" size="icon" class="my-1">
          <Sun class="dark:hidden" />
          <Moon class="hidden dark:block" />
          <span class="sr-only">Toggle theme</span>
        </Button>
      </ThemePicker>
    </div>
  </div>
  <Separator />
</nav>

<style lang="postcss">
  .selected {
    @apply border-b-primary rounded-b-lg;
  }
</style>
