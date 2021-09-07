import React, { Component } from 'react';
import styled from 'styled-components';
import fb from './images/socials/facebook.png';
import insta from './images/socials/instagram.png';
import twitter from './images/socials/twitter.png';
import tiktok from './images/socials/tiktok.png';
import email from './images/socials/newsletter.png';
import { mediaQueries } from '../shared/config';
import footer_image from './images/db_footer.svg';
const mql = window.matchMedia(`(min-width: 800px)`);

const FooterDiv = styled.div`
  position: fixed;
  left: 0px;
  bottom: 2px;
  height: 150px;
  width: 100%;
  font-family: ITC Century;
  text-align: center;
  h1 {
    margin: 0;
    font-family: 'Times New Roman', Times, serif;
  }
`;

const Socials = styled.div`
  margin-top: 15px;
  align-content: center;
  text-align: center;
  img {
    margin: 0 15px;
  }
  p {
    ${mediaQueries.mobile} {
      margin-top: 20px;
    }
  }
`;

export default function Footer(props) {
  return (
    <FooterDiv>
      <img src={footer_image} />
      <Socials>
        <a href="https://www.instagram.com/dailybruin" target="_blank">
          <img src={insta} style={{ width: '3%' }} />
        </a>
        <a href="https://www.facebook.com/dailybruin" target="_blank">
          <img src={fb} style={{ width: '3%' }} />
        </a>
        <a href="https://www.twitter.com/dailybruin" target="_blank">
          <img src={twitter} style={{ width: '3%' }} />
        </a>
        <a href="https://www.tiktok.com/@dailybruin" target="_blank">
          <img src={tiktok} style={{ width: '3%' }} />
        </a>
        <a href="http://eepurl.com/cFEiZX" target="_blank">
          <img src={email} style={{ width: '3%' }} />
        </a>
        <p>
          Built with Suzy’s ♥ in Kerckhoff 118 by Mattie Sanseverino, Sunny Li,
          Aritra Mullick, Tommy Vo Tran and Charles Liu. <br></br>Designed by
          Binxuan Zhang, Lauren Ho, Maya O’Kelly and Rachel Kwan.
        </p>
      </Socials>
    </FooterDiv>
  );
}
