import styled from 'styled-components'

import { colors, mediaQueries, fonts } from '../../shared/config'
import ArticleCard from './ArticleCard'

export const SectionContainer = styled.div`
  text-align: center;
  /* justify-content: center; */
  width: 90%;
  margin: 0 auto;
  padding-bottom: 15vh;
  /* margin-left: 2vw; */
  /* border-bottom: 1px solid black; */
  /* border: 1px solid green; */
`

export const SectionHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  font-family: ${fonts.section_headline};
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 1.5;
  font-size: 4.5rem;
  /* color: ${({ type }) =>
    type === 'NEWS'
      ? colors.blue
      : type === 'SPORTS'
      ? colors.green
      : colors.black}; */
  /* color: red; */
  /* padding: 10px 60px; */
  margin-left: auto;
  margin-right: auto;
  max-width: fit-content;
  align-items: center;
  justify-content: center;
  max-height: 250px;
  margin-bottom: 6vh;
`

export const SectionHeaderOutline = styled.div`
  /* margin-top: 10vh;
  margin-bottom: 5vh; */
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  font-family: ${fonts.section_headline};
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 1.5;
  font-size: 4.5rem;
  /* color: ${({ type }) =>
    type === 'NEWS'
      ? colors.blue
      : type === 'SPORTS'
      ? colors.green
      : colors.black}; */
  /* color: red; */
  /* padding: 10px 60px; */
  margin-left: auto;
  margin-right: auto;
  max-width: fit-content;
  align-items: center;
  justify-content: center;
  max-height: 250px;
  padding: 0px 5px 0px 5px;

  border: 6px solid;
  border-radius: 50px;
`

export const SectionCaption = styled.p`
  font-family: Karla, monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2em;
  line-height: 1.25;
  text-align: left;

  color: black;
  padding: 0vh 0vw;
  /* border: 1px solid red; */
  margin-bottom: 5vh;
`

export const Grid = styled.div`
  /* width: 100%; */
  display: grid;
  grid-template-columns: repeat(
    ${({ section, size }) => (size === 1 ? 1 : size < 4 ? 2 : 3)},
    1fr
  );
  row-gap: 5vh;
  column-gap: 5vw;
  padding: 0 0vw;
  justify-items: stretch;
  justify-content: space-between;
  /* border: 2px solid brown; */

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    row-gap: 20vh;
    column-gap: 1vw;
  }
  ${mediaQueries.mobile} {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    row-gap: 15vh;
    column-gap: 20vw;
  }

  /* &:first-child {
    grid-column: 1 / span 3;
  } */
`

export const SectionsLayout = styled.div`
  /* width: calc(100vw - 2em); */
  min-height: 90vh;
  text-align: center;
  /* padding: 0.5em 1em; */
  /* border: 5px solid orange; */
  padding-left: 3.5vw;
  padding-right: 3.5vw;
  padding-top: 14vh;
`

export const StyledArticleCard = styled(ArticleCard)`
  /* ::first-child {
    grid-column: 1 / span 2;
  } */
  align-self: center;
`
