const mongoose = require("mongoose");
// dotenv.config();
const MONGODB_URI = process.env.mongoURL;

const MongoDBConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = MongoDBConnect;
