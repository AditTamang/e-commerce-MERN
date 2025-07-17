import dotenv from "dotenv";
dotenv.config();

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
const JWT_SECRET= process.env.JWT_SECRET

export default { PORT, EMAIL_PASSWORD, EMAIL_USER, MONGO_URI, JWT_SECRET };
