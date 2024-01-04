require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const ProductRouter = require('./routes/products');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/products', ProductRouter);

app.listen(process.env.PORT, () => console.log('Servidor ON.'))