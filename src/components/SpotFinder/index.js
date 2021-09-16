import React, { useState } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './finder.css';
import indoorsOutdoorsQuestion from './spotFinderData.js';
import allLocations from './graphics/all-locations.png';
import coverImage from './graphics/cover.png';

const allAltText = `Charles E. Young Research Library
North Campus
Hours
Monday through Thursday, 8 a.m. to 10 p.m.
Friday, 8 a.m. to 6 p.m.
Saturday, 10 a.m. to 6 p.m.
Sunday, 12 p.m. to 9 p.m.
Noise Level Options
Quiet, Group Study rooms, “Collaboration Pods” 
Printing Available in Library
Black and white printing
Copiers
Other Technology Resources 
Laptop lending
Projector lending
Nearby Coffee 
Normally has a cafe but is currently closed due to COVID-19.
Powell Library
Main Quad
Hours 
Monday through Thursday, 8 a.m. to 7 p.m.
Friday, 8 a.m. to 6 p.m.
Saturday and Sunday, 10 a.m. to 5 p.m.
Noise Level Options
Quiet areas
Group Study rooms
“Collaboration Pods”
Printing Available in Library
Color and Black & White printing
Copiers
Other Technology Resources
Laptop lending
Projector lending
Accessible computers
Science and Engineering Library, Boelter Hall
Boelter Hall 8270
Hours
Monday through Friday, 8 a.m. to 5 p.m.
Noise Level Options
Quiet space, Group Study rooms
Printing Available in Library
Black & White Printing
Copier
Coffee in SEAS Cafe (5800 Boelter Hall)
Music Library
Schoenberg Hall
Hours
Monday through Friday, 8 a.m. to 5 p.m.
Noise Level Options
Quiet space
Group Study rooms
Printing Available in Library
Black & White printing
Copiers
Other Technology Resources
Laptop lending
Accessible computers

Cafes:
Kerckhoff Coffee House (Cafe)
Second floor of Kerckhoff Hall
Hours
Monday through Thursday, 7 a.m. to 11 p.m.
Friday, 7 a.m. to 7 p.m.
Saturday, 8 a.m. to 6 p.m.
Sunday, 8 a.m. to 11 p.m. 
Nearby Printing Locations
Ackerman Union
WEPA printer in Kerckhoff 3rd Floor Study Lounge
Evelyn & Mo Ostin Music Cafe (Cafe)
First floor, Ostin Music Center
Hours
Monday to Thursday, 7 a.m. to 7 p.m.
Friday 7 a.m. to 5 p.m.
Nearby Printing Locations
Music Library
Anderson Cafe (Cafe)
Features Starbucks
Nearby Printing Locations
Rosenfeld Library
Outdoor:
Bomb Shelter
Court of Sciences
Nearby Printing Locations:
Science and Engineering Library
Has coffee and food options available
Physics and Astronomy Building Patio
3rd Floor Physics and Astronomy Building
Hours
Monday to Friday 7 a.m. to 10 p.m.
Nearby Printing Locations 
Powell Library, Music Library
Nearby coffee/food
Ackerman Union
Bunche Tables
In front of Bunche Hall
Nearby Printing Locations
YRL
Nearby coffee/food 
North Campus Student Center
Has outlets
Powel Tables
Between Powell and Humanities Building
Nearby Printing Locations 
Powell Library
Nearby coffee/food
Kerchkoff Coffee House
Has outlets
Sunset Canyon Recreation Center
The Hill
Nearby Printing Locations
The Study
Nearby Coffee/Food
The Study
No outlets


Hill:
Sproul Landing Living Room
24 Hour
WEPA print station
Nearby coffee/food
Bruin Plate, Bruin Café, Cafe 1919
Noise Level Options 
Medium, Group work
Bruin Cafe
Next to Sproul Hall
Nearby Printing Locations: Sunset Village Learning Center
Any dining hall if you want to eat & study
Can carry your laptop in but no backpacks allowed
Hours vary by location
Westwood:
Upside Down
10962 Le Conte Ave.
Hours
Tuesday through Thursday, 9 a.m. to 3 p.m.
Free Wi-Fi
Ministry of Coffee
1010 Glendon Ave.
Hours
Monday through Sunday, 7 a.m. to 5 p.m.
Free Wi-Fi
`

const SpotFinder = () => {
    const [questions, setQuestions] = useState([indoorsOutdoorsQuestion]);
    const [imageSource, setImageSource] = useState(coverImage);
    const [altText, setAltText]=useState("Cover Art: What UCLA study space is best for you?");
    const [isImageOpen, setIsImageOpen] = useState(false);

    const handleRestart = () => {
        setQuestions([indoorsOutdoorsQuestion]);
        setImageSource(coverImage);
        setAltText("Cover Art: What UCLA study space is best for you?");
        indoorsOutdoorsQuestion.answerOptions.map((choices)=>{
            choices.selected = false;
        })
    };
    const showAll = () => {
        setQuestions([indoorsOutdoorsQuestion]);
        setImageSource(allLocations);
        setAltText(allAltText)
        if (window.matchMedia("only screen and (max-width: 900px)").matches) setIsImageOpen(true);
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
            setAltText("Cover Art: What UCLA study space is best for you?");
            newQuestions.push(option.nextQuestion);
        } else {
            setImageSource(option.image);
            setAltText(option.alt);
            if (window.matchMedia("only screen and (max-width: 900px)").matches) setIsImageOpen(true);
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
                {imageSource ? <img className='result' src={imageSource} alt = {altText} onClick={() => setIsImageOpen(true)}></img> : null}
            </div>
            
        </div>
    );
};


export default SpotFinder;