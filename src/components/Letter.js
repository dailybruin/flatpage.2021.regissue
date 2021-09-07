import React, { Component } from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import background from './images/socials/gradient.png'
import background_mobile from './images/gradient_mobile.png'
import { NavLink } from "react-router-dom";
import Header from './Header'
import BannerAd from './BannerAd'
const mql = window.matchMedia(`(min-width: 800px)`);


const LandingPageContainer = styled.div`
   height:100vh;
   background-image: url(${background});
   background-size: 100%;
   background-color: ${background};
   @media (max-width: 1000px) {
    margin: 0px 0px 1em 0px;
    background-image: url(${background_mobile});
  }
  
  }
`
const Content = styled.div` 
    top: 100px;
    width: 80%;
    margin-left: auto;
    margin-right:auto;
    
`



const TextBox = styled.div`
    top:500px;
    scroll-behaviour: smooth;
    overflow-y: scroll;
    flex-direction: column;
    max-height: 380px;
    
    border-style: solid;
    border-width: 1px;
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
      margin: 0px 0px 1em 0px;
    }
  
`
const Exit = styled.div `
    flex-direction: column;
    height: 30px;
    width: 30px;
    
    border-style: solid;
    border-width: 1px;
    border-bottom: white;
    transition: all 0.3s ease;  
`
const X = styled.div `

width: 17px;
height: 28px;

font-family: Karla;
font-style: normal;
font-weight: bold;
font-size: 29px;
line-height: 28px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;`
const Title = styled.div `
    font-family:Bebas Neue;
    font-size:48px;
    margin-left:0.5em;`

export default function Letter(props) {
  //console.log(props)
  //let letter_data = props.data.letter_from_editor;
  //console.log(letter_data);
   return (
       
       
<LandingPageContainer>
  <Header></Header>
    <br></br><br></br><br></br> <br></br>
    
    <Content>
      
    <Exit><X><NavLink to={'/home'} style={{"color": "black", "text-decoration": "none", "margin-left":"4px"}}>X</NavLink></X></Exit>
    <TextBox>
        <Title>Letter From The Editor</Title>
        {props.data &&
          <> {props.data.letter_from_editor.map((info) => {
            if (info.type == 'paragraph' || info.type == 'greeting' || info.type == 'sign_off'){
              return (
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Karla', sans-serif"}}>{info.content}</p>)
            }
            else if (info.type == 'section_title') {
              return (
                <p style={{"margin-left":"2em", "margin-right":"2em"}}><b>{info.content}</b></p>
              )
            }
            else if (info.type == 'hyperlink_graf_dum') {
              return (<p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Karla', sans-serif"}}>The Daily Bruin published its updated <a href="https://dailybruin.com/the-daily-bruin-community-guide">community guide</a>, which contains information about The Bruin’s policies, funding and ethics guidelines. The paper also sent out community surveys throughout the year to solicit feedback from our readership. We plan to publish the community survey in the summer.</p>)
            }
            
})} 
          </>}
        </TextBox>
     
         <Footer />
         
        </Content>
</LandingPageContainer>
      
   )
}