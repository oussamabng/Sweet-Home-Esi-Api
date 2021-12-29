import mongoose from "mongoose";

const LightSchema = new mongoose.Schema({
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    light_name: {
        type:String,
        required:true
    },
    light_value: { type: Boolean, default: false },
});

const Light = mongoose.model("Light",LightSchema);

export { Light }