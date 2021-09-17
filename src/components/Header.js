import styled from 'styled-components'

import DBLogo from './images/db.svg'
import { colors } from '../shared/config'

const DBHeader = styled('div')`
  z-index: 2001;

  position: relative;
  background: ${colors.black};
  width: 100%;
  padding: 0.5em 0;
  color: white;
  font-family: 'ITC Century';
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 21.6px;
  border-bottom: 1px solid ${colors.black};
`

const Header = () => {
  return (
    <DBHeader>
      {/* Daily Bruin */}
      <a href="https://apply.uclastudentmedia.com">
        <img src={DBLogo} alt="Daily Bruin" />
      </a>
    </DBHeader>
  )
}

export default Header
