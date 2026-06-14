const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGO_URI);

async function updateAdmin() {
  const password = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

  await Admin.updateOne(
    {
      email: process.env.ADMIN_EMAIL,
    },
    {
      $set: {
        password,
      },
    },
  );
  //   console.log("Password Updated");
  process.exit();
}
updateAdmin();
