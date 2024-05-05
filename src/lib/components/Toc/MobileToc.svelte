<script lang="ts">
  import { toclink, type TocStore } from '@svelte-put/toc'
  import * as Accordion from '$lib/components/ui/accordion'
  import * as Card from '$lib/components/ui/card'

  export let tocStore: TocStore

  const calcTextClasses = (el: HTMLElement) => {
    if (el.tagName === 'H1') return 'text-lg font-medium'
    if (el.tagName === 'H2') return 'text-lg'
    return 'text-sm text-muted-foreground'
  }
</script>

<Card.Root class="lg:hidden">
  <Card.Content>
    <Accordion.Root>
      <Accordion.Item value="toc">
        <Accordion.Trigger>
          <p class="text-lg">On this page</p>
        </Accordion.Trigger>
        <Accordion.Content>
          {#if $tocStore.items.size}
            <ol class="border-l-4 border-l-muted px-4">
              {#each $tocStore.items.values() as tocItem}
                <li class="py-0.5">
                  <!-- svelte-ignore a11y-missing-attribute a11y-missing-content -->
                  <a
                    use:toclink={{ store: tocStore, tocItem, observe: true }}
                    class={`${calcTextClasses(tocItem.element)}`}
                  />
                </li>
              {/each}
            </ol>
          {/if}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  </Card.Content>
</Card.Root>
