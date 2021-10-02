import axios from "axios";
import Head from "next/head";
import { useRouter, withRouter } from 'next/router'
import { useEffect, useState } from "react";
import { Button, Gap, Loading } from "../../components";
import Layout from "../../components/layout/Layout";

const DetailBlog = () => {
  const router = useRouter()
  const [dataBlog, setDataBlog] = useState({})
  const {id} = router.query 
  useEffect(async() => {
    try {
      const url = `http://localhost:4000/v1/blog/post`
      const hasil = await axios.get(`${url}/${id}`)
      setDataBlog(hasil.data.targetPost)
     
    } catch (error) {
      console.log('tunggu sebentar')
    } finally{
      console.log('ahirnya')
    }
    
  },[id])
  if(dataBlog.author){

    return (
      <Layout>
        <Head>
          <title>Blog detail</title>
        </Head>
        <main>
          <article className="lg:w-8/12 mx-auto">
            <Gap height="4rem"/>
            <img src={`http://localhost:4000/${dataBlog.image}`} alt="" className="w-full h-[500px] object-cover"/>
            <Gap height="2rem"/>
            <div className="flex gap-4 w-10/12 mx-auto">
              <h3>{dataBlog.author.name ? dataBlog.author.name : `halo`}</h3>
              <h4>{dataBlog.createdAt}</h4>
            </div>
            <Gap height="1rem"/>
            <div className="w-10/12 mx-auto">
              <h1 className="text-3xl capitalize font-semibold">{dataBlog.title}</h1>
              <Gap height="1rem"/>
              <p>{dataBlog.bodyBlog}</p>
              
            </div>
            <Gap height="2rem"/>
            <Button onClick={() => router.push('/')} title="Back to.." className="border bg-blue-500 text-white px-9 py-2 rounded-md shadow-md"/>
            <Gap height="2rem" />
          </article>
        </main>
      </Layout>
    )
   }
   return (
     <Loading />
   )
}

export default withRouter(DetailBlog)
