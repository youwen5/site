<script lang="ts">
  import type { PageData } from './$types'
  import Article from '$lib/components/Blog/Article.svelte'
  import { toc, createTocStore } from '@svelte-put/toc'
  import StickyToc from '$lib/components/Toc/StickyToc.svelte'
  import TocHeader from '$lib/components/Toc/TocHeader.svelte'
  import '$lib/styles/katex.css'
  import '$lib/styles/markdown.css'
  import '$lib/styles/tokyo-night-dark.min.css'
  import ArticleHeader from '$lib/components/Blog/ArticleHeader.svelte'

  const tocStore = createTocStore()

  export let data: PageData

  let doc: BlogDocument = {
    title: data.metadata.title,
    primaryTags: data.metadata.manifest.tags.primary,
    secondaryTags: data.metadata.manifest.tags.secondary,
    date: data.metadata.manifest.date,
    content: data.content,
    blurb: data.metadata.manifest.blurb,
    description: data.metadata.manifest.description,
    slug: data.slug,
    image: data.metadata.cover
  }
</script>

<svelte:head>
  <title>{doc.title} | The Coredump</title>
  <meta name="description" content={doc.description} />
  <meta name="author" content="Youwen Wu" />
</svelte:head>

<TocHeader {tocStore} placeholder="On this page" />

<div class="mx-auto px-4 mt-14 grid grid-cols-4">
  <div class="col-span-1" />
  <div class="col-span-2">
    <ArticleHeader {doc} />
  </div>
  <div class="col-span-1" />

  <div class="col-span-1" />
  <main
    class="col-span-2"
    use:toc={{
      store: tocStore,
      observe: true,
      anchor: {
        properties: { 'aria-hidden': 'true', class: 'hidden' },
        position: 'before'
      },
      scrollMarginTop: 150,
      selector: ':where(h2, h3, h4, h5, h6)'
    }}
  >
    <Article {doc} />
  </main>

  <aside class="col-span-1">
    <div class="sticky top-32 mx-8 w-fit mt-14">
      <StickyToc {tocStore} />
    </div>
  </aside>
</div>
