import styled from 'styled-components'
import { mediaQueries } from '../../shared/config'

export const Article = styled.div`
  min-height: 10vh;
  height: 40vh;
  display: block;

  ${mediaQueries.tablet} {
    width: 35vw;
    height: 25vh;
  }
  ${mediaQueries.mobile} {
    width: 60vw;
    height: 40vh;
  }
  border: 4px solid black;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 10px;
  z-index: 6;
`

export const ArticleImage = styled.img`
  object-position: center center;
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`

export const FlexDiv10 = styled.div`
  padding: 0.5vh 0.5vw;
  min-height: 10%;
  height: auto;
  border-top: 4px solid black;
  border-bottom: 4px solid black;
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
    font-size: 2.2vw;
  }
  ${mediaQueries.mobile} {
    font-size: 4vw;
  }
`

export const FlexDiv15 = styled.div`
  padding: 0.5vh 0.5vw;
  min-height: 22%;
  height: auto;
  background-color: ${({ color }) => color};
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2vw;
  font-family: Karla;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
  z-index: 1;

  /* overflow: scroll; */
  /* text-align: center; */
  /* justify-items: center; */

  ${mediaQueries.tablet} {
    font-size: 1.7vw;
    padding: 0 0;
    min-height: 18%;
  }
  ${mediaQueries.mobile} {
    font-size: 4vw;
    padding: 0 0;
    min-height: 24%;
  }
`

export const FlexDiv65 = styled.div`
  height: 65%;
  /* border-radius: 5px; */
  box-sizing: border-box;
`

export const FlexDiv85 = styled.div`
  height: 85%;
  border: 1px solid black;
  box-sizing: border-box;
`

export const ArticleLink = styled.a`
  padding: 5px;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: black;
  border: 4px solid;
  border-color: ${({ color }) => color};
  border-radius: 10px;
  box-sizing: border-box;
`
