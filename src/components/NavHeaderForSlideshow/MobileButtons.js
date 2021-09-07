import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styled, { css } from 'styled-components'

import menu from '../images/menu.svg'
import vert_menu from '../images/vert-menu.svg'
import { colors } from '../../shared/config'

const SquareButton = styled.button`
  width: 42px;
  height: 42px;
  background: #FFB5B5;
  border: 2px solid #000000;
  border-bottom: none;
  box-sizing: border-box;

  text-align: center;
  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #000000;

  transition: 0.2s;

  ${(props) =>
        css`
            background: ${props.color}
        `
   }
`
const ButtonContainer = styled.div`
  z-index: 2002;

  top: -2px;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const MobileButtons = (props) => {
  const [active, setActive] = useState(false)

  return (
    <ButtonContainer>
      <SquareButton
        color={colors.pink}
        onClick={()=>{
          props.history.push("/home")
        }}
      >
        X
      </SquareButton>
      </ButtonContainer>
      // <SquareButton
      //   color={!active ? colors.pink : colors.lightYellow}
      //   onClick={() => {
      //     setActive(prevActive => !prevActive)
      //     props.callbacks.setShowNav(prevShow => !prevShow)
      //   }}
      // >
      //   {
      //     !active ? (
      //       <img src={menu} alt="menu"/>
      //     ) : (
      //       <img src={vert_menu} alt="menu"/>
      //     )
      //   }
      // </SquareButton>
    
  )
}

MobileButtons.propTypes = {
  callbacks: PropTypes.shape({
    setShowNav: PropTypes.func
  }),
  history: PropTypes.object
}

export default withRouter(MobileButtons)