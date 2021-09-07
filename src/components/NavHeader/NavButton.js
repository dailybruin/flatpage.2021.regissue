import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { mediaQueries, colors } from "../../shared/config";

const StyledButton = styled.button`
  min-height: 40px;
  max-height: 80px;
  border: 1px solid black;

  background: ${props => props.highlight ? colors.pink : colors.yellow};
  ${mediaQueries.notTablet} {
    border-left: 0;
    transition: 0.3s;
    &:hover {
      background: ${colors.lightYellow};
    }
  }
  ${mediaQueries.tablet} {
    &:active {
      background: ${colors.lightYellow};
    }
    margin-right: 10px;
    margin-bottom: 10px;
  }

  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: #000000;

  /* identical to box height */
  align-items: center;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;

  line-height: 29px;
`

const NavButton = (props) => {
  return (
    <StyledButton
      highlight={props.highlight}
      onClick={() => {
        const target = document.getElementById(props.section)
        if (target) {
          const top = target.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top, behavior: "smooth" })
        }
      }}
    >
      {props.section}
    </StyledButton>
  )
}

NavButton.propTypes = {
  section: PropTypes.string.isRequired,
  highlight: PropTypes.bool
}

export default NavButton