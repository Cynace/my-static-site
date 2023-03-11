import type { AppProps } from 'next/app'
import { Vazirmatn } from 'next/font/google'
import '../styles/globals.css'
import {DefaultSeo} from "next-seo";

const vazirmatn = Vazirmatn({
  subsets: ['latin', 'arabic'],
  variable: '--font-vazirmatn',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="My Blog"
        description="My blog about everything"
        canonical="https://myblog.com"
        openGraph={{
          url: 'https://myblog.com',
          title: 'My Blog',
          description: 'My awesome blog about everything',
          images: [
            {
              url: 'https://myblog.com/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'My Blog',
            },
          ],
          site_name: 'My Blog',
        }}
      />
      <div className={`${vazirmatn.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
