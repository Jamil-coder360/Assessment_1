import cookieParser from "cookie-parser";
import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ limit: "500mb", extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  }),
);

app.get("/", (req, res) => {
  res.send("Server is running");
});

export default app;
