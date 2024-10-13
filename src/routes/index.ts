import { Router } from 'express';
import { LibraryController } from '../controllers/LibraryController';

const router = Router();

router.get('/', LibraryController.getHome);
router.get('/page', LibraryController.getPage);

export default router;
