import express from 'express';
import { createACard, deleteACard, getCards, updateCards } from '../../../controllers/board';

const router = express.Router();

router.get('/cards', getCards);
router.put('/cards/:card_id', updateCards);
router.post('/cards/create/', createACard);
router.post('/cards/delete/', deleteACard);

export default router;
