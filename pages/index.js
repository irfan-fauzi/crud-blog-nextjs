import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlogItem, Button, Gap } from '../components';
import Layout from "../components/layout/Layout";
import { setDataBlog } from '../config/redux/action';

export default function Home() {
  const mainURL = 'http://localhost:4000'
  const router = useRouter()
  const {homeReducer} = useSelector(state => state)
  const {blogPosts, page} = homeReducer
  
  const dispatch = useDispatch()
  const [pageCounter, setPageCounter] = useState(1)

  useEffect(() => {
    dispatch(setDataBlog(pageCounter))
    
  },[dispatch,pageCounter])

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
              <BlogItem key={post._id} img={`${mainURL}/`+ post.image} title={post.title} desc={post.bodyBlog} author={post.author} date={post.createdAt} id={post._id} />
              ))
          } 
        </article>
        <Gap height="3rem"/>
        <div className="flex gap-5 w-full  justify-center items-center cursor-pointer">
          <Button onClick={() => setPageCounter(pageCounter <= 1 ? 1 : pageCounter - 1 )} title="< prev" className={ pageCounter === 1 ? `bg-gray-300 px-4 py-1` : `bg-blue-300 px-4 py-1`} />
          <span className="text-lg">{`${pageCounter}/${page.total}`}</span>
          <Button onClick={() => setPageCounter(page.current === page.total ? pageCounter : pageCounter + 1)} title="next >" className={ page.total === page.current  ? `bg-gray-300 px-4 py-1 cursor-pointer text-white` : `px-4 py-1 bg-blue-300`} />
        </div>
        <Gap height="3rem"/>
      </main>
    </Layout>
  )
}
