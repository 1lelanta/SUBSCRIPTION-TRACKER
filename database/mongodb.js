import mongoose from "mongoose";


const connectToDatabase = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.error('error connecting to database',error);
        process.exit(1);
    }
}

export default connectToDatabase