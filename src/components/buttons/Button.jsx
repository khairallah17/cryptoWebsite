import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children,className,onClick, ...props}) => {
  return (
    <Link to="/contact" className={`cursor-pointer rounded-full py-3 px-6 md:py-4 md:px-10 bg-gradient-to-br hover:bg-gradient-to-r transition-all duration-300 from-primary to-secondary hover:bg-blend-darken `+className} onClick={onClick} {...props}>
        {children}
    </Link>
  )
}

export default Button