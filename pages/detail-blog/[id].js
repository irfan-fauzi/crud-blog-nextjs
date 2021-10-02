import Head from "next/head";
import { useRouter, withRouter } from 'next/router'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Gap, PageNotfound } from "../../components";
import Layout from "../../components/layout/Layout";
import { setDetailBlog } from "../../config/redux/action";

const DetailBlog = () => {
  const router = useRouter()
  const {detailPost} = useSelector(state => state.detailReducer)
  const dispatch = useDispatch()
  const {id} = router.query

  useEffect(() => {
   dispatch(setDetailBlog(id))
  },[id, dispatch])

   if(id !== detailPost._id){
    return (
      <PageNotfound />
    )
   }
   return (
    <Layout>
        <Head>
          <title>Blog detail</title>
        </Head>
        <main>
          <article className="lg:w-8/12 mx-auto">
            <Gap height="4rem"/>
            <img src={`http://localhost:4000/${detailPost.image}`} alt="" className="w-full h-[500px] object-cover"/>
            <Gap height="2rem"/>
            <div className="flex gap-4 w-10/12 mx-auto">
              <h3>{detailPost.author.name}</h3>
              <h4>{detailPost.createdAt}</h4>
            </div>
            <Gap height="1rem"/>
            <div className="w-10/12 mx-auto">
              <h1 className="text-3xl capitalize font-semibold">{detailPost.title}</h1>
              <Gap height="1rem"/>
              <p>{detailPost.bodyBlog}</p>
            </div>
            <Gap height="2rem"/>
            <Button onClick={() => router.push('/')} title="Back to.." className="border bg-blue-500 text-white px-9 py-2 rounded-md shadow-md"/>
            <Gap height="2rem" />
          </article>
        </main>
      </Layout>
   )
}

export default withRouter(DetailBlog)
