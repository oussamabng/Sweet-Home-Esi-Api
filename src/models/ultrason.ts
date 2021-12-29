import mongoose from "mongoose";

const UltrasonSchema = new mongoose.Schema({
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    ultrason_name: {
        type:String,
        required:true
    },
    ultrason_value: { type: Boolean, default: false },
});

const Ultrason = mongoose.model("Ultrason",UltrasonSchema);

export { Ultrason }