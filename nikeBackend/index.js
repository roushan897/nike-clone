const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const productRouter = require('./src/routes/product.route.js');
const storiesRouter = require('./src/routes/stories.route.js');

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/products', productRouter);
app.use('/stories', storiesRouter)

app.get('/', (req, res) => {
  res.send("welcome to home of google Auth");
});

app.listen(port, async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to mongoDB');
    } catch {
        console.log('Failed to connect to mongoDB');
    }
    console.log(`http://localhost:${port}`);
});