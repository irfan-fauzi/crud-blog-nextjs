import Head from 'next/head'
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1>Halaman Utama</h1>
        <h2>Sub title</h2>
        
      </main>
    </Layout>
  )
}
