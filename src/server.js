import dotenv from "dotenv";
dotenv.config(); // by default loads .env in project root

import connectDB from "./config/database.js";
import app from "./app.js";

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
