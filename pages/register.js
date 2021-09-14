import { useRouter } from 'next/router'
import { Input, Button, Gap } from "../components"


const Register = () => {
  const router = useRouter()
  return (
    <article className="bg-gradient-to-b from-purple-200 to-blue-300 flex items-center h-[100vh] font-raleway">
      <div className="container m-auto flex justify-center">
        <section className="shadow-xl relative">
          <img src="/image/ilus-register.png" alt="ilustrasi" className="w-[400px]" />
          <h2 className="absolute top-[70px] left-8 text-5xl text-white font-thin w-10/12">Dapatkan Informasi dan Insight <span className="font-extrabold">setiap hari</span> untuk produktifitas anda</h2>
         
        </section>
        <section className="w-5/12 bg-white shadow-xl px-[50px]">
          <Gap height="20px"/>
          <h2 className="text-2xl text-gray-700 text-center mt-5 mb-4">Register</h2>
          <Input label="username" placeholder="input your name here..."/>
          <Gap height="10px"/>
          <Input label="email" type="email" placeholder="input your email here..."/>
          <Gap height="0px"/>
          <Input label="password" type="password" placeholder=" password at least 5 character..."/>
          <Gap height="30px"/>
          <div className="flex gap-3">
            <Button onClick={() => router.push('/login')} title="register" className="bg-gradient-to-br from-purple-500 to-purple-700 shadow-xl text-white px-7 py-2 rounded-md cursor-pointer block"/>
            <a href="/login" className="px-7 py-2 bg-gradient-to-br from-red-400 to-red-500 rounded-md text-white sha">I want login</a>
          </div>
        </section>
      </div>
    </article>
  )
}

export default Register
