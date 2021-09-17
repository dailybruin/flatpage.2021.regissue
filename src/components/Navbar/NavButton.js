import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { mediaQueries, colors } from '../../shared/config'

const StyledButton = styled.button`
  min-height: 40px;
  max-height: 80px;
  border: 1px solid black;

  background: ${(props) => (props.highlight ? colors.yellow : colors.bg)};
  ${mediaQueries.notTablet} {
    border-left: ${(props) => (props.first ? '1px solid black' : '0')};
    transition: 0.3s;
    &:hover {
      background: white;
      cursor: pointer;
    }
  }
  ${mediaQueries.tablet} {
    &:active {
      background: white;
    }
    margin-right: 10px;
    margin-bottom: 10px;
  }

  font-family: Prompt;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
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
      first={props.first}
      onClick={() => {
        const target = document.getElementById(props.sectionId)
        if (target) {
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - 100
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }}
    >
      {props.sectionName}
    </StyledButton>
  )
}

NavButton.propTypes = {
  first: PropTypes.bool,
  sectionName: PropTypes.string.isRequired,
  sectionId: PropTypes.string.isRequired,
  highlight: PropTypes.bool,
}

export default NavButton
