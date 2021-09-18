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
            alt: `Your results: Charles E. Young Research Library: 
            Hours: Monday through Thursday, 8 a.m. to 10 p.m.
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
            `,
            selected: false
        }, 
        {
            answerText: 'No coffee',
            nextQuestion: null,
            image: inQuietNoCoffee,
            alt: `Your results:
            Powell Library:
            Hours:
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

            Music Library:
            Hours:
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
            `,
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
            alt: `Your results: Upside Down
            10962 Le Conte Ave.
            Hours
            Tuesday through Thursday, 9 a.m. to 3 p.m.
            Free Wi-Fi

            Ministry of Coffee
            1010 Glendon Ave.
            Hours
            Monday through Sunday, 7 a.m. to 5 p.m.
            Free Wi-Fi
            `,
            selected: false
        }, 
        {
            answerText: 'The Hill',
            nextQuestion: null,
            image: inTalkHill,
            alt: `Your results:
            Sproul Landing Living Room
            24 Hour
            WEPA print station
            Nearby coffee/food
            Bruin Plate, Bruin Café, Cafe 1919
            Noise Level Options 
            Medium, Group work

            Any dining hall if you want to eat & study
            Can carry your laptop in but no backpacks allowed
            Hours vary by location
            `,
            selected: false
        }, 
        {
            answerText: 'Campus',
            nextQuestion: null,
            image: inTalkCampus,
            alt: `Your results: Kerckhoff Coffee House (Cafe)
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
            `,
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
            alt:`Your results: Bunche Tables
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
            `,
            selected: false
        }, 
        {
            answerText: 'No Outlets',
            nextQuestion: null,
            image: outNoOutlets,
            alt:`Your results: Physics and Astronomy Building Patio
            3rd Floor Physics and Astronomy Building
            Hours
            Monday to Friday 7 a.m. to 10 p.m.
            Nearby Printing Locations 
            Powell Library, Music Library
            Nearby coffee/food
            Ackerman Union

            Sunset Canyon Recreation Center
            The Hill
            Nearby Printing Locations
            The Study
            Nearby Coffee/Food
            The Study
            No outlets
            `,
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
            alt:`Your results: 
            Bomb Shelter
            Court of Sciences
            Nearby Printing Locations:
            Science and Engineering Library
            Has coffee and food options available

            Bruin Cafe
            Next to Sproul Hall
            Nearby Printing Locations: Sunset Village Learning Center
            `,
            selected: false
        },
    ]
};

export default indoorsOutdoorsQuestion;