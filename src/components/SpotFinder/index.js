import React from "react";
import './finder.css';

class SpotFinder extends React.Component {
    constructor(props) {
        super(props);
        this.handleBegin = this.handleBegin.bind(this);
        this.handleInOut = this.handleInOut.bind(this);
        this.handleNoise = this.handleNoise.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
        this.state = {
            question: 0,
            in_out: null,
            noise: null,
        }
    };

    handleBegin(props){
        this.setState({
            question:1,
        })
    }
    handleInOut(props, inOut){
        let nextQuestion = this.state.question + 1
        this.setState({
            in_out: inOut,
            question: nextQuestion
        });
    }
    handleNoise(props, noiseLevel){
        let nextQuestion = this.state.question + 1
        this.setState({
            noise: noiseLevel,
            question: nextQuestion
        });
        console.log(this.state.in_out, this.state.noise, this.state.q)
    }
    handleRestart(props){
        this.setState({
            question: 0,
            in_out: null,
            noise: null,
        })
    }

    render() {
        if (window.innerWidth>700) {
            return (
        < div class = "Outer_box">
            <div class = "title_box">
                <p class = "title">What UCLA study spot is best for you?</p>
                <p class = "explainer">Are you looking for the perfect spot to study on or around campus? Answer the questions below to see which places match your preferences. Our recommendations include study spots on campus, on the hill, and in Westwood. Click the “See All” button at any time to look through all of our study spot picks.</p>
            </div>
            <div class = "question_box">
                <div class = "question">
                    <p class = "Question_Text">Is your ideal study space indoors, outdoors, or a space with indoor and outdoor options?</p>
                    <button class = "answer" onClick={()=>this.handleInOut(this, 'In')}>Indoors</button>
                    <button class = "answer" onClick={()=>this.handleInOut(this, 'Out')}>Outdoors</button>
                    <button class = "answer" onClick={()=>this.handleInOut(this, 'Both')}>Both</button>
                </div>
                
                {(this.state.in_out === 'In') 
                ? <div class = "question">
                {/* If indoors */}
                    <p class = "Question_Text">What noise level are you looking for in a study space?</p>
                    <button class = "answer" onClick={()=>this.handleNoise(this, 'quiet')}>Quiet</button>
                    <button class = "answer" onClick={()=>this.handleNoise(this, 'loud')}>Talking allowed</button>
                </div>
                : null
            }
                {(this.state.noise === 'quiet') 
                ? <div class = "question">
                {/* If quiet */}
                    <p class = "Question_Text">Are you looking for a study space with nearby coffee options?</p>
                    <button class = "answer">Sells coffee</button>
                    <button class = "answer">No coffee</button>
                </div>
                :null
                }

                {(this.state.noise === 'loud') 
                ? <div class = "question">
                {/* If talking allowed */}
                    <p class = "Question_Text">Where are you looking for a study space?</p>
                    <button class = "answer">Westwood</button>
                    <button class = "answer">The Hill</button>
                    <button class = "answer">Campus</button>
                </div>
                : null
                }

                {(this.state.in_out === 'Out') 
                ? <div class = "question">
                {/*If outside */}
                    <p class = "Question_Text">Do you need outlets in order to study?</p>
                    <button class = "answer">Outlets</button>
                    <button class = "answer">No Outlets</button>
                </div> 
                : null
                }

                <div class = "bottom_box">
                    <button class = "restart" onClick={()=>this.handleRestart(this)}>Start Over</button>
                    <button class = "reveal">Show All</button>
                    <p class = "byline">Graphic by Alex Yoo, Graphics editor. Interactive by Laurel Woods, Data editor and Lindsey Parungo, assistant Data editor.</p>
                </div>
            </div>
        </div>
        );
    }
    //MOBILE SET UP
    else{
        return(
            < div class = "Outer_box">
            <div class = "title_box">
                <p class = "title">What UCLA study spot is best for you?</p>
            </div>
            <div class = "question_box">
                {(this.state.question === 0)?
                <div class = "question">
                    <p class = "explainer">Are you looking for the perfect spot to study on or around campus? Answer the questions below to see which places match your preferences. Our recommendations include study spots on campus, on the hill, and in Westwood. Click the “See All” button at any time to look through all of our study spot picks.</p>
                    <button class = "begin" onClick = {()=>this.handleBegin(this)}>Begin</button>
                </div>
                : null
                }

                {(this.state.question === 1)?
                <div class = "question">
                    <p class = "Question_Text">Is your ideal study space indoors, outdoors, or a space with indoor and outdoor options?</p>
                    <button class = "answer" onClick={()=>this.handleInOut(this, 'In')}>Indoors</button>
                    <button class = "answer" onClick={()=>this.handleInOut(this, 'Out')}>Outdoors</button>
                    <button class = "answer" onClick={()=>this.handleInOut(this, 'Both')}>Both</button>
                </div>
                : null
                }
                
                
                {((this.state.question === 2) && (this.state.in_out === 'In')) 
                ? <div class = "question">
                {/* If indoors */}
                    <p class = "Question_Text">What noise level are you looking for in a study space?</p>
                    <button class = "answer" onClick={()=>this.handleNoise(this, 'quiet')}>Quiet</button>
                    <button class = "answer" onClick={()=>this.handleNoise(this, 'loud')}>Talking allowed</button>
                </div>
                : null
            }
                {(this.state.question === 3 && this.state.noise === 'quiet') 
                ? <div class = "question">
                {/* If quiet */}
                    <p class = "Question_Text">Are you looking for a study space with nearby coffee options?</p>
                    <button class = "answer">Sells coffee</button>
                    <button class = "answer">No coffee</button>
                </div>
                :null
                }

                {(this.state.question === 3 && this.state.noise === 'loud') 
                ? <div class = "question">
                {/* If talking allowed */}
                    <p class = "Question_Text">Where are you looking for a study space?</p>
                    <button class = "answer">Westwood</button>
                    <button class = "answer">The Hill</button>
                    <button class = "answer">Campus</button>
                </div>
                : null
                }

                {(this.state.question === 2 && this.state.in_out === 'Out') 
                ? <div class = "question">
                {/*If outside */}
                    <p class = "Question_Text">Do you need outlets in order to study?</p>
                    <button class = "answer">Outlets</button>
                    <button class = "answer">No Outlets</button>
                </div> 
                : null
                }

                <div class = "bottom_box">
                <button class = "restart" onClick={()=>this.handleRestart(this)}>Start Over</button>
                    <button class = "reveal">Show All</button>
                    <p class = "byline">Graphic by Alex Yoo, Graphics editor. Interactive by Laurel Woods, Data editor and Lindsey Parungo, assistant Data editor.</p>
                </div>
            </div>
        </div>
            )
    }
}
};

export default SpotFinder;