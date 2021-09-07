import React, { useState } from 'react'

import Header from '../Header'
import Navbar from './Navbar'
import NavHeaderMobile from './NavHeaderMobile'

const NavHeader = () => {
  const media = window.matchMedia('(max-width: 900px)')
  const [isMobile, setIsMobile] = useState(media.matches)

  media.addEventListener("change", () => {
    if (media.matches !== isMobile) {
      setIsMobile(media.matches)
    }
  })

  if (isMobile)
    return <NavHeaderMobile />

  return (
    <div>
      <Header />
      <Navbar/>
    </div>
  )
}

export default NavHeader