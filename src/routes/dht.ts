import express,{Request,Response} from 'express';
import { Dht } from '../models/dht';
import { getAll, getOne,createOne,updateOne,deleteOne } from './route';

const { checkJwt } = require('../middlwares/auth');
const router = express.Router();

// get all Dht
router.get('/api/dht',[checkJwt],(req:Request,res:Response)=>{getAll( Dht ,req,res);});

// get a Dht
router.get('/api/dht/:id',[checkJwt],(req:Request,res:Response)=>{getOne( Dht ,req,res);});

// create Dht
router.post('/api/dht',[checkJwt],(req:Request,res:Response)=>{createOne( Dht ,req,res);});

// update Dht
router.patch('/api/dht/:id',[checkJwt],(req:Request,res:Response)=>{updateOne( Dht ,req,res);});

// delete Dht
router.delete('/api/dht/:id',[checkJwt],(req:Request,res:Response)=>{deleteOne( Dht ,req,res);});

export  { router as dhtRouter } 