const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    github: String,

    live: String,

    image: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Project", projectSchema);
