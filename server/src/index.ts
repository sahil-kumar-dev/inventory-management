import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';

// Route Imports
import dashboardRoutes from './routes/dashboardRoutes';
import productRoutes from './routes/productRoutes'

// Configurations
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes

app.use('/dashboard', dashboardRoutes);
app.use('/products',productRoutes)

// Server

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));


