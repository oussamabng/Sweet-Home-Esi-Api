import mongoose from "mongoose";

const RoutineSchema = new mongoose.Schema({
    rooms_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room'
        }
    ],
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    routine_name:{
        type:String,
        required:true
    },
    routine_color:{
        type:String,
        required:true
    },
    routine_state:{
        type:Boolean,
        default:false
    },
    routine_time : { type : Date, default: Date.now },
    routine_repeat : { type : Boolean, default: false },
    routine_devices_on:[
        {
            alarm:{ type : Boolean, default: false },
            arming:{ type : Boolean, default: false },
            dht:{ type : Boolean, default: false },
            gsense:{ type : Boolean, default: false },
            light:{ type : Boolean, default: false },
            rgb:{ type : Boolean, default: false },
            ultrason:{ type : Boolean, default: false },
        }
    ],
    routine_devices_off:[
        {
            alarm:{ type : Boolean, default: false },
            arming:{ type : Boolean, default: false },
            dht:{ type : Boolean, default: false },
            gsense:{ type : Boolean, default: false },
            light:{ type : Boolean, default: false },
            rgb:{ type : Boolean, default: false },
            ultrason:{ type : Boolean, default: false },
        }
    ],
});

const Routine = mongoose.model("Routine",RoutineSchema);

export { Routine }