import express from "express";
import notesRoute from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config();

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
}));



app.use(express.json()); //this middleware will parse the json body - give access to req.body

app.use(rateLimiter);


app.use("/api/notes", notesRoute);



//custom middleware for debugging
// app.use((req, res, next) => {
//     console.log(`Request method is ${req.method} & request url is ${req.url}`);
//     next();
// });


const port =  5001;
connectDB().then(() => {
    
app.listen(port, () => {
    console.log(`server started on ${port}`);
});
    
});




