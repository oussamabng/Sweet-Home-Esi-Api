import express,{Request,Response} from 'express';
import { Light } from '../models/light';
import { getAll, getOne,createOne,updateOne,deleteOne } from './route';

const { checkJwt } = require('../middlwares/auth');
const router = express.Router();

// get all Light
router.get('/api/light',[checkJwt],(req:Request,res:Response)=>{getAll( Light ,req,res);});

// get a Light
router.get('/api/light/:id',[checkJwt],(req:Request,res:Response)=>{getOne( Light ,req,res);});

// create Light
router.post('/api/light',[checkJwt],(req:Request,res:Response)=>{createOne( Light ,req,res);});

// update Light
router.patch('/api/light/:id',[checkJwt],(req:Request,res:Response)=>{updateOne( Light ,req,res);});

// delete Light
router.delete('/api/light/:id',[checkJwt],(req:Request,res:Response)=>{deleteOne( Light ,req,res);});

export  { router as lightRouter } 