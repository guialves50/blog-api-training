import express from "express";
import { connectToDatabase } from "./database/database.connection";
import { config } from "dotenv";
config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectToDatabase()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
