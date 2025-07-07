import mongoose from "mongoose";

const tagSchema = new mongoose.Schema(
  {
    // id {name, color, isActive, timestamps}
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    color: {
      type: String,
      default: "#000000",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tag", tagSchema);
