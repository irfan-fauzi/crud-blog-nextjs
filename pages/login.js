import { Input, Button, Gap } from "../components"

const Login = () => {
  return (
    <article className="bg-gradient-to-br from-red-200 to-red-400 flex items-center h-[100vh] font-raleway">
      <div className="container m-auto flex justify-center">
        <section className="shadow-xl relative">
          <img src="/image/ilus-login.png" alt="ilustrasi" className="w-[400px]" />
          <h2 className="absolute top-[70px] left-8 text-5xl text-white font-thin w-10/12">Dapatkan Informasi dan Insight <span className="font-extrabold">setiap hari</span> untuk produktifitas anda</h2>
         
        </section>
        <section className="w-5/12 bg-white shadow-xl px-[50px]">
          <Gap height="50px"/>
          <h2 className="text-2xl text-gray-700 text-center mt-5 mb-4">Login</h2>
          <Gap height="10px"/>
          <Input label="email" placeholder="input your email here..." type="email" />
          <Gap height="20px"/>
          <Input label="password" type="password" placeholder=" input password ..."/>
          <Gap height="30px"/>
          <div className="flex gap-5">
            <Button title="Login" className="bg-gradient-to-br from-purple-300 to-purple-400 shadow-xl text-white px-7 py-2 rounded-md cursor-pointer block"/>
            <a href="/register" className="px-7 py-2 bg-gradient-to-br from-red-300 to-red-400 rounded-md text-white sha">i don`t have account</a>
          </div>
        </section>
      </div>
    </article>
  )
}

export default Login
