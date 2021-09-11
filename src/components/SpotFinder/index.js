import { getAllByAltText } from "@testing-library/dom";
import React, { useState } from "react";
import './finder.css';
import image from './sample.png';

const SpotFinder = () => {

    const [question, setQuestion] = useState(0);
    const [inOut, setInOut] = useState(null);
    const [noise, setNoise] = useState(null);
    const [coffee, setCoffee] = useState(null);
    const [location, setLocation] = useState(null);
    const [outlets, setOutlets] = useState(null);

    const handleBegin = () => {
        setQuestion(1);
    };
    const handleInOut = inOut => {
        setQuestion(question + 1);
        setInOut(inOut);
    };
    const handleNoise = noiseLevel => {
        setQuestion(question + 1);
        setNoise(noiseLevel);
    };
    const handleCoffee = coffee => {
        setQuestion(question + 1);
        setCoffee(coffee);
    };
    const handleLocation = location => {
        setQuestion(question + 1);
        setLocation(location);
    }
    const handleOutlets = outlets => {
        setQuestion(question + 1);
        setOutlets(outlets);
    }
    const handleRestart = () => {
        setQuestion(0);
        setInOut(null);
        setNoise(null);
        setInOut(null);
        setCoffee(null);
        setLocation(null);
        setOutlets(null);
    };

    const showAll = () => {
        setInOut('all');
        setQuestion(5);
    };

    const showResult = () => {
        console.log('in Result function');
        console.log(inOut);
            if (inOut === 'In' && noise === 'quiet' && coffee === 'coffee'){
                console.log('Result');
                return <img className='result' src = {image}></img>
            }
            else if (inOut === 'In' && noise === 'quiet' && coffee === 'no coffee'){
                console.log('Result');
                return <div className='result'>In, quiet, no coffee</div>;
            }
            else if (inOut === 'In' && noise === 'loud' && location === 'Westwood'){
                console.log('Result');
                return <div className='result'>In, loud, Westwood</div>;
            }
            else if (inOut === 'In' && noise === 'loud' && location === 'Hill'){
                console.log('Result');
                return <div className='result'>In, loud, hill</div>;
            }
            else if (inOut === 'In' && noise === 'loud' && location === 'Campus'){
                console.log('Result');
                return <div className='result'>In, loud, campus</div>;
            }
            else if (inOut === 'Out' && outlets === 'outlets'){
                console.log('Result');
                return <div className='result'>Out, Outlets</div>;
            }
            else if (inOut === 'Out' && outlets === 'no outlets'){
                console.log('Result');
                return <div className='result'>Out, No Outlets</div>
            }
            else if (inOut === 'Both'){
                console.log('Result');
                return <div className='result' >Both</div>;
            }
            else if (inOut === 'all'){
                return <div className='result'>Show all</div>
            }
            else{
                console.log('Default');
            }
    };

    return window.innerWidth > 700 ?
        <div className="outer-box">
            <div className="title-box">
                <p className="title">What UCLA study spot is best for you?</p>
                <p className="explainer">Are you looking for the perfect spot to study on or around campus? Answer the questions below to see which places match your preferences. Our recommendations include study spots on campus, on the hill, and in Westwood. Click the “See All” button at any time to look through all of our study spot picks.</p>
            </div>
            <div className="question-box">
                <div className="question">
                    <p className="question-text">Is your ideal study space indoors, outdoors, or a space with indoor and outdoor options?</p>
                    <button className="answer button" onClick={()=>handleInOut('In')}>Indoors</button>
                    <button className="answer button" onClick={()=>handleInOut('Out')}>Outdoors</button>
                    <button className="answer button" onClick={()=>handleInOut('Both')}>Both</button>
                </div>
                
                {inOut === 'In' ? 
                <div className="question">
                {/* If indoors */}
                    <p className="question-text">What noise level are you looking for in a study space?</p>
                    <button className="answer button" onClick={()=>handleNoise('quiet')}>Quiet</button>
                    <button className="answer button" onClick={()=>handleNoise('loud')}>Talking allowed</button>
                </div>
                : null
                }

                {(inOut === 'In' && noise === 'quiet') 
                ? <div className="question">
                {/* If quiet */}
                    <p className="question-text">Are you looking for a study space with nearby coffee options?</p>
                    <button className="answer button" onClick={()=>handleCoffee('coffee')}>Sells coffee</button>
                    <button className="answer button" onClick={()=>handleCoffee('no coffee')}>No coffee</button>
                </div>
                :null
                }

                {( inOut === 'In' && noise === 'loud') 
                ? <div className="question">
                {/* If talking allowed */}
                    <p className="question-text">Where are you looking for a study space?</p>
                    <button className="answer button" onClick={()=>handleLocation('Westwood')}>Westwood</button>
                    <button className="answer button" onClick={()=>handleLocation('Hill')}>The Hill</button>
                    <button className="answer button" onClick={()=>handleLocation('Campus')}>Campus</button>
                </div>
                : null
                }

                {(inOut === 'Out') 
                ? <div className="question">
                {/*If outside */}
                    <p className="question-text">Do you need outlets in order to study?</p>
                    <button className="answer button" onClick={()=>handleOutlets('outlets')}>Outlets</button>
                    <button className="answer button" onClick={()=>handleOutlets('no outlets')}>No Outlets</button>
                </div> 
                : null
                }
            </div>
            <div className='image-container'>
                {showResult()}
            </div>
            <div className="bottom-box">
                <button className="restart button" onClick={()=>handleRestart()}>Start Over</button>
                <button className="reveal button" onClick = {()=>showAll()}>Show All</button>
                <p className="byline">Graphic by Alex Yoo, Graphics editor. Interactive by Laurel Woods, Data editor and Lindsey Parungo, assistant Data editor.</p>
            </div>
        </div> : 
        (<div className="outer-box">
            <div className="title-box">
                <p className="title">What UCLA study spot is best for you?</p>
            </div>
            <div className="question-box">
                {(question === 0)?
                <div className="question">
                    <p className="explainer">Are you looking for the perfect spot to study on or around campus? Answer the questions below to see which places match your preferences. Our recommendations include study spots on campus, on the hill, and in Westwood. Click the “See All” button at any time to look through all of our study spot picks.</p>
                    <button className="begin button" onClick = {()=>handleBegin()}>Begin</button>
                </div>
                : null
                }

                {(question === 1)?
                <div className="question">
                    <p className="question-text">Is your ideal study space indoors, outdoors, or a space with indoor and outdoor options?</p>
                    <button className="answer button" onClick={()=>handleInOut('In')}>Indoors</button>
                    <button className="answer button" onClick={()=>handleInOut('Out')}>Outdoors</button>
                    <button className="answer button" onClick={()=>handleInOut('Both')}>Both</button>
                </div>
                : null
                }
                
                
                {((question === 2) && (inOut === 'In')) 
                ? <div className="question">
                {/* If indoors */}
                    <p className="question-text">What noise level are you looking for in a study space?</p>
                    <button className="answer button" onClick={()=>handleNoise('quiet')}>Quiet</button>
                    <button className="answer button" onClick={()=>handleNoise('loud')}>Talking allowed</button>
                </div>
                : null
                }

                {( question === 3 && inOut === 'In' && noise === 'quiet') 
                ? <div className="question">
                {/* If quiet */}
                    <p className="question-text">Are you looking for a study space with nearby coffee options?</p>
                    <button className="answer button" onClick={()=>handleCoffee('coffee')}>Sells coffee</button>
                    <button className="answer button" onClick={()=>handleCoffee('no coffee')}>No coffee</button>
                </div>
                :null
                }

                {( question === 3 && inOut === 'In' && noise === 'loud') 
                ? <div className="question">
                {/* If talking allowed */}
                    <p className="question-text">Where are you looking for a study space?</p>
                    <button className="answer button" onClick={()=>handleLocation('Westwood')}>Westwood</button>
                    <button className="answer button" onClick={()=>handleLocation('Hill')}>The Hill</button>
                    <button className="answer button" onClick={()=>handleLocation('Campus')}>Campus</button>
                </div>
                : null
                }

                {(question === 2 && inOut === 'Out') 
                ? <div className="question">
                {/*If outside */}
                    <p className="question-text">Do you need outlets in order to study?</p>
                    <button className="answer button" onClick={()=>handleOutlets('outlets')}>Outlets</button>
                    <button className="answer button" onClick={()=>handleOutlets('no outlets')}>No Outlets</button>
                </div> 
                : null
                }
                <div className = 'result-box'>
                {showResult()}
                </div>

                <div className="bottom-box">
                    <button className="restart button" onClick={()=>handleRestart()}>Start Over</button>
                    <button className="reveal button" onClick ={()=>showAll()}>Show All</button>
                    <p className="byline">Graphic by Alex Yoo, Graphics editor. Interactive by Laurel Woods, Data editor and Lindsey Parungo, assistant Data editor.</p>
                </div>
            </div>
        </div>
    );
};


export default SpotFinder;