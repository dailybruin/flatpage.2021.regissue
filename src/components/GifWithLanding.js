import styled, { keyframes } from "styled-components";
import { mediaQueries } from "../shared/config";
import DBHeader from '../components/Header.js';
import { useRef, useState, useCallback, useEffect } from 'react';
import StoriesPage from '../components/ArticleGrid'
import PowellDesktop from '../assets/landing_desktop.gif';
import PowellMobile from '../assets/landing_mobile.gif';

const RenderGIF = styled("img")`
  width: 100%;
  height: 100vh;
  ${mediaQueries.mobile} {
    /* height: 100px; */
  }
`;

function GifWithLanding (props) {
  let myRef = useRef(null);
  let data = props.data;

  const [firstTime, setFirstTime] = useState(true);
  const media = window.matchMedia('(max-width: 700px)')
  const [isMobile, setIsMobile] = useState(media.matches)

  media.addEventListener("change", () => {
    if (media.matches !== isMobile) {
      setIsMobile(media.matches)
    }
  })

  const scroller = useCallback(() => {
    setTimeout(() => {
      if (myRef && myRef.current) {
        myRef.current.scrollIntoView({behavior: 'smooth'})
        setFirstTime(false)
      }
    }, 5000)
  }, [myRef])

  return (
      <>
        <DBHeader/>
        {isMobile ? (
          <RenderGIF src={PowellMobile}></RenderGIF>
        ) : (
          <RenderGIF src={PowellDesktop}></RenderGIF>
        )}
        <StoriesPage data={data}/>
      </>
  );
}

export default GifWithLanding;