import styled from 'styled-components'
import FlightLogo from '../assets/FlightLogo.svg';
import { mediaQueries } from '../shared/config';

const FlightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${mediaQueries.mobile} {
      /* margin: 50px 10px; */
    }
`
const FlightImage = styled.img`
    height: 80px;
    ${mediaQueries.mobile} {
      height: 60px;
    }
`
const BlueContainer = styled.div`
    /* display: flex; */
    align-items: center;
    justify-content: center;
    margin: 80px 200px;
    min-height: 100px;
    border: 4px solid #006FC3;
    border-radius: 10px;
    ${mediaQueries.mobile} {
      border: none;
      margin: 40px;
    }
`
const BlackContainer = styled.div`
    margin: 5px 5px;
    padding: 20px 20px;
    border: 4px solid #000000;
    display: block;
    position: relative;
    border-radius: 10px;
    ${mediaQueries.mobile} {
      padding: 20px;
      border-radius: 0px;
    }
`

const Anchor = styled.a`
    font-weight:bold;
    color:#006FC3;
`

const TextBox = styled.div`
    font-family: American Typewriter, serif;
    text-align: center;
    font-size: 25px;
    ${mediaQueries.mobile} {
      font-size: 15px;
    }
`
export default function LikeWhatYouSeeBox(){
    return(
        <>
        <FlightContainer>
            <FlightImage src={FlightLogo}/>
        </FlightContainer>
        <BlueContainer>
            <BlackContainer>
                <TextBox>
                    Like what you see?
                </TextBox>
                <TextBox>
                    Apply for a Daily Bruin internship now at
                </TextBox>
                <Anchor href="https://apply.uclastudentmedia.com">
                <TextBox>
                    apply.uclastudentmedia.com
                </TextBox>
                </Anchor>
                
            </BlackContainer>
        </BlueContainer>
        </>
        

    )
        
}