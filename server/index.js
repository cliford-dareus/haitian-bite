require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const connectDB = require('./db/connect');
const locationRoute = require('./routes/location');
const NotFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();

app.use(express.json());

app.use(morgan('combine'));
app.use(helmet());
app.use(cors());

app.get('/', ( req, res ) => {
    res.json({ msg: 'Welcome to the server side...'});
});

app.use('/api/v1/location', locationRoute);

app.use(NotFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    };
};

start();