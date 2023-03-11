import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Layout from '../../components/layout'
import { markdownToHtml } from '../../libs/markdown-to-html'
import { getSortedPostsData, Post } from '../../libs/posts'

type Props = {
  post: Post
}

export default function BlogPost({ post }: Props) {
  return (
    <>
      <NextSeo
        title={`${post.title} - My Blog`}
        description={`${post.content.substring(0, 100)}...`}
        openGraph={{
          url: `https://myblog.com/posts/${post.slug}`,
          title: `${post.title} - My Blog`,
          description: `${post.content.substring(0, 100)}...`,
          images: [
            {
              url: 'https://myblog.com/og-home.jpg',
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
          site_name: 'My Blog',
        }}
      />
      <Layout title={post.title}>
        <Head>
          <title>{post.title}</title>
        </Head>
        <article>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const posts = getSortedPostsData()
  // @ts-ignore
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

// @ts-ignore
export async function getStaticProps({ params }) {
  const slug = params?.slug
  const post = getSortedPostsData().find((p) => p.slug === slug)
  // @ts-ignore
  const { title, date, content } = post

  return {
    props: {
      post: {
        slug,
        title,
        date,
        content: await markdownToHtml(content),
      },
    },
  }
}
