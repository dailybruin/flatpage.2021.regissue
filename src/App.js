import React, { component, useState, useEffect } from 'react';

import ReactGA from 'react-ga';
import { colors } from './shared/config'
import StoriesPage from './components/ArticleGrid'
import styled, { keyframes } from "styled-components";
import { mediaQueries } from "./shared/config";
import PowellDesktop from './assets/landing_desktop.gif';
import Staff from './components/Staff'

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const RenderGIF = styled("img")`
  width: 100%;
  height: 100vh;
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
      'https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2021.grad-issue'
    )
      .then((res) => res.json())
      .then((res) => setData(res.data['article.aml']));
  }, []);

  // const gradissueData = JSON.parse(data)
  // console.log(gradissueData)

  return (
    <>
      <Header />
      <RenderGIF src={PowellDesktop}></RenderGIF>
      <Navbar />
      <StoriesPage data={data}/>
      <Footer/>
    </>
  );
}

export default App;
