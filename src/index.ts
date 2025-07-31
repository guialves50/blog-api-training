import express from "express";
import { connectToDatabase } from "./database/database.connection";
import { config } from "dotenv";
import routes from "./router";
config();

export const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
routes(app)

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
