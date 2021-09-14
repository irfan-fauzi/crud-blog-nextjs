import Head from "next/head";
import { useRouter } from 'next/router'
import { Button, Gap } from "../components";
import Layout from "../components/layout/Layout";

const DetailBlog = () => {
  const router = useRouter()
  return (
    <Layout>
      <Head>
        <title>Blog detail</title>
      </Head>
      <main>
        <article className="lg:w-8/12 mx-auto">
          <Gap height="4rem"/>
          <img src="/image/thumbnail-1.jpg" alt="" />
          <Gap height="2rem"/>
          <div className="flex gap-4 w-10/12 mx-auto">
            <h3>Irfan fauzi - </h3>
            <h4>12 September 2021</h4>
          </div>
          <Gap height="1rem"/>
          <div className="w-10/12 mx-auto">
            <h1 className="text-3xl capitalize font-semibold">the more important the work, the more important the rest</h1>
            <Gap height="1rem"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eum qui ab nobis pariatur laudantium expedita dolorum necessitatibus officia fuga, minus, nesciunt corrupti atque autem tenetur, quod consectetur impedit? Sunt harum doloribus recusandae nostrum totam odio pariatur iste quam voluptas adipisci porro ipsum, neque esse? Mollitia ipsum illo dolore quas consectetur at, error aspernatur assumenda molestiae consequuntur. Enim id sit accusantium officia soluta harum sunt pariatur culpa exercitationem ad quis debitis consectetur, magni recusandae iusto neque maiores odit repudiandae quidem. Veniam cumque itaque aperiam maiores eligendi. Blanditiis, obcaecati doloremque est tempore eos consectetur amet quod ipsum, dolore molestias suscipit nam?</p>
            <Gap height="1rem"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus doloribus recusandae voluptatum obcaecati? Quod soluta facilis impedit eius eum natus quam. Sapiente dolorem vero quo tempora facere eveniet, alias molestiae eligendi, totam unde in autem quibusdam? Tempora nesciunt debitis molestias, mollitia ratione, eius fuga dignissimos repellat veniam nulla id aperiam perspiciatis reprehenderit dolor autem error animi ea quam maiores ducimus. Corporis deleniti similique ad libero doloremque hic officia incidunt neque labore, magnam eos, fuga ipsum modi illum mollitia at inventore ipsa facere quasi iusto omnis quas necessitatibus. Nesciunt ipsum iste nihil, tenetur labore quidem, eligendi quibusdam ratione quasi ea eaque!</p>
            <Gap height="1rem"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, culpa tempora deserunt distinctio cupiditate soluta a hic repudiandae, accusantium ea quisquam. Sapiente ducimus cum perspiciatis et officiis odio dolorum odit, nihil laborum nulla repellat dicta neque. Necessitatibus enim at animi pariatur rerum incidunt! Nesciunt consequatur cupiditate officia tempore, blanditiis accusantium ex quae fugiat explicabo quibusdam accusamus voluptatum commodi earum, exercitationem libero atque harum fuga rerum? Quos adipisci expedita possimus fugiat, cumque officiis blanditiis, dignissimos quia incidunt illo molestiae! Harum accusantium quibusdam expedita in illum, sequi magnam voluptates adipisci molestiae facere, voluptas numquam aliquam inventore similique possimus dignissimos iure esse impedit.</p>

            
          </div>
          <Gap height="2rem"/>
          <Button onClick={() => router.push('/')} title="Back to.." className="border bg-blue-500 text-white px-9 py-2 rounded-md shadow-md"/>
          <Gap height="2rem" />
        </article>
      </main>
    </Layout>
  )
}

export default DetailBlog
