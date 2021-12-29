import mongoose from "mongoose";

const dhtSchema = new mongoose.Schema({
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    dht_name: {
        type:String,
        required:true
    },
    dht_temperature: { type: [Number] },
    dht_humidity: { type: [Number] },
    dht_time: { type: [Number] }
});

const Dht = mongoose.model("Dht",dhtSchema);

export { Dht }