import express,{Request,Response} from 'express';
import { Notification } from '../models/notification';
import { getAll, getOne,createOne,updateOne,deleteOne } from './route';

const { checkJwt } = require('../middlwares/auth');
const router = express.Router();

// get all Notification
router.get('/api/notification',[checkJwt],(req:Request,res:Response)=>{getAll( Notification ,req,res);});

// get a Notification
router.get('/api/notification/:id',[checkJwt],(req:Request,res:Response)=>{getOne( Notification ,req,res);});

// create Notification
router.post('/api/notification',[checkJwt],(req:Request,res:Response)=>{createOne( Notification ,req,res);});

// update Notification
router.patch('/api/notification/:id',[checkJwt],(req:Request,res:Response)=>{updateOne( Notification ,req,res);});

// delete Notification
router.delete('/api/notification/:id',[checkJwt],(req:Request,res:Response)=>{deleteOne( Notification ,req,res);});

export  { router as notificationRouter } 