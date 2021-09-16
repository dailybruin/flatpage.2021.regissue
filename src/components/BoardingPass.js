import styled from 'styled-components';
import React, {useState} from 'react'
import BoardingPassSVG from '../assets/BoardingPass.svg';
import Passport from '../assets/Passport.svg';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 10px;
`

export default function BoardingPass(){
    const media = window.matchMedia('(max-width: 750px)');
    const [isMobile, setIsMobile] = useState(media.matches);
    console.log(isMobile);
    media.addEventListener('change', () => {
        if (media.matches !== isMobile) {
          setIsMobile(media.matches);
        }
    });
    return(
        <>
            {isMobile && <Container> <img src={Passport}/> </Container>}
            {!isMobile && <Container> <img src={BoardingPassSVG}/> </Container>}
        </>
    )
}