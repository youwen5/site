## Introduction

Welcome! This blog is powered by a custom static site generator I made using SvelteKit. I'm working

<!-- prettier-ignore -->
> [!NOTE]
> GitHub-style notifications!

<!-- prettier-ignore -->
> [!TIP]
> The full Commonmark spec is supported, and it's extended by the GFM spec

## Tables!

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

## More stuff!

Notice the table of contents generated on the right (on desktop) or under the navbar (on mobile).
It's auto-populated at build time from the content on the page.

### Math

Math is powered by $\KaTeX$, either inline, or in display mode:

$$
\int^\infty_{-\infty} e^{-x^2}\, dx = \sqrt{\tau / 2}
$$

## Post metadata

Additional metadata is attached to each post via a `TOML` file, the Rustacean way. Here's a sample:

```toml
#:schema ../../../post.schema.json
title = "First Post"

[manifest]
date = 2024-04-12T20:48:40.799Z
authors = ["Youwen Wu"]
blurb = "A display of all the blog's rendering capabilities!"
description = """
This is the first post on my blog, The Coredump! I'll be writing about all sorts of things here.
This site, including all of the posts, are entirely statically generated from Markdown files, with the static generation
feature of SvelteKit and custom logic implemented by me.
"""
type = "article"
highlight = true

[manifest.tags]
primary = ["test", "first post", "formatting"]
secondary = ["blog", "placeholder"]

[cover]
src = "https://images.unsplash.com/photo-1712230879699-e8a0a389da63?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
alt = "A beautiful landscape"
caption = "This is the first post! (image courtesy of unsplash)"
```

Code highlighting is also supported, via `highlight.js`.

The `unified` plugin ecosystem is used to transform markdown into the HTML in this document. Check
out the parser [here](https://github.com/youwen5/site/blob/main/src/lib/utils/parseMarkdown.ts). It
handles all the parsing server-side at build time, so these posts are a collection of mostly static
HTML. The formatting is done mostly with a
[custom stylesheet](https://github.com/couscousdude/coredump/blob/main/src/lib/styles/markdown.pcss).

## Raw source code of this post

````markdown
## Introduction

Welcome! This blog is powered by a custom static site generator I made using SvelteKit. I'm working
on upgrades , but in the meantime, check this out:/first-post/post

<!-- prettier-ignore -->
> [!NOTE] 
> GitHub-style notifications!

<!-- prettier-ignore -->
> [!TIP]
> The full Commonmark spec is supported, and it's extended by the GFM spec

## Tables!

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

## More stuff!

Notice the table of contents generated on the right (on desktop) or under the navbar (on mobile).
It's auto-populated at build time from the content on the page.

### Math

Math is powered by $\KaTeX$, either inline, or in display mode:

$$
\int^\infty_{-\infty} e^{-x^2}\, dx = \sqrt{\frac{\tau}{2}}
$$

## Post metadata

Additional metadata is attached to each post via a `TOML` file, the Rustacean way. Here's a sample:

```toml
#:schema ../../../post.schema.json
title = "Test Post"

[manifest]
date = 2024-04-12T20:48:40.799Z
authors = ["Youwen Wu"]
blurb = "A display of all the blog's rendering capabilities!"
description = "A blog post to test all of the rendering capabilities, with remarks on the side."
type = "article"
highlight = true

[manifest.tags]
primary = ["test", "first post", "formatting"]
secondary = ["blog", "placeholder"]

[cover]
src = "https://images.unsplash.com/photo-1712230879699-e8a0a389da63?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
alt = "A beautiful landscape"
caption = "This is the first post!"
```
````

Code highlighting is also supported, via `highlight.js`.

The `unified` plugin ecosystem is used to transform markdown into the HTML in this document. Check
out the parser
[here](https://github.com/couscousdude/youwen5/blob/main/src/lib/utils/parseMarkdown.ts). It handles
all the parsing server-side at build time, so these posts are a collection of mostly static HTML.
The Markdown files are transformed by `remark` and `rehype` into equivalent HTML, and then styled
with a
[custom CSS stylesheet](https://github.com/youwen5/coredump/blob/main/src/lib/styles/markdown.css).
