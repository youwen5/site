import { readdir, readFile } from 'fs/promises'
import { join } from 'path'
import toml from 'toml'

const crawl = async () => {
  const blogPath = join(process.cwd(), 'blog')
  const years = await readdir(blogPath)

  const posts: {
    [key: string]: {
      metadata: PostMeta
      content: string
    }
  } = {}

  for (const year of years) {
    const yearPath = join(blogPath, year)
    const directories = await readdir(yearPath)

    for (const directory of directories) {
      const postPath = join(yearPath, directory)
      try {
        await readFile(join(postPath, '.blogignore'), 'utf-8')
        continue
      } catch (error) {
        // If the file doesn't exist, continue with the rest of the code
      }
      const postTomlPath = join(postPath, 'post.toml')
      const contentPath = join(postPath, 'content.md')

      try {
        const postToml = await readFile(postTomlPath, 'utf-8')
        const content = await readFile(contentPath, 'utf-8')

        const metadata = toml.parse(postToml)

        posts[`${year}/${directory}`] = {
          metadata,
          content
        }
      } catch (error) {
        throw new Error(`Error reading post: ${error}`)
      }
    }
    return posts
  }
}

const postsResult = await crawl()
if (!postsResult) throw new Error('No posts found!')

export const posts = postsResult
