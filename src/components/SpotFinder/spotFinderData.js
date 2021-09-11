import image from './sample.png';

const coffeeQuestion = {
    questionText: 'coffee?',
    answerOptions: [
        {
            answerText: 'no',
            nextQuestion: null,
            image: image
        }, 
        {
            answerText: 'yes',
            nextQuestion: null,
            image: image
        }
    ]
};
const locationQuestion = {
    questionText: 'location?',
    answerOptions: [
        {
            answerText: 'westwood',
            nextQuestion: null,
            image: image
        }, 
        {
            answerText: 'hill',
            nextQuestion: null,
            image: image
        }, 
        {
            answerText: 'campus',
            nextQuestion: null,
            image: image
        }
    ]
};
const outletsQuestion = {
    questionText: 'outlets?',
    answerOptions: [
        {
            answerText: 'yes',
            nextQuestion: null,
            image: image
        }, 
        {
            answerText: 'no',
            nextQuestion: null,
            image: image
        }
    ]
};
const noiseLevelQuestion = {
    questionText: 'noise level',
    answerOptions: [
        {
            answerText: 'quiet',
            nextQuestion: coffeeQuestion
        }, 
        {
            answerText: 'talking',
            nextQuestion: locationQuestion
        }
    ]
};
const indoorsOutdoorsQuestion = {
    questionText: 'inside or outside?',
    answerOptions: [
        {
            answerText: 'indoors',
            nextQuestion: noiseLevelQuestion
        }, 
        {
            answerText: 'outdoors',
            nextQuestion: outletsQuestion
        },
        {
            answerText: 'both',
            nextQuestion: null,
            image: image
        },
    ]
};

export default indoorsOutdoorsQuestion;