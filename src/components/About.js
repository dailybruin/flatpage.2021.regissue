import React, { Component } from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import background from './images/socials/gradient.png'
import { NavLink } from "react-router-dom";
import background_mobile from './images/gradient_mobile.png';
import Header from './Header'
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
`
const Content = styled.div` 
    top: 100px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    
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
    margin-left:0.5em`

export default function About(props) {
   return (
       
      
<LandingPageContainer>
    <Header></Header>
    <br></br><br></br><br></br> <br></br>
    <Content>
    <Exit><X><NavLink to={'/home'} style={{"color": "black", "text-decoration": "none", "margin-left":"4px"}}>X</NavLink></X></Exit>
    <TextBox>
        
        <Title>About</Title>
        {props.data &&
          <> {props.data.about_page.map((info) => {
            if (info.type == 'paragraph' || info.type == 'Name_Position'){
              return (
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Karla', sans-serif"}}>{info.content}</p>)
            }
            else if (info.type == 'Section_header') {
              return (
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Karla', sans-serif"}}><b>{info.content}</b></p>
              )
            }
            
            
})} 
          </>}
        </TextBox>
     
         <Footer />
        </Content>
</LandingPageContainer>
      
   )
}