// const profileSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       default: "Fayaz",
//     },

//     email: {
//       type: String,
//       default: "fayazpatel603@gmail.com",
//     },

//     phone: {
//       type: String,
//       default: "9389XXXXXX",
//     },

//     location: {
//       type: String,
//       default: "Bangalore, India",
//     },

//     about: {
//       type: String,
//       default: "Full Stack Developer | AI Engineer",
//     },

//     github: {
//       type: String,
//       default: "https://github.com/fayaz732",
//     },

//     instagram: {
//       type: String,
//       default: "https://instagram.com/faiu_09",
//     },

//     youtube: {
//       type: String,
//       default: "https://youtube.com/@explore_with_fayaz",
//     },

//     image: {
//       type: String,
//       default: "",
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// module.exports = mongoose.model("Profile", profileSchema);
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    name: String,

    email: String,

    phone: String,

    location: String,

    about: String,

    github: String,

    instagram: String,

    youtube: String,

    image: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Profile", profileSchema);
