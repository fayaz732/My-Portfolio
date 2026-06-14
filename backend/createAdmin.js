const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGO_URI);

async function createAdmin() {
  const existingAdmin = await Admin.findOne({
    email: process.env.ADMIN_EMAIL,
  });

  if (existingAdmin) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

  await Admin.create({
    email: process.env.ADMIN_EMAIL,
    password: hashedPassword,
  });

  console.log("Admin created successfully");
  process.exit();
}

createAdmin();
