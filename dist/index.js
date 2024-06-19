"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors = require('cors');
const app = (0, express_1.default)();
const PORT = 3000;
const mongoURI = "mongodb+srv://romik:l5BSwPrYVn9AxPkr@mongodbexercises.sstxokq.mongodb.net/";
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/api', router_1.default);
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
startServer();
async function startServer() {
    await initDB();
    //await loadData();
    app.listen(PORT, () => {
async function initDB() {
    try {
        await mongoose_1.default.connect(mongoURI);
        console.log("MongoDB connected");
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
    }
}
