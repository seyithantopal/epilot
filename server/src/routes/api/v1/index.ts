import express from 'express';
import { createACard, getCards, updateCards } from '../../../controllers/board';

const router = express.Router();

router.get('/cards', getCards);
router.put('/cards/:card_id', updateCards);
router.post('/cards/create/', createACard);

export default router;
