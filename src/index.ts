import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import router from './routes/router';
import mongoose from 'mongoose';

const dotenv = require('dotenv');
dotenv.config();
const mongoURI: string = `${process.env.MONGODB_URI}` || "";
 
const cors = require('cors');
const app = express();
const PORT: number = 3000;


app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'PUT', 'DELETE']}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);


app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

startServer();

async function startServer() {
    await initDB();
    //await loadData();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
  });
}

async function initDB() {
  try {
      await mongoose.connect(mongoURI);
      console.log("MongoDB connected");
  } catch (error) {
      console.error("MongoDB connection error:", error);
  }
}