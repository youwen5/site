<script lang="ts">
  import Separator from './ui/separator/separator.svelte'
  import Socials from './Socials.svelte'
</script>

<footer class="h-24 px-4 mb-12 text-sm md:text-md xl:text-lg">
  <Separator class="mb-4" />
  <div class="flex justify-center flex-col gap-4">
    <Socials center />
    <p class="text-muted-foreground text-center">
      &copy 2024 Youwen Wu | Powered by <a
        href="https://kit.svelte.dev"
        target="_blank"
        class="hover:underline"><strong>SvelteKit</strong></a
      >
      and
      <a href="https://www.shadcn-svelte.com/" class="hover:underline" target="_blank"
        ><strong>shadcn-svelte</strong></a
      >
      |
      <a href="https://github.com/couscousdude/coredump" target="_blank" class="hover:underline"
        >View the source</a
      >
    </p>
  </div>
</footer>
