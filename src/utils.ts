// Utility function to generate a random integer
export const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Utility function to generate a random number
export const getRandomNumber = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
};