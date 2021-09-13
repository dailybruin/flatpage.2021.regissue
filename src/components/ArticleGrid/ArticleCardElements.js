import styled from 'styled-components'
import { mediaQueries } from '../../shared/config'

export const Article = styled.div`
  /* border: 0.5px solid #000000; */
  /* width: 18vw;  Uncomment if you want each card to be smaller but for there to be unequal padding on left and right sides of the grid*/
  min-height: 10vh;
  height: 40vh;
  display: block;

  ${mediaQueries.tablet} {
    width: 30vw;
    height: 25vh;
  }
  ${mediaQueries.mobile} {
    width: 60vw;
    height: 40vh;
  }
  /* border: 2px solid yellow; */
  margin: 0 auto;
  /* /* box-sizing: border-box */
`

export const ArticleImage = styled.img`
  object-position: center center;
  object-fit: cover;
  height: 100%;
  width: 100%;
`

// export const ArticleHeadline = styled.h3`
//   font-style: ${(italics) => (italics ? 'italics' : 'normal')};
//   background: #f9eeb2;
//   border: 1px solid #000000;
//   max-height: 100%;
// `;

// export const ArticleAuthor = styled.div`
//   text-transform: uppercase;
//   background-color: #ffb5b5;
//   border: 1px solid #000000;
//   font-family: Bebas Neue;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 22px;
//   letter-spacing: 0em;
//   text-align: center;
// `;

// export const FlexDiv = styled.div`
//   flex-grow: ${(proportion) => (proportion ? proportion : `33`)};
//   flex-basis: ${(flexBasis) => (flexBasis ? flexBasis : null)};
// `;
export const FlexDiv10 = styled.div`
  padding: 0.5vh 0.5vw;
  min-height: 10%;
  height: auto;
  border-left: 1px solid black;
  border-right: 1px solid black;
  box-sizing: border-box;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4vw;

  font-family: Bebas Neue;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  /* text-align: center; */

  ${mediaQueries.tablet} {
    font-size: 3vw;
  }
  ${mediaQueries.mobile} {
    font-size: 5.4vw;
  }
`

export const FlexDiv15 = styled.div`
  padding: 0.5vh 0.5vw;
  min-height: 25%;
  height: auto;
  background-color: ${({ color }) => color};
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2vw;
  font-family: Karla;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;

  /* overflow: scroll; */
  /* text-align: center; */
  /* justify-items: center; */

  ${mediaQueries.tablet} {
    font-size: 2.8vw;
  }
  ${mediaQueries.mobile} {
    font-size: 4.8vw;
  }
`

export const FlexDiv75 = styled.div`
  height: 65%;
  /* border: 2px solid red; */
  border: 1px solid black;
  box-sizing: border-box;
`

export const FlexDiv85 = styled.div`
  height: 85%;
  /* border: 2px solid red; */
  border: 1px solid black;
  box-sizing: border-box;
`

export const ArticleLink = styled.a`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: black;
  /* border: 2px solid darkgreen; */
`
