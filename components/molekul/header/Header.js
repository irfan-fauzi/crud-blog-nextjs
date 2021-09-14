import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
const Header = () => {
  const router = useRouter()
  return (
    <header className="w-full bg-gradient-to-br from-purple-500 to-purple-700">
      <div className="max-w-[1200px] px-4 lg:px-1 flex justify-between items-center h-[70px] mx-auto text-white">
          <Link href="/">
            <h1 className="text-2xl font-bold cursor-pointer">Mern Blog</h1>
          </Link>
            
          <h2 className="text-xl cursor-pointer " onClick={() => router.push('/login') }>Logout</h2>
          
      </div>
    </header>
    
  )
}

export default Header
