import pauleyImg from '../components/Map/images/web.gradissue.online.pauley.DR.jpg';
import bplateImg from '../components/Map/images/bruinplate.jpeg';
import bruinBearImg from '../components/Map/images/bruinBear.jpeg';
import buncheImg from '../components/Map/images/Bunche.ALK.jpg'
import fountainImg from '../components/Map/images/fountain.jpeg';
import janssImg from '../components/Map/images/janss.jpeg';
import royceImg from '../components/Map/images/royce.jpeg';
import powellImg from '../components/Map/images/powell.file_.jpg';
import roccosImg from '../components/Map/images/roccos.KM.jpg';
import fatSalsImg from '../components/Map/images/fatsals.file.jpg';

export const config = {
    locations: [
        {
            name: "Instructions",
            lat: 0,
            long: 0,
            coordinates: [],
            questionText: "Test your knowledge of traditions, fun facts and history with our Campus Trivia Map. Click on the correct location on the map for each clue and revisit some Bruin spots on campus, on the Hill and in Westwood. Hint: The correct buildings aren't labeled!",
        },
        {
            name: "Royce Hall",
            lat: 34.0727,
            long: -118.4422,
            coordinates: [
                [34.073310833682235, -118.44282845617094],
                    [34.07229327471723, -118.44282845617094],
                    [34.072302161747984, -118.44135324121275],
                    [34.073313055413394, -118.44137738109389]
            ],
            questionText: "This building was one of the four original buildings on campus. It has 52 architectural asymmetries, one for every Sunday in the year.",
            image: royceImg,
            byLine: '(Katelyn Dang/Illustrations director)',
        },
        {
            name: "Pauley Pavilion",
            lat: 34.0703,
            long: -118.4468,
            coordinates: [
                [34.0709567, -118.4476847],
                [34.0698503, -118.4476794],
                [34.0698458, -118.445935],
                [34.070939, -118.4459413],
                [34.0709567, -118.4476847,]
            ],
            questionText: "In addition to sports games, this building hosts Spring Sing, Dance Marathon and the Bruin Bash concert.",
            image: pauleyImg,
            byLine: '(David Rimer/Assistant Photo editor)',
        },
        {
            name: "Bruin Bear statue",
            lat: 34.0707,
            long: -118.44488973695871,
            coordinates: [
                [34.07092504377345, -118.44504121890235],
                    [34.070451800395155, -118.4450331722753],
                    [34.07044957858906, -118.44445381512809],
                    [34.070931709154294, -118.4445047770993]
            ],
            questionText: "Touching the back paw of this landmark is said to bring good luck during finals week.",
            image: bruinBearImg,
            byLine: '(Katelyn Dang/Illustrations director)',
        },
        {
            name: "Fat Sal's Deli",
            lat: 34.0622,
            long: -118.44797,
            coordinates: [
                [34.06235137329621, -118.44834978186138],
                    [34.06189363624525, -118.44807083212383],
                    [34.06208473065444, -118.4476148565913],
                    [34.062515802507015, -118.44787771307476]
            ],
            questionText: "This is the original location of a sandwich shop featured on “Diners, Drive-Ins and Dives.” It is a popular stop for students looking for a late-night meal.",
            image: fatSalsImg,
            byLine: '(Daily Bruin file photo)',
        },
        {
            name: "Powell Library",
            lat: 34.0716,
            long: -118.4422,
            coordinates: [
                [34.071045378821445, -118.44283599365406],
                    [34.07105426598311, -118.44149488914661],
                    [34.072076283357916, -118.44152707565479],
                    [34.07208517041141, -118.44281990039997]
            ],
            questionText: "\"Fahrenheit 451\" by Ray Bradbury was written in the basement of this campus building.",
            image: powellImg,
            byLine: '(Daily Bruin file photo)',
        },
        {
            name: "Bruin Plate",
            lat: 34.0719,
            long: -118.4498,
            coordinates: [
                [34.07265973173146, -118.45090491913886],
                    [34.07146886632714, -118.45087273263069],
                    [34.071504414790546, -118.44941361092658],
                    [34.07265528823498, -118.44941897534461]],
            questionText: "This residential restaurant focused on “mindful eating” has its own cookbook.",
            image: bplateImg,
            byLine: '(Katelyn Dang/Illustrations director)',
        },
        {
            name: "Rocco's Tavern",
            lat: 34.0619,
            long: -118.4476,
            coordinates: [
                [34.06191856877994, -118.44806698182784],
                    [34.06149193797172, -118.44765928605757],
                    [34.061887460356054, -118.44704774240218],
                    [34.062296313015345, -118.44743934491835]
            ],
            questionText: "This iconic Westwood Village bar opened in 2016. It replaced O'Hara’s, another bar popular among students looking to go out.",
            image: roccosImg,
            byLine: '(Kanishka Mehra/Daily Bruin senior staff)',
        },
        {
            name: "Janss Steps*",
            lat: 34.0721,
            long: -118.4432,
            coordinates: [
                [34.07265764221426, -118.44370060281196],
                [34.0716223012017, -118.44370060281196],
                [34.07162230120173, -118.4424828799192],
                [34.07266208571067, -118.44249360875526]
            ],
            questionText: "In 1965, Martin Luther King Jr. gave a speech at the base of this campus landmark. The landmark has 87 steps.",
            image: janssImg,
            byLine: '(Katelyn Dang/Illustrations director)',
        },
        {
            name: "Bunche Hall",
            lat: 34.0741,
            long: -118.4402,
            coordinates: [
                [34.07470009020616, -118.44123030921337],
                    [34.07374031266519, -118.4411820294511],
                    [34.07376697329927, -118.43946005126354],
                    [34.07465565630082, -118.43954588195201]
            ],
            questionText: "Legend says this building had to be rotated because the glare from its windows was causing accidents on the 405 Freeway. ",
            image: buncheImg,
            byLine: '(Ashley Kenney/Photo editor)',
        },
        {
            name: "Inverted Fountain",
            lat: 34.07014,
            long: -118.44075,
            coordinates: [
                [34.07035473235484, -118.44103821225704],
                    [34.070351399641744, -118.44040521092953],
                    [34.06992147856044, -118.44038911767544],
                    [34.06991481310018, -118.44101675458492]
            ],
            questionText: "After being “Bruintized” at this landmark, it is bad luck for students to touch the water here before their last-ever final.",
            image: fountainImg,
            byLine: '(Katelyn Dang/Illustrations director)',
        },

    ]
};