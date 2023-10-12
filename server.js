import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from 'morgan';
import connectdb from "./config/db.js";
import authroutes from './routes/authroute.js';


dotenv.config();
connectdb();

const app = express();
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/auth',authroutes);

app.get("/", (req, res) => {
  res.send(`<h1>Welcome</h1>`);
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`.bgCyan.white);
});
