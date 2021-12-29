import express,{Request,Response} from 'express';
import { Routine } from '../models/routine';
import { getAll, getOne,createOne,updateOne,deleteOne } from './route';

const { checkJwt } = require('../middlwares/auth');
const router = express.Router();

// get all Routine
router.get('/api/routine',[checkJwt],(req:Request,res:Response)=>{getAll( Routine ,req,res);});

// get a Routine
router.get('/api/routine/:id',[checkJwt],(req:Request,res:Response)=>{getOne( Routine ,req,res);});

// create Routine
router.post('/api/routine',[checkJwt],(req:Request,res:Response)=>{createOne( Routine ,req,res);});

// update Routine
router.patch('/api/routine/:id',[checkJwt],(req:Request,res:Response)=>{updateOne( Routine ,req,res);});

// delete Routine
router.delete('/api/routine/:id',[checkJwt],(req:Request,res:Response)=>{deleteOne( Routine ,req,res);});

export  { router as routineRouter } 