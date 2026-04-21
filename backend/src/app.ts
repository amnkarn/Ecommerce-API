import express, { type Application } from "express";
import indexRouter from "./routes/index.route.js";
import moragn from "morgan"

const app: Application = express();

app.use(moragn("dev"));
app.use(express.json());

app.use(express.json());

app.use("/api/v1", indexRouter);


export default app;