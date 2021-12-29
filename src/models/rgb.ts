import mongoose from "mongoose";

const rgbSchema = new mongoose.Schema({
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    rgb_name: {
        type:String,
        required:true
    },
    rgb_state: { type: Boolean, default: false },
    alarm_color: { type: String}
});

const Rgb = mongoose.model("Rgb",rgbSchema);

export { Rgb }