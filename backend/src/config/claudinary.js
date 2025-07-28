import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from 'multer-storage-cloudinary';


// Configuration
cloudinary.config({
  cloud_name: "dg9daj03r",
  api_key: "358898674193522",
  api_secret: "OL_ICM98JKbua8A6JiRmONgJa90", // Click 'View API Keys' above to copy your API secret
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "image",
    // format: async (req, file) => "png", // supports promises as well yoh chai auta restriction pani ho 
    // public_id: (req, file) => "computed-filename-using-request", // unique image id generate garxa 
  },
});

const uploads = multer({ storage: storage });


export {uploads, cloudinary}