import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import menu from '../images/menu.svg'
import vert_menu from '../images/vert-menu.svg'
import { colors } from '../../shared/config'

const SquareButton = styled.button`
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 5px;
  border: 0;

  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;

  background: ${colors.black};

  transition: 0.2s;
`
const MobileButtons = (props) => {
  const [active, setActive] = useState(true)

  return (
    <SquareButton
      color={colors.black}
      onClick={() => {
        setActive(prevActive => !prevActive)
        props.callbacks.setShowNav(prevShow => !prevShow)
      }}
    >
      {
        !active ? (
          <img src={menu} alt="menu"/>
        ) : (
          <img src={vert_menu} alt="menu"/>
        )
      }
    </SquareButton>
  )
}

MobileButtons.propTypes = {
  callbacks: PropTypes.shape({
    setShowNav: PropTypes.func
  }),
  history: PropTypes.object
}

export default MobileButtons;