// app.js
import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as middleware from "./utils/middleware.js";
import helloRoute from "./routes/helloRouter.js";
import mathRoute from "./routes/mathRouter.js"; // Import the new router

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).send({ status: "ok" });
});

app.use("/hello", helloRoute);
app.use("/math", mathRoute); // Use the new router for math operations

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
