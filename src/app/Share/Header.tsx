import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center gap-4 place-items-center'>
      <Link href='/'>Home</Link>
      <Link href='/about-us'>About Us</Link>
      <Link href='/product'>Products</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/blog'>Blogs</Link>
      <Link href='/order-product'>Order Product</Link>
    </div>
  )
}

export default Header
