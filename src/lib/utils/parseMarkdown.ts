import { unified } from 'unified'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkGfm from 'remark-gfm'
import remarkGhAlerts from 'remark-gh-alerts'
import remarkSectionize from 'remark-sectionize'
import rehypeHighlight from 'rehype-highlight'

export default async (markdown: string) => {
  try {
    const html = String(
      await unified()
        .use(remarkParse)
        .use(remarkSectionize)
        .use(remarkGfm)
        .use(remarkGhAlerts)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .process(markdown)
    )

    if (typeof html === 'undefined') throw new Error('No content')

    return html
  } catch (e) {
    throw new Error(`Failed to parse markdown: ${e}`)
  }
}
