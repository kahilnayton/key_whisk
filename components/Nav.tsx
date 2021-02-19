import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="h-6 bg-black text-white">
      <ul className="flex pl-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="pl-2">
          <Link href="/discover">Discover</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
