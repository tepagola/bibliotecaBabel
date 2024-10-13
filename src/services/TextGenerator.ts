import { Alphabet } from '../models/Alphabet';
import { createHash } from 'crypto';
import { Location } from '../models/Location';

export class TextGenerator {
	private alphabet: Alphabet;

	constructor(alphabet: Alphabet) {
		this.alphabet = alphabet;
	}

	generateText(location: Location, lineLength: number = 80): string {
		const length = 3200; // Puedes ajustar la longitud de la página
		const seed = this.generateSeedFromLocation(location);
		const rng = this.createPRNG(seed);

		let text = '';
		const base = this.alphabet.getLength();

		for (let i = 0; i < length; i++) {
			const index = Math.floor(rng() * base);
			text += this.alphabet.getCharacter(index);

			if ((i + 1) % lineLength === 0) {
				text += '\n';
			}
		}

		return text;
	}

	private generateSeedFromLocation(location: Location): string {
		// Combina los elementos de la ubicación en una cadena
		const locationString = `${location.hexagon}-${location.wall}-${location.shelf}-${location.volume}-${location.page}`;
		// Crea un hash de la cadena para usar como semilla
		return createHash('sha256').update(locationString).digest('hex');
	}

	private createPRNG(seed: string): () => number {
		// Utilizamos una función hash para generar una semilla numérica
		let h = BigInt('0x' + seed.substring(0, 16));
		return () => {
			// Linear Congruential Generator (LCG)
			h = (h * 6364136223846793005n + 1n) % 18446744073709551616n;
			return Number(h % 1000000n) / 1000000;
		};
	}
}