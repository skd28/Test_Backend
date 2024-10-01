const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { imageUpload, getAllImage } = require("../controller/ImageController");
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'test_upload',
        format: async (req, file) => 'png',
        public_id: (req, file) => file.originalname.split('.')[0],
    },
});

const upload = multer({ storage: storage });
//Image

router.post("/uploads", upload.single('image'), imageUpload);
router.get("/image", getAllImage)

module.exports = router;

