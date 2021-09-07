import styled from 'styled-components'

import DBLogo from './images/db.svg'
import { colors } from '../shared/config'

const DBHeader = styled("div")`
  z-index: 2001;

  position: fixed;
  background: ${colors.yellow};
  width: 100%;
  padding: 0.5em 0;
  color: black;
  font-family: 'ITC Century';
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 21.6px;
  border-bottom: 2px solid black;
`;

const Header = () => {
  return (
    <DBHeader>
      {/* Daily Bruin */}
      <img src={DBLogo} alt="Daily Bruin" />
    </DBHeader>
  )
}

export default Header;