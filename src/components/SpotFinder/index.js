import React from "react";
import './finder.css';
import image from './sample.png';

class SpotFinder extends React.Component {
    constructor(props) {
        super(props);
        this.handleBegin = this.handleBegin.bind(this);
        this.handleInOut = this.handleInOut.bind(this);
        this.handleNoise = this.handleNoise.bind(this);
        this.handleCoffee = this.handleCoffee.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handleOutlets = this.handleOutlets.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
        this.showResult = this.showResult.bind(this);
        this.state = {
            question: 0,
            in_out: null,
            noise: null,
            coffee: null,
            location: null,
            outlets: null
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
    }
    handleCoffee(props, Coffee){
        let nextQuestion = this.state.question + 1
        this.setState({
            coffee: Coffee,
            question: nextQuestion
        });
    }
    handleLocation(props, Location){
        let nextQuestion = this.state.question + 1
        this.setState({
            location: Location,
            question: nextQuestion
        });
    }
    handleOutlets(props, Outlets){
        let nextQuestion = this.state.question + 1
        this.setState({
            outlets: Outlets,
            question: nextQuestion
        });
    }
    handleRestart(props){
        this.setState({
            question: 0,
            in_out: null,
            noise: null,
            coffee: null,
            location: null,
            outlets: null
        })
    }

    showResult(props){
        console.log('in Result function')
        console.log(this.state.in_out)
            if (this.state.in_out === 'In' && this.state.noise === 'quiet' && this.state.coffee === 'coffee'){
                console.log('Result');
                return <img className = 'Result' src = {image}></img>
            }
            else if (this.state.in_out === 'In' && this.state.noise === 'quiet' && this.state.coffee === 'no coffee'){
                console.log('Result');
                return <div className = 'Result'>In, quiet, no coffee</div>;
            }
            else if (this.state.in_out === 'In' && this.state.noise === 'loud' && this.state.location === 'Westwood'){
                console.log('Result');
                return <div className = 'Result'>In, loud, Westwood</div>;
            }
            else if (this.state.in_out === 'In' && this.state.noise === 'loud' && this.state.location === 'Hill'){
                console.log('Result');
                return <div className = 'Result'>In, loud, hill</div>;
            }
            else if (this.state.in_out === 'In' && this.state.noise === 'loud' && this.state.location === 'Campus'){
                console.log('Result');
                return <div className = 'Result'>In, loud, campus</div>;
            }
            else if (this.state.in_out === 'Out' && this.state.outlets === 'outlets'){
                console.log('Result');
                return <div className = 'Result'>Out, Outlets</div>;
            }
            else if (this.state.in_out === 'Out' && this.state.outlets === 'no outlets'){
                console.log('Result');
                return <div className = 'Result'>Out, No Outlets</div>
            }
            else if (this.state.in_out === 'Both'){
                console.log('Result');
                return <div className = 'Result' >Both</div>;
            }
            else{
                console.log('Default');
            }
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
                {(this.state.in_out === 'In' && this.state.noise === 'quiet') 
                ? <div class = "question">
                {/* If quiet */}
                    <p class = "Question_Text">Are you looking for a study space with nearby coffee options?</p>
                    <button class = "answer" onClick={()=>this.handleCoffee(this, 'coffee')}>Sells coffee</button>
                    <button class = "answer" onClick={()=>this.handleCoffee(this, 'no coffee')}>No coffee</button>
                </div>
                :null
                }

                {( this.state.in_out === 'In' && this.state.noise === 'loud') 
                ? <div class = "question">
                {/* If talking allowed */}
                    <p class = "Question_Text">Where are you looking for a study space?</p>
                    <button class = "answer" onClick={()=>this.handleLocation(this, 'Westwood')}>Westwood</button>
                    <button class = "answer" onClick={()=>this.handleLocation(this, 'Hill')}>The Hill</button>
                    <button class = "answer" onClick={()=>this.handleLocation(this, 'Campus')}>Campus</button>
                </div>
                : null
                }

                {(this.state.in_out === 'Out') 
                ? <div class = "question">
                {/*If outside */}
                    <p class = "Question_Text">Do you need outlets in order to study?</p>
                    <button class = "answer" onClick={()=>this.handleOutlets(this, 'outlets')}>Outlets</button>
                    <button class = "answer" onClick={()=>this.handleOutlets(this, 'no outlets')}>No Outlets</button>
                </div> 
                : null
                }

                <div class = "bottom_box">
                    <button class = "restart" onClick={()=>this.handleRestart(this)}>Start Over</button>
                    <button class = "reveal">Show All</button>
                    <p class = "byline">Graphic by Alex Yoo, Graphics editor. Interactive by Laurel Woods, Data editor and Lindsey Parungo, assistant Data editor.</p>
                </div>
            </div>
            {this.showResult(this)}
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

                {( this.state.question === 3 && this.state.in_out === 'In' && this.state.noise === 'quiet') 
                ? <div class = "question">
                {/* If quiet */}
                    <p class = "Question_Text">Are you looking for a study space with nearby coffee options?</p>
                    <button class = "answer" onClick={()=>this.handleCoffee(this, 'coffee')}>Sells coffee</button>
                    <button class = "answer" onClick={()=>this.handleCoffee(this, 'no coffee')}>No coffee</button>
                </div>
                :null
                }

                {( this.state.question === 3 && this.state.in_out === 'In' && this.state.noise === 'loud') 
                ? <div class = "question">
                {/* If talking allowed */}
                    <p class = "Question_Text">Where are you looking for a study space?</p>
                    <button class = "answer" onClick={()=>this.handleLocation(this, 'Westwood')}>Westwood</button>
                    <button class = "answer" onClick={()=>this.handleLocation(this, 'Hill')}>The Hill</button>
                    <button class = "answer" onClick={()=>this.handleLocation(this, 'Campus')}>Campus</button>
                </div>
                : null
                }

                {(this.state.question === 2 && this.state.in_out === 'Out') 
                ? <div class = "question">
                {/*If outside */}
                    <p class = "Question_Text">Do you need outlets in order to study?</p>
                    <button class = "answer" onClick={()=>this.handleOutlets(this, 'outlets')}>Outlets</button>
                    <button class = "answer" onClick={()=>this.handleOutlets(this, 'no outlets')}>No Outlets</button>
                </div> 
                : null
                }
                <div className = 'ResultBox'>
                {this.showResult(this)}
                </div>

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