import express from 'express';
import { hello } from '../../../controllers/board';

const router = express.Router();

router.get('/hello', hello);

export default router;
