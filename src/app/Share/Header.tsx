import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center gap-4 place-items-center'>
      <Link href='/'>Home</Link>
      <Link href='/dashboard'>Dashboar</Link>
      <Link href='/about-us'>About Us</Link>
      <Link href='/product'>Products</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/blog'>Blogs</Link>
      <Link href='/order-product'>Order Product</Link>
      <Link href='/f1'>F-1</Link>
      <Link href='/f1/f4'>F-4</Link>
    </div>
  )
}

export default Header
