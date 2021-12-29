import express,{Request,Response} from 'express';
import { errorHandler } from '../helpers/error_handler';
import { User } from '../models/user';
import { getAll, getOne,createOne,updateOne,deleteOne } from './route';


const router = express.Router();

// get all users
router.get('/api/user',[],(req:Request,res:Response)=>{
    getAll(User,req,res);
});

// get a user
router.get("/api/user/:id",[],async(req:Request,res:Response)=>{
    getOne(User,req,res);
});

// create user
router.post("/api/user",[],async(req:Request,res:Response)=>{
    try {
        const body = req.body;
        let user = await User.findOne({email:body.email});
        if (user){
            return res.status(404).send({
                message:'user already exists'
            })
        }

        let new_user = await User.create(req.body);
        await new_user.save();
        return res.status(200).send(new_user);
    } catch (error) {
        errorHandler(res,error);
    }
});

// update user
router.patch('/api/user/:id',[], async(req:Request, res:Response) => {
    updateOne(User,req,res);
});

// delete user
router.delete('/api/user/:id',[],async(req:Request,res:Response)=>{
    deleteOne(User,req,res);
});

export { router as userRouter }