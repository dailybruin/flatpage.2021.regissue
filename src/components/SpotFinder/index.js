import React, { useState } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './finder.css';
import indoorsOutdoorsQuestion from './spotFinderData.js';
import allLocations from './graphics/all-locations.png';
import coverImage from './graphics/cover.png';

const SpotFinder = () => {
    const [questions, setQuestions] = useState([indoorsOutdoorsQuestion]);
    const [imageSource, setImageSource] = useState(coverImage);
    const [isImageOpen, setIsImageOpen] = useState(false);

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
        if (window.matchMedia("only screen and (max-width: 700px)").matches) setIsImageOpen(true);
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
            if (window.matchMedia("only screen and (max-width: 700px)").matches) setIsImageOpen(true);
        }
        setQuestions([...newQuestions]);
        
    };

    return (
        <div className="outer-box">
            {isImageOpen &&
                <Lightbox
                    mainSrc={imageSource}
                    onCloseRequest={() => {setIsImageOpen(false)}}
                />}
            <div className='left-side'>
                <div className="title-box">
                    <p className="title">What UCLA study spot is best for you?</p>
                    <p className="explainer">Are you looking for the perfect spot to study on or around campus? Answer the questions below to see which places match your preferences. Our recommendations include study spots on campus, on the Hill and in Westwood. Click the “Show All” button at any time to look through all of our study spot picks.</p>
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
                                                onClick={() => handleAnswerClick(question, option, i)}
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
                {imageSource ? <img className='result' src={imageSource} onClick={() => setIsImageOpen(true)}></img> : null}
            </div>
            
        </div>
    );
};


export default SpotFinder;