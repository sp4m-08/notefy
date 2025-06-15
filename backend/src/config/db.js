import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); //db name before ? mark
        console.log("MONGODB SUCCESSFULLY CONNECTED!");
        
    } catch (error) {
        console.log("Error connecting to MONGODB: ", error);
        process.exit(1); //1 - exit with failure
    }
}