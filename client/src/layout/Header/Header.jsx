import React from 'react'
import{Link} from "react-router-dom"
import "./Header.scss"

const Header = () => {
  return (
 <>

   <div className="custom__nav">
     <div className="custom__nav__left">
       <img src="https://preview.colorlib.com/theme/drimo/drimo/img/logo-6.png.webp" alt="" />
     </div>
     <div className="custom__nav__right">
     <Link  to="/" id="home">HOME</Link>
     <Link to="/add">ADD</Link>
     <Link>WISHLIST</Link>
     </div>
   </div>
 </>
  )
}

export default Header