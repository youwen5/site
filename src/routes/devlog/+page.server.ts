import { posts } from '$lib/utils/crawl'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  return {
    posts
  }
}
