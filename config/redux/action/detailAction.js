import axios from "axios";
export const setDetailBlog = (id) => async(dispatch) => {
  try {
    const url = `http://localhost:4000/v1/blog/post`
    const hasil = await axios.get(`${url}/${id}`)
    const data = hasil.data.targetPost  
    dispatch({type: 'DETAIL_DATA_BLOG', payload: data})
  } catch (error) {
    console.log('tunggu sebentar')
  } finally{
    console.log('akhirnya')
  }
}