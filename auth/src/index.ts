import "express-async-errors";
import mongoose from "mongoose";

import { app } from "./app";


const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY does not exist");
  }

  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.info("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }

  app.listen(3000, () => {
    console.info("Listening on port 3000!!!");
  });
};

start();
