interface Character {
    id: number;
    name: string;
    image: string;
    birthday: 1 | 2 | 3 | 4 | null;
    gender: boolean | null;
    marriageable: boolean;
    lovedGifts: number[];
    hatedGifts: number[];
    quotes: string[];
}

const characters: Character[] = [
    {
        id: 1,
        name: "Alex",
        image: "https://example.com/images/alex.png",
        birthday: 1,
        gender: true,
        marriageable: true,
        lovedGifts: [101, 102, 103],
        hatedGifts: [201, 202],
        quotes: ["Hey there!", "Nice to see you!"]
    },
    {
        id: 2,
        name: "Haley",
        image: "https://example.com/images/haley.png",
        birthday: 2,
        gender: false,
        marriageable: true,
        lovedGifts: [104, 105],
        hatedGifts: [203, 204],
        quotes: ["Oh, hi!", "What do you want?"]
    },
    {
        id: 3,
        name: "Sam",
        image: "https://example.com/images/sam.png",
        birthday: 3,
        gender: true,
        marriageable: true,
        lovedGifts: [106, 107, 108],
        hatedGifts: [205, 206],
        quotes: ["Hey!", "What's up?"]
    },
    {
        id: 4,
        name: "Leah",
        image: "https://example.com/images/leah.png",
        birthday: 4,
        gender: false,
        marriageable: true,
        lovedGifts: [109, 110],
        hatedGifts: [207, 208],
        quotes: ["Hello!", "Nice to meet you!"]
    },
    {
        id: 5,
        name: "Elliott",
        image: "https://example.com/images/elliott.png",
        birthday: null,
        gender: true,
        marriageable: true,
        lovedGifts: [111, 112],
        hatedGifts: [209, 210],
        quotes: ["Greetings!", "How are you?"]
    },
    {
        id: 6,
        name: "Abigail",
        image: "https://example.com/images/abigail.png",
        birthday: 1,
        gender: false,
        marriageable: true,
        lovedGifts: [113, 114],
        hatedGifts: [211, 212],
        quotes: ["Oh, hi!", "How's it going?"]
    },
    {
        id: 7,
        name: "Maru",
        image: "https://example.com/images/maru.png",
        birthday: 2,
        gender: false,
        marriageable: true,
        lovedGifts: [115, 116],
        hatedGifts: [213, 214],
        quotes: ["Hello!", "Nice to see you!"]
    },
    {
        id: 8,
        name: "Penny",
        image: "https://example.com/images/penny.png",
        birthday: 3,
        gender: false,
        marriageable: true,
        lovedGifts: [117, 118],
        hatedGifts: [215, 216],
        quotes: ["Hi there!", "Good to see you!"]
    },
    {
        id: 9,
        name: "Sebastian",
        image: "https://example.com/images/sebastian.png",
        birthday: 4,
        gender: true,
        marriageable: true,
        lovedGifts: [119, 120],
        hatedGifts: [217, 218],
        quotes: ["Hey.", "What's up?"]
    },
    {
        id: 10,
        name: "Harvey",
        image: "https://example.com/images/harvey.png",
        birthday: null,
        gender: true,
        marriageable: true,
        lovedGifts: [121, 122],
        hatedGifts: [219, 220],
        quotes: ["Hello!", "How are you?"]
    }
];

export default characters;
