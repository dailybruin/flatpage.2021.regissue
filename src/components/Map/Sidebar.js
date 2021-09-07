import React from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { config } from "../../config";

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.displayPostcard = this.displayPostcard.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            imageOpen: false,
        }
    };

    handleClose(props) {
        let newArray = this.props.attemptsMade;
        newArray[this.props.currentQuestion] = false;
        this.props.handleCloseCallback(newArray);
    }

    handleClick(props, change) {
        let nextQuestion = this.props.currentQuestion + change;
        this.props.questionChangeCallback(nextQuestion);
    }

    openLightbox() {
        this.setState({ imageOpen: true });
    }

    closeLightbox() {
        this.setState({ imageOpen: false });
    }


    displayPostcard(props) {
        if (!this.props.attemptsMade[this.props.currentQuestion]) {
            return <div className='hiddenDiv'></div>
        }
        else if (this.props.correctAnswers[this.props.currentQuestion]) {
            let start = Date.now();
            return (<div className='answer_box'>
                <p className='answerText'>{"Correct! " + config.locations[this.props.currentQuestion].name + " is the right location!"}</p>
                <p className='byLine'>click me ↓</p>
                <img className='Postcard' src={config.locations[this.props.currentQuestion].image} alt="test"
                    onClick={() => { 
                        if (Date.now() - start > 100) {
                            this.setState(this.openLightbox(this));
                        }
                     }}></img>
                <p className='byLine'>{config.locations[this.props.currentQuestion].byLine}</p>
                {(config.locations[this.props.currentQuestion].name === "Janss Steps*") &&
                    <div className='JanssNote'>
                        *Student activists are calling to rename this location because of the Janss brothers’ history of discrimination and use of racial covenants to keep people of color out of Westwood. The proposed name, “Kuruvungna Steps,” is meant to honor the Indigenous people who originally inhabited Los Angeles and the land UCLA sits on.
                    </div>
                }
            </div>)
        }
        else {
            return (<div className='wrong_answer_box'>
                {(window.innerWidth < 800)
                    ? <button className='Close'
                        onClick={() => { this.handleClose(this) }}>
                        X</button>
                    : null}
                <p className="wrongAnswerText"> Sorry that is incorrect. Please try again! </p>
            </div>)
        }
    }

    render() {
        if (this.state.imageOpen) {
            return (
                <Lightbox
                    mainSrc={config.locations[this.props.currentQuestion].image}
                    onCloseRequest={this.closeLightbox}
                />
            );
        }
        if (this.props.currentQuestion === 0) {
            return (<div className="rectangle">
                <p className='QuestionNumber'> INSTRUCTIONS </p>
                <div className='InstructionBox'>
                    <p id='question'> {config.locations[this.props.currentQuestion].questionText}</p>
                </div>
                <button className='StartButton' onClick={() => {
                    let change = 1;
                    this.handleClick(this, change);
                }}
                >
                    <p id='button-text'>Start</p>
                </button>
            </div>
            )
        }
        else {
            return (<div className="rectangle">
                <p className='QuestionNumber'> QUESTION {this.props.currentQuestion} of 10</p>
                <div className='QuestionBox'>
                    <p id='question'> {config.locations[this.props.currentQuestion].questionText}</p>
                </div>
                {this.displayPostcard(this)}
                <button className='PrevButton' onClick={() => {
                    let change = -1;
                    this.handleClick(this, change);
                }}
                >
                    <p id='button-text'>Previous</p>
                </button>
                {(this.props.currentQuestion < config.locations.length - 1) &&
                    <button className='NextButton' onClick={() => {
                        let change = 1;
                        this.handleClick(this, change);
                    }}
                    >
                        <p id='button-text'>Next</p>
                    </button>
                }
            </div>
            )
        }
    }
}

export default SideBar;