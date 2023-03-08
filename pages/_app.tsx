import type { AppProps } from 'next/app'
import { Vazirmatn } from 'next/font/google'
import '../styles/globals.css'

const vazirmatn = Vazirmatn({
  subsets: ['latin', 'arabic'],
  variable: '--font-vazirmatn',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={`${vazirmatn.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
