import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import router from './routes/api/v1';

const app: Application = express();
const port: string | number = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Routes
app.use('/', router);

app.listen(port, () => console.log(`Server is running on ${port}`));
