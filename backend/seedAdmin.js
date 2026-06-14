const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const User = require("./models/User");

dotenv.config();

connectDB();

const seedAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({
      email: "fayaz@gmail.com",
    });

    if (existingAdmin) {
      console.log("Admin Already Exists");

      process.exit();
    }

    const hashedPassword = await bcrypt.hash("123456", 10);

    await User.create({
      name: "Fayaz",

      email: "fayaz@gmail.com",

      password: hashedPassword,
    });

    console.log("Admin Created Successfully");

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

seedAdmin();
