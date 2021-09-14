import Link from 'next/link'
import { Gap } from '../..'

const BlogItem = ({img, title, desc}) => {
  return (
    <section>
      <div>
        <img src={img} alt="blog image" className="w-full"/>
      </div>
      <div className="border px-5 py-5">
        <Gap height=""/>
        <Link href="/detail-blog">
          <h2 className="text-2xl font-normal cursor-pointer">{title}</h2>
        </Link>
        <Gap height="1rem"/>
        <h3 className="text-gray-600 font-light">{desc}</h3>
      </div>
    </section>
  )
}

export default BlogItem
