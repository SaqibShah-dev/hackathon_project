import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { env } from './config/env.js';
import routes from './routes/index.js';
import { notFound, errorHandler } from './middleware/error.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: env.clientUrl, credentials: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', rateLimit({ windowMs: 60_000, max: 300 }));

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

export default app;
