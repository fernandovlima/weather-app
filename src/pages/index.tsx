import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Weather APP</title>
      </Head>

      <main>
        <Layout />
      </main>
    </div>
  )
}

export default Home
