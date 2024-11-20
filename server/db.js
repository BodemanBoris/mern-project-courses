import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://borisdortmundbvb:borisBodemanD@fabyrosealumnos.9lliq.mongodb.net/?retryWrites=true&w=majority&appName=FabyRoseAlumnos"
    );
    console.log("Db is connected");
  } catch (error) {
    console.log("Error DB ---- ", error);
  }
};
