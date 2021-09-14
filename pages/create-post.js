import Head from 'next/head'
import { Button, Gap, Input, Textarea, Upload } from '../components'
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
       <Upload />
       <Gap height="30px"/>
       <Textarea placeholder="new post" />
       <Gap height="30px"/>
       <Button title="Post" className="bg-gradient-to-br from-blue-500 to-blue-800 text-white py-2 px-10 rounded-md shadow-lg"/>
       <Gap height="30px"/>
      </main>
    </Layout>
  )
}

export default CreatePost
