<script>
  import { fly } from 'svelte/transition'
</script>

<div class="w-full fixed top-0 left-0 z-50" transition:fly={{ duration: 200, y: -6 }}>
  <div class="h-1.5 w-full bg-muted-foreground overflow-hidden">
    <div class="progress w-full h-full bg-muted left-right"></div>
  </div>
</div>

<style lang="postcss">
  .progress {
    animation: progress 0.8s infinite linear;
  }

  .left-right {
    transform-origin: 0% 50%;
  }
  @keyframes progress {
    0% {
      transform: translateX(0) scaleX(0);
    }
    40% {
      transform: translateX(0) scaleX(0.4);
    }
    100% {
      transform: translateX(100%) scaleX(0.5);
    }
  }
</style>
