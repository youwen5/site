<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'

  export let items: string[]
  export let interval: number = 2000
  export let beforeText: string = ''

  let currentIndex: number = 0
  let timer: number
  let temp = true

  onMount(() => {
    timer = setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length
      temp = !temp
    }, interval)

    return () => clearInterval(timer)
  })
</script>

<div class="flex gap-2 text-nowrap flex-wrap">
  {beforeText}
  {#if temp}
    <p in:fly={{ y: -50, duration: 300, delay: 320 }} out:fly={{ y: 50, duration: 300 }}>
      {items[currentIndex]}
    </p>
  {:else}
    <p in:fly={{ y: -50, duration: 300, delay: 320 }} out:fly={{ y: 50, duration: 300 }}>
      {items[currentIndex]}
    </p>
  {/if}
</div>
