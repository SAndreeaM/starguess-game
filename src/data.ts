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
    }
];

export default characters;
