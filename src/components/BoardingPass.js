import styled from 'styled-components';
import React, {useState} from 'react'
import BoardingPassSVG from '../assets/BoardingPass.svg';
import Passport from '../assets/Passport.svg';
import { mediaQueries } from '../shared/config';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 8vw;
`

const Image = styled.img`
    width: 100%;
    ${mediaQueries.mobile}{
        width: 60%;
  }
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
            {!isMobile && <Container> <Image src={BoardingPassSVG}/> </Container>}
        </>
    )
}