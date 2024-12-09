const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://sarahalmarri76:SarahAlmarri@cluster0.amoig.mongodb.net/foodiezproject"
  );
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
