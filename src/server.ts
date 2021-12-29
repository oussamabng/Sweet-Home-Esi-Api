import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';

require('dotenv').config()

import mongoose from "mongoose";

const { userRouter } = require('./routes/user.js');
import { alarmRouter } from './routes/alarm';
import { armingRouter } from './routes/arming';
import { dhtRouter } from './routes/dht';
import { gsenseRouter } from './routes/gsense';
import { lightRouter } from './routes/light';
import { notificationRouter } from './routes/notification';
import { rgbRouter } from './routes/rgb';
import { roomRouter } from './routes/room';
import { routineRouter } from './routes/routine';
import { ultrasonRouter } from './routes/ultrason';

const router: Express = express();



/** Logging */
router.use(morgan('dev'));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

/** RULES OF OUR API */
router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

/** Connect to mongodb */
mongoose.connect("mongodb+srv://swap:oussamabng@cluster0.fp0lj.mongodb.net/SweetHomeDb?retryWrites=true&w=majority",{
},()=>{
    console.log("Connected to database")
})

/** Routes */
router.use(userRouter);
router.use(alarmRouter);
router.use(armingRouter);
router.use(dhtRouter);
router.use(gsenseRouter);
router.use(lightRouter);
router.use(notificationRouter);
router.use(rgbRouter);
router.use(roomRouter);
router.use(routineRouter);
router.use(ultrasonRouter);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
})

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));