import axios from 'axios';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { BlogItem, Button, Gap } from '../components';
import Layout from "../components/layout/Layout";
import dummyJson from '../utils/posts.json'

export default function Home() {
  const blogPosts = useState([])
  const URL = `http://localhost:4000/v1/blog/posts`

  useEffect(() => {
    axios.get(`${URL}?perPage=6`).then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const router = useRouter()
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Gap height="2rem" />
        <h1 className="text-3xl">
          Halaman Utama
          
        </h1>
        <Gap height="1rem" />
        <Button onClick={() => router.push('/create-post')} title="Create new post" className="bg-blue-500 text-white py-3 px-5 shadow-lg rounded-md"/>
        <Gap height="2rem"/>
        <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
          {
            dummyJson.map(post => (
              <BlogItem key={Math.random()} img={post.img} title={post.title} desc={post.desc} author={post.author} date={post.date} />
              ))
          } 
        </article>
        <Gap height="3rem"/>
        <div className="flex gap-2 w-full  justify-center cursor-pointer">
          <Button title="< prev" className="bg-blue-200 px-4 py-1"/>
          <Button title="next >" className="bg-blue-200 px-4 py-1 cursor-pointer" />
        </div>
        <Gap height="3rem"/>
      </main>
    </Layout>
  )
}
