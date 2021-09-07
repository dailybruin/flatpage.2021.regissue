import React from 'react';
//import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

//Horizontal Images
import image_1 from './advice_slides/advicegradissuegfx-06.png';
import image_2 from './advice_slides/advicegradissuegfx-01.png';
import image_3 from './advice_slides/advicegradissuegfx-02.png';
import image_4 from './advice_slides/advicegradissuegfx-07.png';
import image_5 from './advice_slides/advicegradissuegfx-04.png';
import image_6 from './advice_slides/advicegradissuegfx-05.png';
import image_7 from './advice_slides/advicegradissuegfx-08.png';
import image_8 from './advice_slides/advicegradissuegfx-03.png';

//Vertical Images
import vert_1 from './advice_slides/advicegradissuegfx-15.png';
import vert_2 from './advice_slides/advicegradissuegfx-10.png';
import vert_3 from './advice_slides/advicegradissuegfx-12.png';
import vert_4 from './advice_slides/advicegradissuegfx-09.png';
import vert_5 from './advice_slides/advicegradissuegfx-14.png';
import vert_6 from './advice_slides/advicegradissuegfx-13.png';
import vert_7 from './advice_slides/advicegradissuegfx-16.png';
import vert_8 from './advice_slides/advicegradissuegfx-11.png';

const slidesDesktop = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8
];
const slidesMobile = [
    vert_1,
    vert_2,
    vert_3,
    vert_4,
    vert_5,
    vert_6,
    vert_7,
    vert_8
]

const properties = {
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    indicators: true,
    arrows: true,
    autoplay: false
}

class SeniorAdvice extends React.Component {

    constructor(props) {
        super(props);
        this.openLightbox = this.openLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.state = {
            photoIndex: 0,
            imageOpen: false,
        }
    };

    openLightbox() {
        this.setState({ imageOpen: true });
    }

    closeLightbox() {
        this.setState({ imageOpen: false });
    }

    render() {

        let slideImages;
        if (window.innerWidth < 800) {
            slideImages = slidesMobile;
        } else {
            slideImages = slidesDesktop;
        }

        if (this.state.imageOpen) {
            return (
                <Lightbox
                    mainSrc={slideImages[this.state.photoIndex]}
                    nextSrc={slideImages[(this.state.photoIndex + 1) % slideImages.length]}
                    prevSrc={slideImages[(this.state.photoIndex + slideImages.length - 1) % slideImages.length]}
                    onCloseRequest={this.closeLightbox}
                    onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (this.state.photoIndex + slideImages.length - 1) % slideImages.length,
                        })
                    }
                    onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (this.state.photoIndex + 1) % slideImages.length,
                        })
                    }
                />
            );
        }

        return (
            <div className='slideBox'>

                <Slide {...properties}>
                    <div className="each-slide">
                        <div className='image' style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div className='image' style={{ 'backgroundImage': `url(${slideImages[1]})` }}>

                        </div>
                    </div>
                    <div className="each-slide">
                        <div className='image' style={{ 'backgroundImage': `url(${slideImages[2]})` }}>

                        </div>
                    </div>
                    <div className="each-slide">
                        <div className='image' style={{ 'backgroundImage': `url(${slideImages[3]})` }}>

                        </div>
                    </div>
                    <div className="each-slide">
                        <div className='image' style={{ 'backgroundImage': `url(${slideImages[4]})` }}>

                        </div>
                    </div>
                    <div className="each-slide">
                        <div className='image' style={{ 'backgroundImage': `url(${slideImages[5]})` }}>

                        </div>
                    </div>
                    <div className="each-slide">
                        <div className='image' style={{ 'backgroundImage': `url(${slideImages[6]})` }}>

                        </div>
                    </div>
                    <div className="each-slide">
                        <div className='image' style={{ 'backgroundImage': `url(${slideImages[7]})` }}>

                        </div>
                    </div>
                </Slide >
                {(window.innerWidth > 800)
                    ? <button className='FullscreenButton' onClick={() => {
                        this.setState(this.openLightbox(this));
                    }}>Fullscreen</button>
                    : null}
                <p className='byLineAdvice'>Graphic reporting by Alex Yoo, Graphics editor. Graphic by Aris Luk, Daily Bruin staff and Rebekah Limb, assistant Graphics editor. Interactive by Lindsey Parungo, assistant Graphics Interactives editor.</p>
            </div>
        )
    }
}

export default SeniorAdvice;