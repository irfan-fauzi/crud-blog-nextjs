import axios from 'axios';
export const setDataBlog = (page) => (dispatch) => {
    const mainURL = 'http://localhost:4000'
    const URL = `${mainURL}/v1/blog/posts`
    
    axios.get(`${URL}?page=${page}&perPage=6`).then(res => {
      const current = res.data.current_page
      const totalPosts = res.data.total_post
      const total = Math.ceil(totalPosts / res.data.per_page)
      const posts = res.data.all_posts
      dispatch({type: 'UPDATE_DATA_BLOG', payload: posts})
      dispatch({type: 'UPDATE_PAGE',payload: {current, total}})
    })
    .catch(err => {
      console.log(err)
    })
}