const About = require("../models/About");

const getAbout = async (req, res) => {
  try {
    const about = await About.findOne();

    res.json(about);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateAbout = async (req, res) => {
  try {
    let about = await About.findOne();

    if (!about) {
      about = await About.create(req.body);
    } else {
      Object.assign(about, req.body);

      await about.save();
    }

    res.json(about);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAbout,
  updateAbout,
};
