import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, mediaQueries } from '../shared/config';


const Container = styled.div`
    position: relative;
    text-align: center;  
    margin-top: 30px;

`
const Title = styled.div` 
    font-family: Prompt, serif;
    position:relative;
    font-size: 50px;
    line-height: 36px;
    text-align: center;
    font-weight: 800;
    margin-bottom:40px;
    ${mediaQueries.mobile} {
      font-size: 24px;
    }
`
export const Grid = styled.div`
  display: inline-grid;
  margin-top:20px;
  margin-left:10%;
  margin-right:10%;
  align-self:center;
  text-align: left;
  grid-template-columns: 1fr 1fr;
  line-height: 20px;
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
     <div>
      <p style={{"line-height": "20px","align-self":"center","text-align": "center", "margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}><b>Management</b></p>
      <p style={{"line-height": "20px","align-self":"center","text-align": "center","margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>Genesis Qu | Editor in Chief</p>
      <p style={{"line-height": "20px","align-self":"center","text-align": "center","margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>Cecile Wu | Managing Editor</p>
      <p style={{"line-height": "20px","align-self":"center","text-align": "center","margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>Shirley Yao | Digital Managing Editor</p>
     </div>
     <Grid>
        {props.data &&
          <> {props.data.staff.map((info) => {
              if (info.section === "Management") {
                return (
                  <>
                  </>
                )
              }
              else if (info.section === "PRIME"){
                return(
                <div>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif","font-weight": "500"}}><b>{info.section}</b><br></br></p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif","font-weight": "500"}}>{info.editor}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif","font-weight": "500"}}>{info.editor2}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif","font-weight": "500"}}>{info.editor3}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif","font-weight": "500"}}>{info.staff}</p>
            </div>)
              }
              else if (info.section === "Advertising"){
                return(
                <div>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}><b>{info.section}</b><br></br></p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor2}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor3}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor4}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor5}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor6}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor7}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor8}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif"}}>{info.editor9}</p>
            
            </div>)
              }
              else {
              return (
                <div>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif","font-weight": "500"}}><b>{info.section}</b><br></br>{info.editor}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif","font-weight": "500"}}>{info.assistants}</p>
                <p style={{"margin-left":"2em", "margin-right":"2em", "font-family": "'Prompt', sans-serif","font-weight": "500"}}>{info.staff}</p>
                
            </div>)
            
            }
})} 
          </>}</Grid></Container>

      
   )
}