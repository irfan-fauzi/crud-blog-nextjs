import Head from 'next/head'
import { Button, Gap, Input, Textarea } from '../components'
import Layout from '../components/layout/Layout'

const CreatePost = () => {
  return (
    <Layout>
      <Head>
        <title>Create Post</title>
      </Head>
      <main>
       <Gap height="2rem"/>
       <h1 className="text-2xl">Create New Post</h1>
       <Gap height="2rem"/>
       <Input placeholder="Title post..."/>
       <Gap height="10px"/>
       <Button title="upload image" className="border py-1 px-4 border-purple-600 rounded-md text-gray-500"/>
       <Gap height="10px"/>
       <Textarea placeholder="new post" />
       <Gap height="30px"/>
       <Button title="Post" className="bg-gradient-to-br from-blue-500 to-blue-800 text-white py-2 px-10 rounded-md shadow-lg"/>
      </main>
    </Layout>
  )
}

export default CreatePost
