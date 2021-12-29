import mongoose from "mongoose";

const ArmingSchema = new mongoose.Schema({
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    arming_name: {
        type:String,
        required:true
    },
    arming_value: { type: Boolean, default: false },
});

const Arming = mongoose.model("Arming",ArmingSchema);

export { Arming }