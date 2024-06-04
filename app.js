import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/db.connection.js";
import messageRouter from "./routes/messageRouter.js";
import { errorMiddleware } from "./middlewares/errorHandler.js";

const app = express();
config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URI, process.env.DASHBOARD_URI],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

app.get("/", (req, res) => {
  res.send("welcome to the api");
});
app.use("/api/v1/message", messageRouter);

dbConnection();

app.use(errorMiddleware)
export default app;
