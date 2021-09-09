import styled from 'styled-components';

import { colors, mediaQueries } from '../../shared/config';
import ArticleCard from './ArticleCard';

export const SectionContainer = styled.div`
  text-align: center;
  /* justify-content: center; */
  width: 100%;
  margin: 0 auto;
  padding-bottom: 10vh;
  /* margin-left: 2vw; */
  border-bottom: 1px solid black;
  /* border: 1px solid green; */
`;

export const SectionHeader = styled.h2`
  margin-top: 10vh;
  margin-bottom: 5vh;
  text-transform: uppercase;
  font-family: Bebas Neue, monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 1.5;
  font-size: 4.5rem;
  color: black;

  text-align: left;
  /* border: 1px solid red; */
`;

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
`;

export const Grid = styled.div`
  /* width: 100%; */
  display: grid;
  grid-template-columns: repeat(
    ${({ section, size }) => (size === 1 ? 1 : size < 4 ? 2 : 4)},
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
`;

export const SectionsLayout = styled.div`
  /* width: calc(100vw - 2em); */
  min-height: 90vh;
  text-align: center;
  /* padding: 0.5em 1em; */
  /* border: 5px solid orange; */
  padding-left: 3.5vw;
  padding-right: 3.5vw;
  padding-top: 14vh;
`;

export const StyledArticleCard = styled(ArticleCard)`
  /* ::first-child {
    grid-column: 1 / span 2;
  } */
  align-self: center;
`;