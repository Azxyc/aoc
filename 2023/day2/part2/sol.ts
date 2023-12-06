
// Advent of Code 2023 - Day 2 Part 2 Solution (TypeScript)
//
import { readFileSync } from 'fs';



const input = readFileSync('../test.txt', 'utf8').split('\n');

function calcMin(game: string): { red: number, green: number, blue: number } {
	const rounds = game.split(';').map(round => round.trim().split(', '));
	let min = { red: 0, green: 0, blue: 0 };

	rounds.forEach(round => {
		const counts = { red: 0, green: 0, blue: 0 };

		round.forEach(cube => {
			const [count, colour] = cube.split(' ');
			counts[colour as keyof typeof counts] += parseInt(count);
		});

		min.red = Math.max(min.red, counts.red);
		min.green = Math.max(min.green, counts.green);
		min.blue = Math.max(min.blue, counts.blue);
	});

	return min;
}

function powerSet(set: { red: number, green: number, blue: number }): number {
	return set.red * set.green * set.blue;
}

let sum = 0;
input.forEach(line => {
	if (line.startsWith('Game')) {
		const [_, data] = line.split(': ');
		const min = calcMin(data);
		sum += powerSet(min);
	}
});

console.log(sum);

