import express from 'express';
import { getCards, updateCards } from '../../../controllers/board';

const router = express.Router();

router.get('/cards', getCards);
router.put('/cards/:card_id', updateCards);

export default router;
