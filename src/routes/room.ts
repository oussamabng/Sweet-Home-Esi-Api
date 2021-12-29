import express,{Request,Response} from 'express';
import { Room } from '../models/room';
import { getAll, getOne,createOne,updateOne,deleteOne } from './route';

const router = express.Router();

// get all Room
router.get('/api/room',[],(req:Request,res:Response)=>{getAll( Room ,req,res);});

// get a Room
router.get('/api/room/:id',[],(req:Request,res:Response)=>{getOne( Room ,req,res);});

// create Room
router.post('/api/room',[],(req:Request,res:Response)=>{createOne( Room ,req,res);});

// update Room
router.patch('/api/room/:id',[],(req:Request,res:Response)=>{updateOne( Room ,req,res);});

// delete Room
router.delete('/api/room/:id',[],(req:Request,res:Response)=>{deleteOne( Room ,req,res);});

export  { router as roomRouter } 