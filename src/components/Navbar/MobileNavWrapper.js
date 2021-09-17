import React, { useState } from 'react'

import styled, { keyframes } from 'styled-components'
import MenuButton from './MenuButton'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const NavbarContainer = styled.div`
  z-index: 2000;

  position: relative;
  width 100%;
  left: 0px;
  top: 20px;

  display: block;
  visibility: ${props => props.showNav ? 'visible' : 'hidden'};
  animation: ${props => props.showNav ? fadeIn : fadeOut} 0.2s linear;
  transition: visibility 0.2s linear 0.001s;
`

const NavHeader = (props) => {
  const [showNav, setShowNav] = useState(true)

  return (
    <div>
        <MenuButton
          callbacks={{
            setShowNav: setShowNav
          }}
        />
        <NavbarContainer showNav={showNav}>
          {props.children}
        </NavbarContainer>
    </div>
  )
}

export default NavHeader