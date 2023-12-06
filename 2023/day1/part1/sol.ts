// Advent of Code 2023 Day 1 - Part 1 Solution (TypeScript)
//

import { readFileSync } from 'fs';

const input = readFileSync('../test.txt', 'utf-8').split('\n')

const sum: number = input.reduce((acc, item) => {
	const numbers = item.match(/\d/g) ?? ["0"];
	return acc + (numbers.length === 1 ? Number(numbers[0] + numbers[0]) : Number(numbers[0] + numbers[numbers.length - 1]));
}, 0);

console.log(sum);

