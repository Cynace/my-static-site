import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'posts')

export type Post = {
  slug: string
  title: string
  date: string
  content: string
}

export function getSortedPostsData(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return {
      slug,
      ...data,
      content,
    }
  })
  // @ts-ignore
  return allPostsData.sort((a, b) => {
    // @ts-ignore
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
