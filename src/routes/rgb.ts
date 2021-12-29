import express,{Request,Response} from 'express';
import { Rgb } from '../models/rgb';
import { getAll, getOne,createOne,updateOne,deleteOne } from './route';

const { checkJwt } = require('../middlwares/auth');
const router = express.Router();

// get all Rgb
router.get('/api/rgb',[checkJwt],(req:Request,res:Response)=>{getAll( Rgb ,req,res);});

// get a Rgb
router.get('/api/rgb/:id',[checkJwt],(req:Request,res:Response)=>{getOne( Rgb ,req,res);});

// create Rgb
router.post('/api/rgb',[checkJwt],(req:Request,res:Response)=>{createOne( Rgb ,req,res);});

// update Rgb
router.patch('/api/rgb/:id',[checkJwt],(req:Request,res:Response)=>{updateOne( Rgb ,req,res);});

// delete Rgb
router.delete('/api/rgb/:id',[checkJwt],(req:Request,res:Response)=>{deleteOne( Rgb ,req,res);});

export  { router as rgbRouter } 