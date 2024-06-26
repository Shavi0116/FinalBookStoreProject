import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import bookRouter from './routers/book.router';
import userRoter from './routers/user.router';
import { dbConnect } from './cofigs/database.config';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/books", bookRouter);
app.use("/api/users", userRoter);

const port =  5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})