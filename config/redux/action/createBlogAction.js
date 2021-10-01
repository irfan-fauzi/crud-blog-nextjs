import axios from 'axios'
export const setForm = (formType, formValue) => {
  return{type:'SET_FORM_DATA', formType, formValue}
}

export const setImgPreview = (payload) => {
  return {type: 'SET_IMG_PREVIEW', payload}
}

export const postToApi = (form) => {
  const url = `http://localhost:4000/v1/blog/post`
  const data = new FormData()

    data.append('title', form.title)
    data.append('bodyBlog', form.bodyBlog)
    data.append('image', form.image)

  axios.post(url, data, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  })
  .then(res => console.log(res))
  .catch(err => console.log('ada masalah saat axios: ', err))
}