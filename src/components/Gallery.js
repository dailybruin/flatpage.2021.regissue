import React, { useState,  useEffect } from 'react';
import styled from 'styled-components';
import ReactPageScroller from 'react-page-scroller';
import {mediaQueries} from "../shared/config";


const ImgContainer = styled.div`
height: 100vh;
width:100%;
background-position: 50% 50%;
background-size: cover;
background-image:url(${props=>props.url});
object-fit: cover;
position: relative;
${props => props.overlay && `
    background-blend-mode: multiply;
    background-color: #666666;
`}
`


const CaptionContainer = styled.div`
position:relative;
/* z-index: 999; */
/* border: 2px solid white; */
width: 800px;
height: 10vh;
top: 75vh;
left: 10vw;
${mediaQueries.widescreen} {
	top: 65vh;
}
${mediaQueries.mobile} {
	top: 80vh;
    width: 80%;
}
`
const Date = styled.div`
font-family: 'Bebas Neue', cursive;
color: white;
text-transform: uppercase;
font-size: 65px;
${mediaQueries.mobile} {
	font-size: 8vw;
}
`
const ReadMore = styled.div`
font-family: 'Karla', sans-serif;
font-weight: 800;
color: white;
font-size: 24px;
line-height: 1em;
width: 30vw;
/* margin-left: 20vw; */
text-transform: uppercase;
cursor: pointer;
display: ${props=>props.display};
/* ${props => props.opened && `
		display: none !important;
`} */
${mediaQueries.mobile} {
	font-size: 4vw;
}
`
const Text = styled.div`
font-family: 'Karla', sans-serif;
font-size: 16px;
color: white;
position:relative;
/* border: 1px solid white; */
width: 80vw;
display: ${props=>props.display};
cursor: pointer;
.Caption{
    font-style: normal;
}
.Credit{
    line-height: 3em;
    font-style: italic;
}
${mediaQueries.mobile} {
	font-size: 2vw;
    .Credit{
        line-height: 4em;
        font-style: italic;
    }
}
`
export default function Gallery(props){
    //console.log(props)
    const [ opened, setOpened ] = useState(false);
    const [ overlay, setOverlay ] = useState(false);

    function click(){
        setOverlay(!overlay);
        setOpened(!opened);
        //console.log(overlay)
    }

    return(

    <ImgContainer url={props.image} overlay={overlay} >
                    
                    <CaptionContainer>
                        <Date>
                        {props.date}
                        </Date>
                        <ReadMore opened={opened} onClick={click} display={opened ? "none":"block"}>
                        Read more
                        </ReadMore>
                        <Text opened={opened} onClick={click} display={opened ? "block":"none"}>
                            <div className="Caption">
                                {props.caption}
                            </div>
                            <div className="Credit">
                                {props.credit}
                            </div>
                        </Text>
                    </CaptionContainer>
                </ImgContainer>
    )

    

}
