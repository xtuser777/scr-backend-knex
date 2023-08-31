import { Router } from 'express';
import Ctrlr from '../controllers/LevelController';

// import userAuthenticated from '../middlewares/userAuthenticated';

const router = new Router();

router.get('/', new Ctrlr().index);
router.get('/:id', new Ctrlr().show);

export default router;
