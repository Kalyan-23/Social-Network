import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
  try {
    const connectionInstance = await mongoose.connect(mongoURI);

    console.log(`✅ Connected to MongoDB`);
    console.log(`🌐 HOST: ${connectionInstance.connection.host}`);
    console.log(`📂 DB NAME: ${connectionInstance.connection.name}`);

  } catch (error) {
    console.error("❌ Error connecting with database:", error.message);
    process.exit(1);
  }
};

export default connectToMongo;