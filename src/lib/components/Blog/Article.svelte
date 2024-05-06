<script lang="ts">
  export let doc: BlogDocument
</script>

<article>
  <div class="markdown-body mb-8 font-serif">
    {@html doc.content}
  </div>
</article>
