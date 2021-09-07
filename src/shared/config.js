import styled from 'styled-components';

export const mediaQueries = {
  mobile: '@media screen and (max-width: 750px)',
  notMobile: '@media screen and (min-width: 751px)',
  notTablet: '@media screen and (min-width: 901px)',
  tablet: '@media screen and (max-width: 900px)',
  widescreen: '@media (min-width:992px) and (max-width: 12450px)',
};

export const colors = {
  bg: '#F9E9CA',
  headings: '#2F9D6F',
  subhead: '#BB59B1',
  body: '#02051',
  accents: '#E79B56',
  text: '#302051',
  black: '#302051',
  subheading: '#BB59B1',
  green: '#2F9D6F',
  yellow: "#f2d851",
  lightYellow: "#f9efb9",
  pink: "#ffb5b5",
};

export const fonts = {
  titles: 'Grandstander',
};

// export const DBHead = styled('div')`
//   width: 100%;
//   padding: 0.5em 0;
//   color: black;
//   font-family: 'Times New Roman';
//   font-weight: 700;
//   text-align: center;
//   text-transform: uppercase;
//   font-size: 18px;
//   border-bottom: 1px solid black;
// `;
