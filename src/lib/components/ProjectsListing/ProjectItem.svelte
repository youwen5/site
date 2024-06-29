<script lang="ts">
  export let primaryLink: string
  export let title: string
</script>

<li class="border-2 border-muted rounded-lg p-2 bg-background hover:bg-secondary">
  <a class="link font-semibold text-lg tracking-tight" href={primaryLink}>
    {title}
  </a>
  <p class="text-lg leading-relaxed">
    <slot />
  </p>
</li>
