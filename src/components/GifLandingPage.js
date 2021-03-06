
import React from "react";
import { css } from "@emotion/react";
import {mediaQueries} from "../shared/config";

export default class LandingPage extends React.Component {
    render() {
        return (
            <video
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                id="LandingPage"
                className={css`
                    position: fixed;
                    z-index: 1001;
                    width: 100vw;
                    height: 100vh;
                    top: 0;
                    left: 0;
                    object-position: center;
                    object-fit: cover;
                    animation-name: fade-out;
                    animation-delay: 10.2s;
                    animation-duration: 800ms;
                    animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
                    animation-fill-mode: forwards;
                    will-change: opacity;
                    :after {
                        content: "";
                        position: absolute;
                        width: 100vw;
                        height: 100vh;
                        top: 0;
                        left: 0;
                        opacity: 0;
                        
                        animation-name: fade-in;
                        animation-delay: 10s;
                        animation-duration: 800ms;  
                        animation-fill-mode: forwards;
                        will-change: opacity;
                    }
                `}>
            
                <source
                    src="src/assets/gif.mp4"
                    type="video/mp4"
                />
            </video>
        );
    };
}