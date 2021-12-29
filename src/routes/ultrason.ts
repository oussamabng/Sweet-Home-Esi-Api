import express,{Request,Response} from 'express';
import { Ultrason } from '../models/ultrason';
import { getAll, getOne,createOne,updateOne,deleteOne } from './route';

const router = express.Router();

// get all Ultrason
router.get('/api/ultrason',[],(req:Request,res:Response)=>{getAll( Ultrason ,req,res);});

// get a Ultrason
router.get('/api/ultrason/:id',[],(req:Request,res:Response)=>{getOne( Ultrason ,req,res);});

// create Ultrason
router.post('/api/ultrason',[],(req:Request,res:Response)=>{createOne( Ultrason ,req,res);});

// update Ultrason
router.patch('/api/ultrason/:id',[],(req:Request,res:Response)=>{updateOne( Ultrason ,req,res);});

// delete Ultrason
router.delete('/api/ultrason/:id',[],(req:Request,res:Response)=>{deleteOne( Ultrason ,req,res);});

export  { router as ultrasonRouter } 