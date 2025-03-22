import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure dotenv with explicit path to the .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const connectToMongoDB = async () => {
    try {
        console.log("MongoDB URI:", process.env.MONGO_DB_URI); // Debug line to verify
        await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
};

export default connectToMongoDB;
