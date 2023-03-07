import type { NextPage } from 'next'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <>
      <Layout title="My Static Site">
        <div className="mt-6 max-w-3xl text-center text-xl">
          <p>Welcome to my static site!</p>
        </div>
      </Layout>
    </>
  )
}

export default Home
