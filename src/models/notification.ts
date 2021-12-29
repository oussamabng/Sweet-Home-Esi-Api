import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    notification_type:{
        type:String,
        enum:["motion", "temperature", "gaz", "ultrason"]
    },
    notification_content:{
        type:String,
        required:true
    },
    notification_time : { type : Date, default: Date.now },

});

const Notification = mongoose.model("Notification",NotificationSchema);

export { Notification }