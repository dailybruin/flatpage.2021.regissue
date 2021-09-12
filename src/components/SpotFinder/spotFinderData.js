import image from './sample.png';

const coffeeQuestion = {
    questionText: 'Are you looking for a study space with nearby coffee options?',
    answerOptions: [
        {
            answerText: 'Coffee',
            nextQuestion: null,
            image: image,
            selected: false
        }, 
        {
            answerText: 'No coffee',
            nextQuestion: null,
            image: image,
            selected: false
        }
    ]
};
const locationQuestion = {
    questionText: 'Where are you looking for a study space?',
    answerOptions: [
        {
            answerText: 'Westwood',
            nextQuestion: null,
            image: image,
            selected: false
        }, 
        {
            answerText: 'The Hill',
            nextQuestion: null,
            image: image,
            selected: false
        }, 
        {
            answerText: 'Campus',
            nextQuestion: null,
            image: image,
            selected: false
        }
    ]
};
const outletsQuestion = {
    questionText: 'Do you need outlets in order to study?',
    answerOptions: [
        {
            answerText: 'Outlets',
            nextQuestion: null,
            image: image,
            selected: false
        }, 
        {
            answerText: 'No Outlets',
            nextQuestion: null,
            image: image,
            selected: false
        }
    ]
};
const noiseLevelQuestion = {
    questionText: 'What noise level are you looking for in a study space?',
    answerOptions: [
        {
            answerText: 'Quiet',
            nextQuestion: coffeeQuestion,
            selected: false
        }, 
        {
            answerText: 'Talking allowed',
            nextQuestion: locationQuestion,
            selected: false
        }
    ]
};
const indoorsOutdoorsQuestion = {
    questionText: 'Is your ideal study space indoors, outdoors, or a space with indoor and outdoor options?',
    answerOptions: [
        {
            answerText: 'Indoors',
            nextQuestion: noiseLevelQuestion,
            selected: false
        }, 
        {
            answerText: 'Outdoors',
            nextQuestion: outletsQuestion,
            selected: false
        },
        {
            answerText: 'Both',
            nextQuestion: null,
            image: image,
            selected: false
        },
    ]
};

export default indoorsOutdoorsQuestion;