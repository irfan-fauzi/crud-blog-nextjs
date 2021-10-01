import axios from "axios";
import Head from "next/head";
import { useRouter, withRouter } from 'next/router'
import { useEffect, useState } from "react";
import { Button, Gap } from "../../components";
import Layout from "../../components/layout/Layout";

const DetailBlog = () => {
  const router = useRouter()
  const [dataBlog, setDataBlog] = useState({})
  const {id} = router.query
  const {title, bodyBlog, image, author, createdAt} = dataBlog
 
  useEffect(() => {
    const url = `http://localhost:4000/v1/blog/post`
    axios.get(`${url}/${id}`)
    .then(res => setDataBlog(res.data.targetPost))
    .catch(err => console.log(err))
  }, [])
  if(author){
    return (
      <Layout>
        <Head>
          <title>Blog detail</title>
        </Head>
        <main>
          <article className="lg:w-8/12 mx-auto">
            <Gap height="4rem"/>
            <img src={`http://localhost:4000/${image}`} alt="" className="w-full h-[500px] object-cover"/>
            <Gap height="2rem"/>
            <div className="flex gap-4 w-10/12 mx-auto">
              <h3>{author.name}</h3>
              <h4>{createdAt}</h4>
            </div>
            <Gap height="1rem"/>
            <div className="w-10/12 mx-auto">
              <h1 className="text-3xl capitalize font-semibold">{title}</h1>
              <Gap height="1rem"/>
              <p>{bodyBlog}</p>
              
            </div>
            <Gap height="2rem"/>
            <Button onClick={() => router.push('/')} title="Back to.." className="border bg-blue-500 text-white px-9 py-2 rounded-md shadow-md"/>
            <Gap height="2rem" />
          </article>
        </main>
      </Layout>
    )
  }
  return(
    <h1>Loading data...</h1>
  )
  
}

export default withRouter(DetailBlog)
