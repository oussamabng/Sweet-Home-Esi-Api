import mongoose from "mongoose";

const alarmSchema = new mongoose.Schema({
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    alarm_name: {
        type:String,
        required:true
    },
    alarm_data: {
        type: String,
        enum: ["motion", "temperature", "gaz", "ultrason"],
        default: "motion"
      },
    alarm_value: { type: Boolean, default: false },
    alarm_type: { type: String, enum: ["automatic", "manual"], default: "automatic" }
});

const Alarm = mongoose.model("Alarm",alarmSchema);

export { Alarm }