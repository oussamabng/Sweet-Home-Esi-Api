import express,{Request,Response} from 'express';
import { Ultrason } from '../models/ultrason';
import { getAll, getOne,createOne,updateOne,deleteOne } from './route';

const { checkJwt } = require('../middlwares/auth');
const router = express.Router();

// get all Ultrason
router.get('/api/ultrason',[checkJwt],(req:Request,res:Response)=>{getAll( Ultrason ,req,res);});

// get a Ultrason
router.get('/api/ultrason/:id',[checkJwt],(req:Request,res:Response)=>{getOne( Ultrason ,req,res);});

// create Ultrason
router.post('/api/ultrason',[checkJwt],(req:Request,res:Response)=>{createOne( Ultrason ,req,res);});

// update Ultrason
router.patch('/api/ultrason/:id',[checkJwt],(req:Request,res:Response)=>{updateOne( Ultrason ,req,res);});

// delete Ultrason
router.delete('/api/ultrason/:id',[checkJwt],(req:Request,res:Response)=>{deleteOne( Ultrason ,req,res);});

export  { router as ultrasonRouter } 