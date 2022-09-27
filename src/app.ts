import express from "express";
import router from "./routes";

const app = express();

app.use('/upload', router)

export default app;
