import express,{Request,Response} from 'express';
import { Alarm } from '../models/alarm';
import { getAll, getOne,createOne,updateOne,deleteOne } from './route';

const { checkJwt } = require('../middlwares/auth');
const router = express.Router();

// get all Alarm
router.get('/api/alarm',[checkJwt],(req:Request,res:Response)=>{getAll( Alarm ,req,res);});

// get a Alarm
router.get('/api/alarm/:id',[checkJwt],(req:Request,res:Response)=>{getOne( Alarm ,req,res);});

// create Alarm
router.post('/api/alarm',[checkJwt],(req:Request,res:Response)=>{createOne( Alarm ,req,res);});

// update Alarm
router.patch('/api/alarm/:id',[checkJwt],(req:Request,res:Response)=>{updateOne( Alarm ,req,res);});

// delete Alarm
router.delete('/api/alarm/:id',[checkJwt],(req:Request,res:Response)=>{deleteOne( Alarm ,req,res);});

export  { router as alarmRouter } 