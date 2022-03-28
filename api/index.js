import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import pc_components from './routes/pc_components';
import orders from './routes/orders';

const app = express();

app.use(cors());
app.use(express.json())
app.use('/api/pc_components', pc_components);
app.use('/api/pc_orders', orders);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

export default app;


















