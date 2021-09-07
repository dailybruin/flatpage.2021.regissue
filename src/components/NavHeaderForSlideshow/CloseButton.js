import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { mediaQueries } from '../../shared/config';

const yellow = '#f2d851';
const lightYellow = '#f9efb9';

const StyledButton = styled.button`
  cursor: pointer;
  min-height: 40px;
  max-height: 80px;
  border: 1px solid black;

  background: ${yellow};
  ${mediaQueries.notMobile} {
    transition: 0.3s;
    &:hover {
      background: ${lightYellow};
    }
  }
  ${mediaQueries.mobile} {
    &:active {
      background: ${lightYellow};
    }
    margin-right: 10px;
    margin-bottom: 10px;
  }

  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #000000;

  /* identical to box height */
  align-items: center;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;

  line-height: 28px;
`;
const CloseButton = (props) => {
  return (
    <StyledButton
      onClick={() =>{
        props.history.push("/home")
      }}
    >
      X
    </StyledButton>
  );
};

CloseButton.propTypes = {
  history: PropTypes.object,
};

export default withRouter(CloseButton);
