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
        <meta name="description" content="My static site" />
      </Head>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col">
            <header className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                My Static Site
              </h1>
            </header>
            <main>{children}</main>
            <footer>
              <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                © {new Date().getFullYear()} My Static Site
              </p>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
