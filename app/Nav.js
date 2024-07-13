'use client'
import Link from "next/link"
import { useState, useEffect } from "react"

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const togLog = now => setIsLoggedIn(!now)

  return (
    <>
      <nav className="bg-[#010057] h-20 flex items-center justify-center ">
        <div className="w-4/5 h-full m-500 flex items-center justify-between">
          <Link href='/' className="bg-blue-500 w-8 h-8 rounded-full"></Link>
          {
            isLoggedIn ?
              <div className="flex items-center ">
                <Link href="/profile" title="Your profile" className="size-12 mr-4 rounded-full bg-white"></Link>
                <button onClick={togLog} className="text-white bg-[#d51a18] px-4 py-3 rounded-sm duration-500 hover:scale-110">Logout</button>
              </div> :
            <Link href="/login" onClick={() => togLog()} className="text-white bg-[#d51a18] px-4 py-3 rounded-sm duration-500 hover:scale-110">Login</Link>
          }
        </div>
      </nav>
    </>
  )
}
  
export default Nav