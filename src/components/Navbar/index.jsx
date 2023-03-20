import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../src/assets/Zonipsa-logo.png'
import { Outlet } from 'react-router-dom'

const nav = [
    {name: "Home", href: "/"},
    {name: "About", href:"/about"},
    {name: "Contact", href: "/contact"}]

const Navbar = () => {
  return (
    <>
        <nav className='bg-primary bg-opacity-5'>
            <div className="py-4 flex items-center sticky top-0 container mx-auto">
                <div className="flex mr-6 justify-between w-full">
                    <Link to="/">
                        <img src={Logo} alt="zinopsa logo" width={50}/>
                    </Link>
                    <div className='flex items-center gap-4'>
                        {
                            nav.map((data,key) => {
                                return (
                                    <Link key={key} className='capitalize hover:text-primary duration-300' to={data.href}>
                                        {data.name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar