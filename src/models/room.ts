import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    room_name: { type: String, default: "", unique: true },
    user_id: { type: String },
    room_type: {
      type: String,
      enum: ["kitchen", "hallway", "livingRoom", "bedroom", "office"]
    },
});

const Room = mongoose.model("Room",roomSchema);

export { Room }