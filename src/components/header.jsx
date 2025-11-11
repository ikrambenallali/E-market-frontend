import React from 'react'

export default function Header() {
  return (
    <header className="p-4 bg-[#561E29] opacity-80 text-white flex justify-between items-center">
      <h1 className="text-3xl font-bold text-[#F8E4E6]">E-Market</h1>
      <nav>
        <ul className="flex space-x-4 mt-2">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/shop" className="hover:underline">Shop</a></li>
          <li><a href="" className="hover:underline">Cart</a></li>
         
          <li><a href="/login" className="hover:underline">login</a></li>
          <li><a href="/logout" className="hover:underline">logout</a></li>
        </ul>
      </nav>
    </header>
  )
}
