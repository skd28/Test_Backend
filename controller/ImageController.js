const Image = require("../model/Image");
const cloudinary = require('../config/cloudinary');

const imageUpload = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const image = new Image({
            url: result.secure_url,
            cloudinary_id: result.public_id,
        });
        await image.save();
        res.json({ message: 'Image uploaded successfully', image });
    } catch (error) {
        res.status(500).json({ message: 'Image upload failed', error });
    }
}

const getAllImage = async (req, res) => {
    try {
        const images = await Image.find();  // Corrected with await
        res.status(200).json({ message: 'All Images', images });
    } catch (error) {
        res.status(500).json({ message: 'Fetch Image Not Found', error });
    }
}

module.exports = {
    imageUpload,
    getAllImage
};

