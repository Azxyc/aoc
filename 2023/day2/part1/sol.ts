// Advent of Code 2023 - Day 2 Part 1 Solution (TypeScript)
//
import { readFileSync } from 'fs';

const input = readFileSync('../test.txt', 'utf8').split('\n');

const available = { red: 12, green: 13, blue: 14 };

function isPossible(game: string): boolean {
	const rounds = game.split(';').map(round => round.trim().split(', '));

	for (const round of rounds) {
		const counts = { red: 0, green: 0, blue: 0 };

		round.forEach(cube => {
			const [count, colour] = cube.split(' ');
			counts[colour as keyof typeof counts] += parseInt(count);
		});

		if (counts.red > available.red ||
			counts.green > available.green ||
			counts.blue > available.blue) {
			return false;
		}
	}

	return true;
}

let sum = 0;
input.forEach(line => {
	if (line.startsWith('Game')) {
		const [idStr, data] = line.split(': ');
		const id = parseInt(idStr.split(' ')[1]);

		if (isPossible(data)) {
			sum += id;
		}
	}
});

console.log(sum);


