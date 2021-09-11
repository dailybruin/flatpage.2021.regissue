import image from './sample.png';

const coffeeQuestion = {
    questionText: 'Are you looking for a study space with nearby coffee options?',
    answerOptions: [
        {
            answerText: 'Coffee',
            nextQuestion: null,
            image: image
        }, 
        {
            answerText: 'No coffee',
            nextQuestion: null,
            image: image
        }
    ]
};
const locationQuestion = {
    questionText: 'Where are you looking for a study space?',
    answerOptions: [
        {
            answerText: 'Westwood',
            nextQuestion: null,
            image: image
        }, 
        {
            answerText: 'The Hill',
            nextQuestion: null,
            image: image
        }, 
        {
            answerText: 'Campus',
            nextQuestion: null,
            image: image
        }
    ]
};
const outletsQuestion = {
    questionText: 'Do you need outlets in order to study?',
    answerOptions: [
        {
            answerText: 'Outlets',
            nextQuestion: null,
            image: image
        }, 
        {
            answerText: 'No Outlets',
            nextQuestion: null,
            image: image
        }
    ]
};
const noiseLevelQuestion = {
    questionText: 'What noise level are you looking for in a study space?',
    answerOptions: [
        {
            answerText: 'Quiet',
            nextQuestion: coffeeQuestion
        }, 
        {
            answerText: 'Talking allowed',
            nextQuestion: locationQuestion
        }
    ]
};
const indoorsOutdoorsQuestion = {
    questionText: 'Is your ideal study space indoors, outdoors, or a space with indoor and outdoor options?',
    answerOptions: [
        {
            answerText: 'Indoors',
            nextQuestion: noiseLevelQuestion
        }, 
        {
            answerText: 'Outdoors',
            nextQuestion: outletsQuestion
        },
        {
            answerText: 'Both',
            nextQuestion: null,
            image: image
        },
    ]
};

export default indoorsOutdoorsQuestion;