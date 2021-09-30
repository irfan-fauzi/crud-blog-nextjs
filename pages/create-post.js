import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Button, Gap, Input, Textarea, Upload } from '../components'
import Layout from '../components/layout/Layout'
import { setForm, setImgPreview } from '../config/redux/action'

const CreatePost = () => {
  const router = useRouter()
  const {form, imgPreview} = useSelector(state => state.createBlogReducer)
  const {title, bodyBlog, image} = form
  const dispatch = useDispatch()

  const onSubmit = () => {
    const url = `http://localhost:4000/v1/blog/post`
    const data = new FormData()
    data.append('title', title)
    data.append('bodyBlog', bodyBlog)
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
    dispatch(setForm('image', file))
    dispatch(setImgPreview(URL.createObjectURL(file)))
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

       <Input 
        value={title} 
        onChange={(e) => dispatch(setForm('title', e.target.value))} 
        placeholder="Title post..."/>

       <Gap height="10px"/>
       <Upload onChange={(e) => onImageUpload(e)} 
        img={imgPreview} />
       <Gap height="30px"/>

       <Textarea 
        value={bodyBlog} 
        onChange={(e) => dispatch(setForm('bodyBlog', e.target.value))} 
        placeholder="new post" />
       <Gap height="30px"/>

       <Button onClick={onSubmit} 
        title="Post" 
        className="bg-gradient-to-br from-blue-500 to-blue-800 text-white py-2 px-10 rounded-md shadow-lg block"/>
       <Gap height="1rem" />

       <Button 
        onClick={() => router.push('/')} 
        title="<- Back to Blog" 
        className="bg-gradient-to-br from-red-300 to-red-500 text-white py-2 px-10 rounded-md shadow-lg"/>
       <Gap height="30px"/>

      </main>
    </Layout>
  )
}

export default CreatePost
