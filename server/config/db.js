const mongoose = require("mongoose");

const connectDB = async () => {
  const connn = await mongoose.connect(process.env.MONGO_URI);

  console.log(
    `MongoDB connection established: ${connn.connection.host}`.cyan
      .underline.bold
  );
};

module.exports = connectDB;