/**
 * 乱序数组
 * @param {*} input
 * @return {*} 
 */
export function shuffle(input: any []) {
    for (let i = input.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

