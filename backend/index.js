import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import destinationRoute  from "./routes/destinations.js";
import userRoute  from "./routes/users.js";
import authRoute  from "./routes/auth.js";
import reviewRoute  from "./routes/reviews.js";
import bookingRoute  from "./routes/booking.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin:true,
    credentials:true
}

//for testing API
app.get('/', (req,res)=>{
   res.send("api is working");
});


//database connection
mongoose.set('strictQuery', false);
const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });

        console.log('MongoDB connected successfully');

    }
    catch (err) {
          console.log("MongoDB connected failed", err.message);
          process.exit(1); //if DB connection fails
    }
};


//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// Routes
app.use("/api/v1/auth", authRoute );
app.use("/api/v1/destinations", destinationRoute );
app.use("/api/v1/users", userRoute );
app.use("/api/v1/review", reviewRoute );
app.use("/api/v1/booking", bookingRoute );

// Server start
app.listen(port, () => {
    connect();
    console.log("server listening on port", port);
});