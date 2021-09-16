import React, { component, useState, useEffect } from 'react';

import ReactGA from 'react-ga';
import { colors } from './shared/config'
import StoriesPage from './components/ArticleGrid'
import styled, { keyframes } from "styled-components";
import { mediaQueries } from "./shared/config";
// import Landing from './assets/landing.png';
import Staff from './components/Staff'
import LikeWhatYouSeeBox from './components/LikeWhatYouSeeBox'
import BoardingPass from './components/BoardingPass'
import LandingHorizontal from './assets/flatpage-horiz-FINAL.gif';
import LandingVert from './assets/flatpage-vert-FINAL.gif';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const RenderGIF = styled("img")`
  width: 100%;
  height: 100vh;
  ${mediaQueries.tablet}{
    height: 80vh;
    text-align: center;
    justify-content: center;
  }
  ${mediaQueries.mobile}{
    height: 100vh;
    text-align: center;
    justify-content: center;
  }
`;

const LandingCredits = styled.div`
  text-align: right;
  margin-right: 10px;
  font-style: italic;
`;
const DBHeader = styled("div")`
  z-index: 2001;

  position: relative;
  background: black;
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
  color: white;
  border-bottom: 2px solid black;
`;


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      'https://kerckhoff.dailybruin.com/api/packages/flatpages/flatpage.2021.registration-issue'
    )
      .then((res) => res.json())
      .then((res) => setData(res.data['article.aml']));
  }, []);

  const media = window.matchMedia('(max-width: 750px)');
    const [isMobile, setIsMobile] = useState(media.matches);
    console.log(isMobile);
    media.addEventListener('change', () => {
        if (media.matches !== isMobile) {
          setIsMobile(media.matches);
        }
    });
    

  return (
    <>
        <Header />
          {!isMobile && <RenderGIF alt="" src={LandingHorizontal}></RenderGIF>}
          {isMobile && <RenderGIF alt="" src={LandingVert}></RenderGIF>}
          <LandingCredits>(Emily Dembinski, Katelyn Dang and Harry Song/Daily Bruin staff)</LandingCredits>
        <Navbar />
        <BoardingPass/>
        <StoriesPage data={data}/>
        <LikeWhatYouSeeBox/>
        <Staff data={data} />
        <Footer/>
      </>
  );
}

export default App;