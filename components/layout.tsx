import Head from 'next/head'
import React, { ReactNode } from 'react'

type Props = {
  title: string
  children?: ReactNode
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My static blog" />
      </Head>
      <header>
        <h1>My Static Blog</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© {new Date().getFullYear()} My Static Blog</p>
      </footer>
    </>
  )
}

export default Layout
