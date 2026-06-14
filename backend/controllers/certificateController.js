const Certificate = require("../models/Certificate");

const getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({
      createdAt: -1,
    });

    res.json(certificates);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.create({
      title: req.body.title,

      issuer: req.body.issuer,

      link: req.body.link,

      image: req.file ? req.file.path : "",
    });

    res.status(201).json(certificate);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteCertificate = async (req, res) => {
  try {
    await Certificate.findByIdAndDelete(req.params.id);

    res.json({
      message: "Certificate Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getCertificates,
  createCertificate,
  deleteCertificate,
};
