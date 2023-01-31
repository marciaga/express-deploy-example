import express from "express";

import catRouter from "./routes/cat";

const app = express();

app.use("/cats", catRouter);

export default app;
