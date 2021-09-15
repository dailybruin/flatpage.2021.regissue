import React, { useState } from "react";
import './finder.css';
import indoorsOutdoorsQuestion from './spotFinderData.js';
import allLocations from './graphics/all-locations.png';
import coverImage from './graphics/cover.png';

const SpotFinder = () => {
    const [questions, setQuestions] = useState([indoorsOutdoorsQuestion]);
    const [imageSource, setImageSource] = useState(coverImage);

    const handleRestart = () => {
        setQuestions([indoorsOutdoorsQuestion]);
        setImageSource(coverImage);
        indoorsOutdoorsQuestion.answerOptions.map((choices)=>{
            choices.selected = false;
        })
    };
    const showAll = () => {
        setQuestions([indoorsOutdoorsQuestion]);
        setImageSource(allLocations);
        indoorsOutdoorsQuestion.answerOptions.map((choices)=>{
            choices.selected = false;
        })
    };
    const handleAnswerClick = (question, option, index) => {
        const newQuestions = questions.slice(0, index+1);
        question.answerOptions.map((choices)=>{
            choices.selected = false;
        })
        option.selected = true;
        if (option.nextQuestion) {
            option.nextQuestion.answerOptions.map((choices)=>{
                choices.selected = false;
            })
            setImageSource(coverImage);
            newQuestions.push(option.nextQuestion);
        } else {
            setImageSource(option.image);
        }
        setQuestions([...newQuestions]);
        
    };

    return (
        <div className="outer-box">
            <div className='left-side'>
                <div className="title-box">
                    <p className="title">What UCLA study spot is best for you?</p>
                    <p className="explainer">Are you looking for the perfect spot to study on or around campus? Answer the questions below to see which places match your preferences. Our recommendations include study spots on campus, on the hill, and in Westwood. Click the “See All” button at any time to look through all of our study spot picks.</p>
                </div>
                <div className="question-box">
                    {questions.map((question, i) => {
                        return (
                            <div key={question.questionText} className="question">
                                <p className="question-text">{question.questionText}</p>
                                <div className='answer-options'>
                                    {question.answerOptions.map((option) => {
                                        return (
                                            <button 
                                                key={option.answerText} 
                                                className={`answer button answer-${question.answerOptions.length}${(option.selected)?'-color':''}`}
                                                onClick={() => handleAnswerClick(question, option, i) & console.log(option.selected)}
                                            > 
                                                {option.answerText}
                                            </button>)
                                    })}
                                </div>
                            </div>)
                    })}
                </div>
                <div className='control-buttons'>
                        <button className="restart button" onClick={()=>handleRestart()}>Start Over</button>
                        <button className="reveal button" onClick = {()=>showAll()}>Show All</button>
                    </div>
                <div className="bottom-box">
                    Graphic by Alex Yoo, Graphics editor. Interactive by Laurel Woods, Data editor and Lindsey Parungo, assistant Data editor.
                </div>
            </div>
            <div className='image-container'>
                {imageSource ? <img className='result' src={imageSource}></img> : null}
            </div>
            
        </div>
    );


    // return 
    //     (<div className="outer-box">
    //         <div className="title-box">
    //             <p className="title">What UCLA study spot is best for you?</p>
    //         </div>
    //         <div className="question-box">
    //             {(question === 0)?
    //             <div className="question">
    //                 <p className="explainer">Are you looking for the perfect spot to study on or around campus? Answer the questions below to see which places match your preferences. Our recommendations include study spots on campus, on the hill, and in Westwood. Click the “See All” button at any time to look through all of our study spot picks.</p>
    //                 <button className="begin button" onClick = {()=>handleBegin()}>Begin</button>
    //             </div>
    //             : null
    //             }

    //             {(question === 1)?
    //             <div className="question">
    //                 <p className="question-text">Is your ideal study space indoors, outdoors, or a space with indoor and outdoor options?</p>
    //                 <button className="answer button" onClick={()=>handleInOut('In')}>Indoors</button>
    //                 <button className="answer button" onClick={()=>handleInOut('Out')}>Outdoors</button>
    //                 <button className="answer button" onClick={()=>handleInOut('Both')}>Both</button>
    //             </div>
    //             : null
    //             }
                
                
    //             {((question === 2) && (inOut === 'In')) 
    //             ? <div className="question">
    //             {/* If indoors */}
    //                 <p className="question-text">What noise level are you looking for in a study space?</p>
    //                 <button className="answer button" onClick={()=>handleNoise('quiet')}>Quiet</button>
    //                 <button className="answer button" onClick={()=>handleNoise('loud')}>Talking allowed</button>
    //             </div>
    //             : null
    //             }

    //             {( question === 3 && inOut === 'In' && noise === 'quiet') 
    //             ? <div className="question">
    //             {/* If quiet */}
    //                 <p className="question-text">Are you looking for a study space with nearby coffee options?</p>
    //                 <button className="answer button" onClick={()=>handleCoffee('coffee')}>Sells coffee</button>
    //                 <button className="answer button" onClick={()=>handleCoffee('no coffee')}>No coffee</button>
    //             </div>
    //             :null
    //             }

    //             {( question === 3 && inOut === 'In' && noise === 'loud') 
    //             ? <div className="question">
    //             {/* If talking allowed */}
    //                 <p className="question-text">Where are you looking for a study space?</p>
    //                 <button className="answer button" onClick={()=>handleLocation('Westwood')}>Westwood</button>
    //                 <button className="answer button" onClick={()=>handleLocation('Hill')}>The Hill</button>
    //                 <button className="answer button" onClick={()=>handleLocation('Campus')}>Campus</button>
    //             </div>
    //             : null
    //             }

    //             {(question === 2 && inOut === 'Out') 
    //             ? <div className="question">
    //             {/*If outside */}
    //                 <p className="question-text">Do you need outlets in order to study?</p>
    //                 <button className="answer button" onClick={()=>handleOutlets('outlets')}>Outlets</button>
    //                 <button className="answer button" onClick={()=>handleOutlets('no outlets')}>No Outlets</button>
    //             </div> 
    //             : null
    //             }
    //             <div className = 'result-box'>
    //             {showResult()}
    //             </div>

    //             <div className="bottom-box">
    //                 <button className="restart button" onClick={()=>handleRestart()}>Start Over</button>
    //                 <button className="reveal button" onClick ={()=>showAll()}>Show All</button>
    //                 <p className="byline">Graphic by Alex Yoo, Graphics editor. Interactive by Laurel Woods, Data editor and Lindsey Parungo, assistant Data editor.</p>
    //             </div>
    //         </div>
    //     </div>
    // );
};


export default SpotFinder;