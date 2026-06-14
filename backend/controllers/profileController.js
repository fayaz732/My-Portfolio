const Profile = require("../models/Profile");
const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();

    res.json(profile);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();

    if (!profile) {
      profile = await Profile.create(req.body);
    } else {
      Object.assign(profile, req.body);

      await profile.save();
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const uploadProfilePhoto = async (req, res) => {
  try {
    let profile = await Profile.findOne();

    if (!profile) {
      profile = await Profile.create({
        image : req.file.path,
      });
    } else {
      // Delete old image
      // if (profile.image) {
      //   const oldImagePath = profile.image;

      //   if (fs.existsSync(oldImagePath)) {
      //     fs.unlinkSync(oldImagePath);
      //   }
      // }

      // Save new image
      profile.image = req.file.path;

      await profile.save();
    }

    res.json({
      success: true,
      image: profile.image,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProfile,
  updateProfile,
  uploadProfilePhoto,
};
