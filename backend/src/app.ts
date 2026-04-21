import express, { type Application } from "express";
import indexRouter from "./routes/index.route.js";
import moragn from "morgan"
import cors from "cors";

const app: Application = express();

app.use(moragn("dev"));
app.use(express.json());
app.use(cors());

app.use(express.json());

app.use("/api/v1", indexRouter);


export default app;