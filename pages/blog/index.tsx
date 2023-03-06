import Link from 'next/link'
import Layout from '../../components/layout'
import { getSortedPostsData, Post } from '../../libs/posts'

type Props = {
  posts: Post[]
}

export default function Blog({ posts }: Props) {
  return (
    <Layout title="My Static Blog">
      {posts.map((post: Post) => (
        <article key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
            <time dateTime={post.date}>{post.date}</time>
          </Link>
        </article>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getSortedPostsData()
  return {
    props: {
      posts,
    },
  }
}
