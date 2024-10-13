import { Request, Response } from 'express';
import { Alphabet } from '../models/Alphabet';
import { TextGenerator } from '../services/TextGenerator';

export class LibraryController {
	// Añade este método para manejar la página de inicio
	static getHome(req: Request, res: Response): void {
		res.render('pages/index');
	}
	
	static getPage(req: Request, res: Response): void {
		try {
			const hexagon = req.query.hexagon as string;
			const wall = parseInt(req.query.wall as string);
			const shelf = parseInt(req.query.shelf as string);
			const volume = parseInt(req.query.volume as string);
			const page = parseInt(req.query.page as string);

			// Validación del patrón del hexágono
			if (!/^[a-zA-Z0-9]+$/.test(hexagon)) {
				throw new Error('El hexágono solo puede contener letras y números.');
			}
			if (isNaN(wall) || wall < 1 || wall > 4) throw new Error('Pared debe ser entre 1 y 4.');
			if (isNaN(shelf) || shelf < 1 || shelf > 5) throw new Error('Estante debe ser entre 1 y 5.');
			if (isNaN(volume) || volume < 1 || volume > 32) throw new Error('Volumen debe ser entre 1 y 32.');
			if (isNaN(page) || page < 1 || page > 410) throw new Error('Página debe ser entre 1 y 410.');

			const location = {
				hexagon: hexagon,
				wall: wall,
				shelf: shelf,
				volume: volume,
				page: page,
			};

			const lineLength = parseInt(req.query.lineLength as string) || 80;
			const alphabetInput = req.query.alphabet as string || 'abcdefghijklmnopqrstuvwxyz,.';
			const alphabet = new Alphabet(alphabetInput);

			const generator = new TextGenerator(alphabet);
			const text = generator.generateText(location, lineLength);

			// Asegurar que la página esté dentro de los límites
			const maxPage = 410;
			const minPage = 1;
			const prevPage = location.page > minPage ? location.page - 1 : minPage;
			const nextPage = location.page < maxPage ? location.page + 1 : maxPage;

			const prevDisabled = location.page <= minPage;
			const nextDisabled = location.page >= maxPage;

			// Variables para deshabilitar botones
			const prevButtonClass = prevDisabled ? 'btn-outline-secondary disabled' : 'btn-outline-primary';
			const nextButtonClass = nextDisabled ? 'btn-outline-secondary disabled' : 'btn-outline-primary';

			res.render('pages/page', {
				location,
				text,
				alphabetInput,
				prevPage,
				nextPage,
				prevButtonClass,
				nextButtonClass,
			});
		} catch (error) {
			res.status(400).render('pages/error', {
				message: (error as Error).message,
			});
		}
	}
}