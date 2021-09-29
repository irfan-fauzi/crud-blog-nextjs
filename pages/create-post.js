import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Button, Gap, Input, Textarea, Upload } from '../components'
import Layout from '../components/layout/Layout'

const CreatePost = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [image, setImage] = useState('')
  const [imgPreview, setImgPreview] = useState(null)

  const onSubmit = () => {
    const url = `http://localhost:4000/v1/blog/post`
    const data = new FormData()
    data.append('title', title)
    data.append('bodyBlog', body)
    data.append('image', image)

    axios.post(url, data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log('ada masalah saat axios: ', err))
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0]
    setImage(file)
    setImgPreview(URL.createObjectURL(file))
  }
  return (
    <Layout>
      <Head>
        <title>Create Post</title>
      </Head>
      <main>
       <Gap height="2rem"/>
       <h1 className="text-2xl">Create New Post</h1>
       <Gap height="2rem"/>
       <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title post..."/>
       <Gap height="10px"/>
       <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
       <Gap height="30px"/>
       <Textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="new post" />
       <Gap height="30px"/>
       <Button onClick={onSubmit} title="Post" className="bg-gradient-to-br from-blue-500 to-blue-800 text-white py-2 px-10 rounded-md shadow-lg block"/>
       <Gap height="1rem" />
       <Button onClick={() => router.push('/')} title="<- Back to Blog" className="bg-gradient-to-br from-red-300 to-red-500 text-white py-2 px-10 rounded-md shadow-lg"/>
       <Gap height="30px"/>
      </main>
    </Layout>
  )
}

export default CreatePost
