import Link from 'next/link'
import { Gap } from '../..'

const BlogItem = ({id ,img, title, desc, author, date}) => {
  
  return (
    <section>
      <div>
        <img src={img} alt="blog image" 
        className="w-full h-[250px] object-cover"/>
      </div>
      <div className="border px-5 py-5">
        <Gap height=""/>
        <div className="flex gap-4 font-light">
          <p>{author.name}</p>
          <p>- {date}</p>
        </div>
        <Link href={`/detail-blog/${id}`}>
          <h2 className="text-2xl font-normal cursor-pointer text-gray-700 hover:underline hover:text-purple-900 transition-all">{title}</h2>
        </Link>
        <Gap height="1rem"/>
        <h3 className="text-gray-600 font-light">{desc}</h3>
       
      </div>
    </section>
  )
}

export default BlogItem
