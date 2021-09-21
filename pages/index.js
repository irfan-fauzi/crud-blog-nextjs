import axios from 'axios';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { BlogItem, Button, Gap } from '../components';
import Layout from "../components/layout/Layout";


export default function Home() {

  const [blogPosts, setBlogPosts] = useState([])
  const mainURL = 'http://localhost:4000'
  const URL = `${mainURL}/v1/blog/posts`

  useEffect(() => {
    axios.get(`${URL}?perPage=6`).then(res => {
      const posts = res.data.all_posts
      setBlogPosts(posts)
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
            blogPosts.map(post => (
              <BlogItem key={post._id} img={`${mainURL}/`+ post.image} title={post.title} desc={post.bodyBlog} author={post.author} date={post.createdAt} />
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
