import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

export const Navbar = () => {
  return (   
   <nav className={style.navigation}>
    <ActiveLink  href="/">Home</ActiveLink>
    <ActiveLink  href="/about">About</ActiveLink>
    <ActiveLink  href="/contact">Contact</ActiveLink>
    </nav>
  )
}
