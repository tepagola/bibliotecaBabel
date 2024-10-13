// src/models/Alphabet.ts

export class Alphabet {
    private characters: string[];
  
    constructor(characters: string) {
      this.characters = characters.split('');
    }
  
    getCharacter(index: number): string {
      if (index >= 0 && index < this.characters.length) {
        return this.characters[index];
      } else {
        throw new Error(`Índice fuera de rango: ${index}`);
      }
    }
  
    getLength(): number {
      return this.characters.length;
    }
  }
  