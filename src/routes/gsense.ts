import express,{Request,Response} from 'express';
import { GSense } from '../models/gsense';
import { getAll, getOne,createOne,updateOne,deleteOne } from './route';

const router = express.Router();

// get all GSense
router.get('/api/gsense',[],(req:Request,res:Response)=>{getAll( GSense ,req,res);});

// get a GSense
router.get('/api/gsense/:id',[],(req:Request,res:Response)=>{getOne( GSense ,req,res);});

// create GSense
router.post('/api/gsense',[],(req:Request,res:Response)=>{createOne( GSense ,req,res);});

// update GSense
router.patch('/api/gsense/:id',[],(req:Request,res:Response)=>{updateOne( GSense ,req,res);});

// delete GSense
router.delete('/api/gsense/:id',[],(req:Request,res:Response)=>{deleteOne( GSense ,req,res);});

export  { router as gsenseRouter } 