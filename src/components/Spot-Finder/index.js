import React from "react";

class MyMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        < div class = "Outer_box">
            <div class = "title_box">
                <p class = "title">What UCLA study spot is best for you?</p>
                <p class = "explainer">Are you looking for the perfect spot to study on or around campus? Answer the questions below to see which places match your preferences. Our recommendations include study spots on campus, on the hill, and in Westwood. Click the “See All” button at any time to look through all of our study spot picks.</p>
            </div>
            <div class = "question_box">
                <div class = "question">
                    <p class = "Question_Text">Is your ideal study space indoors, outdoors, or a space with indoor and outdoor options?</p>
                    <button class = "answer">Indoors</button>
                    <button class = "answer">Outdoors</button>
                    <button class = "answer">Both</button>
                </div>
                <div class = "question">
                {/* If indoors */}
                    <p class = "Question_Text">What noise level are you looking for in a study space?</p>
                    <button class = "answer">Quiet</button>
                    <button class = "answer">Talking allowed</button>
                </div>
                <div class = "question">
                {/* If quiet */}
                    <p class = "Question_Text">Are you looking for a study space with nearby coffee options?</p>
                    <button class = "answer">Sells coffee</button>
                    <button class = "answer">No coffee</button>
                </div>
                <div class = "question">
                {/* If talking allowed */}
                    <p class = "Question_Text">Where are you looking for a study space?</p>
                    <button class = "answer">Westwood</button>
                    <button class = "answer">The Hill</button>
                    <button class = "answer">Campus</button>
                </div>
                <div class = "question">
                {/*If outside */}
                    <p class = "Question_Text">Do you need outlets in order to study?</p>
                    <button class = "answer">Outlets</button>
                    <button class = "answer">No Outlets</button>
                </div> 
                <div class = "byline">
                    <p>Graphic by Alex Yoo, Graphics editor. Interactive by Laurel Woods, Data editor and Lindsey Parungo, assistant Data editor</p>
                </div>
            </div>
        </div>
        );
    }
};

export default MyMap;