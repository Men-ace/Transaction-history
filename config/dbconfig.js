// This file is used to connect API with Db

import mongoose from "mongoose";

const DATABASE_NAME = 'Transaction_history'
const CONNECTION_URI = 'mongodb://localhost:27017/' + DATABASE_NAME

export const connectToMongoDb = () => {
  try {
    const connect = mongoose.connect(CONNECTION_URI)

    if(connect){
      console.log("Database conected at", CONNECTION_URI);
    }
  } catch (error) {
    console.log("Db connection Error", error);
  }
}