import mongoose from "mongoose";

const GSenseSchema = new mongoose.Schema({
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    gsense_name: {
        type:String,
        required:true
    },
    gsense_smoke: { type: [Number] },
    gsense_lpg: { type: [Number] },
    gsense_methane: { type: [Number] },
    gsense_propane: { type: [Number] },
    gsense_time: { type: [Number] }
});

const GSense = mongoose.model("Gsense",GSenseSchema);

export { GSense }