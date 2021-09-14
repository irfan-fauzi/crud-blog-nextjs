import Head from 'next/head'
import { BlogItem, Button, Gap } from '../components';
import Layout from "../components/layout/Layout";
import dummyJson from '../utils/posts.json'

export default function Home() {
  
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Gap height="2rem" />
        <h1 className="text-3xl">Halaman Utama</h1>
        <Gap height="1rem" />
        <Button title="Create new post" className="bg-blue-500 text-white py-3 px-5 shadow-lg rounded-md"/>
        <Gap height="2rem"/>
        <article className="grid grid-cols-3 gap-[2rem]">
          {
            dummyJson.map(post => (
              <BlogItem key={Math.random()} img={post.img} title={post.title} desc={post.desc} />
              ))
          } 
        </article>
        <div>pagination</div>
        <Gap height="3rem"/>
      </main>
    </Layout>
  )
}
