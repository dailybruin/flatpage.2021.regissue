import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, mediaQueries } from '../shared/config';


const Container = styled.div`
text-align: center;  
`
const Title = styled.div` 
    font-family: Prompt;
    font-size: 64px;
    line-height: 36px;
    text-align: center;
    font-weight: 800;
    
`
export const Grid = styled.div`
  display: grid;
  left: 80%;
  align-self:center;
  text-align: left;
  grid-template-columns: 1fr 1fr;
  line-height: 30px;
  column-gap: 5vw;
  padding: 0 0vw;
  
  /* border: 2px solid brown; */

  ${mediaQueries.mobile} {
    grid-template-columns: repeat(1, 1fr);
    
    row-gap: 15vh;
    column-gap: 20vw;
  }

  /* &:first-child {
    grid-column: 1 / span 3;
  } */
`;

export default function Staff(props) {
   return (
     <Container>

     <Title>Daily Bruin Editorial Staff</Title>
     <>
      <p style={{"align-self":"center","text-align": "center", "margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}><b>Management</b></p>
      <p style={{"align-self":"center","text-align": "center","margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>Genesis Qu | Editor in Chief</p>
      <p style={{"align-self":"center","text-align": "center","margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>Cecile Wu | Managing Editor</p>
      <p style={{"align-self":"center","text-align": "center","margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>Shirley Yao | Digital Managing Editor</p>
     </>
     <Grid>
        {props.data &&
          <> {props.data.about_page.map((info) => {
              if (info.section === "Management") {
                return (
                  <>
                  </>
                )
              }
              else if (info.section === "PRIME"){
                <>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}><b>{info.section}</b></p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor2}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor3}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.staff}</p>
            </>
              }
              else if (info.section === "Advertising"){
                <>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}><b>{info.section}</b></p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor2}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor3}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor4}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}><b>{info.editor5}</b></p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor6}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor7}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor8}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor9}</p>
            
            </>
              }
              else {
              return (
                <>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}><b>{info.section}</b></p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.assistants}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.staff}</p>
                
            </>)
            
            }
})} 
          </>}</Grid></Container>

      
   )
}