import { Input } from '../components/atom/index'


const Register = () => {
  return (
    <article className="bg-gradient-to-b from-purple-200 to-blue-300 flex items-center h-[100vh] font-raleway">
      <div className="container m-auto flex justify-center">
        <section className="shadow-xl relative">
          <img src="/image/ilus-register.png" alt="" className="w-[400px]" />
          <h2 className="absolute top-[50px] left-7 text-5xl text-white font-thin w-10/12">Dapatkan Informasi dan Insight <span className="font-extrabold">setiap hari</span> untuk produktifitas anda</h2>
          <button className="bg-red-500 text-white absolute bottom-7 left-7 py-2 px-5 rounded-lg cursor-pointer">Subscribe</button>
        </section>
        <section className="w-5/12 bg-white shadow-xl p-4">
          <h2 className="text-2xl text-center mt-2 mb-4">Register</h2>
          <Input label="username" placeholder="silahkan isi email..."/>
        </section>
      </div>
    </article>
  )
}

export default Register
