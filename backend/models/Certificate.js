const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    issuer: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Certificate", certificateSchema);
