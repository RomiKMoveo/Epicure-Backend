import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import router from './routes/router';
import mongoose from 'mongoose';
import auth from './middleeware/auth';

const { expressjwt } = require("express-jwt");

require('dotenv').config();
const mongoURI: string = `${process.env.MONGODB_URI}` || "";
 
const cors = require('cors');
const app = express();
const PORT: number = 3000;

//==========================================================
//                   INCOMING DATA EXTRACTION
//==========================================================

//parse incoming req data
app.use(bodyParser.urlencoded({ extended: true }));
//JSON every response we send back
  app.use(bodyParser.json());
//For extracting tokens
app.use(cookieParser());

//==========================================================
//             SERVER SECURITY AND ALLOWED REQUESTS
//==========================================================

//this allows for requests to come from ANYWHERE
app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'PUT', 'DELETE']}));

// comment out this line if you want to bypass JWT check during development
// When client attaches "bearer token" , expressJwt verifies it and if it is authenticated it will
// app.use(
//   expressjwt({
//     secret: auth.jwtSecret,
//     algorithms: ["HS256"],
//   }).unless({
//     path: [
//       "/api/userAuth/",
//       "/api/restaurant/"
//     ],
//   })
// );

//==========================================================
//                     ROUTERS
//==========================================================
app.use('/api', router);


app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

//==========================================================
//                 SERVER INITIALIZATION
//==========================================================

startServer();

async function startServer() {
    await initDB();
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