import both from './graphics/both.png';
import inCoffeeQuiet from './graphics/in-quiet-coffee.png';
import inQuietNoCoffee from './graphics/in-quiet-no-coffee.png';
import inTalkCampus from './graphics/in-talk-campus.png';
import inTalkHill from './graphics/in-talk-hill.png';
import inTalkWW from './graphics/in-talk-ww.png';
import outNoOutlets from './graphics/out-no-outlets.png';
import outOutlets from './graphics/out-outlets.png';


const coffeeQuestion = {
    questionText: 'Are you looking for a study space with nearby coffee options?',
    answerOptions: [
        {
            answerText: 'Coffee',
            nextQuestion: null,
            image: inCoffeeQuiet,
            selected: false
        }, 
        {
            answerText: 'No coffee',
            nextQuestion: null,
            image: inQuietNoCoffee,
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
            image: inTalkWW,
            selected: false
        }, 
        {
            answerText: 'The Hill',
            nextQuestion: null,
            image: inTalkHill,
            selected: false
        }, 
        {
            answerText: 'Campus',
            nextQuestion: null,
            image: inTalkCampus,
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
            image: outOutlets,
            selected: false
        }, 
        {
            answerText: 'No Outlets',
            nextQuestion: null,
            image: outNoOutlets,
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
            image: both,
            selected: false
        },
    ]
};

export default indoorsOutdoorsQuestion;