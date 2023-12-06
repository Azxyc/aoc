
// Advent of Code 2023 Day 1 - Part 2 Solution (TypeScript)
//

import { readFileSync } from 'fs';

const input = readFileSync('../test.txt', 'utf-8').split('\n')

const convert = (word: string): string => {
	const mapping: { [key: string]: string } = {
		one: 'o1e', two: 't2o', three: 't3e', four: 'f4r',
		five: 'f5e', six: 's6x', seven: 's7n', eight: 'e8t', nine: 'n9e'
	};

	Object.keys(mapping).forEach(key => {
		word = word.replace(new RegExp(key, 'gi'), mapping[key]);
	});
	return word;
};

const sum: number = input.reduce((acc: number, item: string) => {
	const converted = convert(item);
	const numbers = converted.match(/\d/g)
	if (numbers) {
		return acc + (numbers.length === 1 ? Number(numbers[0] + numbers[0]) : Number(numbers[0] + numbers[numbers.length - 1]));
	}
	return acc;
}, 0);

console.log(sum);
