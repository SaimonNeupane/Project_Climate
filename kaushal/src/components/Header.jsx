import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import { Button } from './ui/button'
import Mobilenav from './Mobilenav'

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container flex justify-between items-center " >
        <Link href='/ ' className="text-black text-lg">
          {/* LOGO */}
          Climate Care Network
        </Link>
        <div className="hidden xl:flex items-center gap-8  ">
          <Nav />
          <Link href="/contacts">
            <Button>Contact US</Button>
          </Link>
        </div>
        <div className="xl:hidden text-black font-bold " style={{
          fontSize:'30px'
        }} > <Mobilenav/></div>
      </div>

    </header>
  )
}

export default Header