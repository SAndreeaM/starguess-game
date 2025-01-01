// Utility function to generate a random integer
export const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Utility function to generate a random number
export const getRandomNumber = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
};

// Utility function to get mouse position
export const getMousePosition = (event: MouseEvent): { mouseX: number, mouseY: number } => {
    return { mouseX: event.clientX, mouseY: event.clientY };
};