import express,{Request,Response} from 'express';
import { Arming } from '../models/arming';
import { getAll, getOne,createOne,updateOne,deleteOne } from './route';

const { checkJwt } = require('../middlwares/auth');
const router = express.Router();

// get all Arming
router.get('/api/arming',[checkJwt],(req:Request,res:Response)=>{getAll( Arming ,req,res);});

// get a Arming
router.get('/api/arming/:id',[checkJwt],(req:Request,res:Response)=>{getOne( Arming ,req,res);});

// create Arming
router.post('/api/arming',[checkJwt],(req:Request,res:Response)=>{createOne( Arming ,req,res);});

// update Arming
router.patch('/api/arming/:id',[checkJwt],(req:Request,res:Response)=>{updateOne( Arming ,req,res);});

// delete Arming
router.delete('/api/arming/:id',[checkJwt],(req:Request,res:Response)=>{deleteOne( Arming ,req,res);});

export  { router as armingRouter } 