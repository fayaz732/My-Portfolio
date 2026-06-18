const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const projectRoutes = require("./routes/projectRoutes");
const skillRoutes = require("./routes/skillRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const learningRoutes = require("./routes/learningRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const certificateRoutes = require("./routes/certificateRoutes");

dotenv.config();

connectDB();

const app = express();

/* Middleware */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL,
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);


app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

/* Static Upload Folder */

app.use("/uploads", express.static("uploads"));

/* Test Route */

app.get("/", (req, res) => {
  res.send("Portfolio API Running...");
});

/* Routes */

app.use("/api/auth", authRoutes);

app.use("/api/profile", profileRoutes);

app.use("/api/projects", projectRoutes);

app.use("/api/skills", skillRoutes);

app.use("/api/about", aboutRoutes);

app.use("/api/learning", learningRoutes);

app.use("/api/resume", resumeRoutes);

app.use("/api/certificates", certificateRoutes);

/* Server */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
