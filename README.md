# site

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

My personal website. Written in [SvelteKit](https://kit.svelte.dev) using
[TailwindCSS](https://tailwindcss.com/) and components from
[shadcn-svelte](https://www.shadcn-svelte.com/).

## Running locally

Install `pnpm`, clone and `cd` into the repository, then run:

```bash
pnpm install

# for development:
pnpm dev

# for production:
pnpm build
pnpm preview
```

## Adding posts

This site contains custom SSG blog generation functionality that I built myself. It converts
Markdown into static HTML pages served under `/blog`. I decided to replace it with a fully
standalone blog created with an actual static site generator to avoid NIH syndrome and decrease
maintenance time.

It may still serve as a useful reference for how to build a static blog in SvelteKit, for anyone
interested.

To add posts, create a directory in `/blog`. The top level subdirectories should be the year, but
there's no hard rules on what the rest of the subdirectories will be. The blog will build itself
based on the file structure in `/blog/[year]/**`, and posts will be located wherever there exists
`content.md` + `post.toml` files. Check `post.schema.json` for the specification of the `post.toml`
format. Finally, you can add a `.blogignore` file to any directory in `/blog` to exclude it from
static rendering (useful for work-in-progress blog posts).

## License

The website's source code is licensed under the [MIT License](LICENSE). The contents of my blog are
licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
