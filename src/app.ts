import cookieParser from "cookie-parser";
import express, { request, response, type Application } from "express";
import cors from "cors";
import router from "./routes/routes";
import { globalErrorHandler } from "./middleware/globalerrorhandler";

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

app.get("/", (req = request, res = response) => {
  res.send("Server is running");
});

app.use("/api/v1", router);

app.use(globalErrorHandler);

export default app;
