// app.js
import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as middleware from "./utils/middleware.js";
import helloRoute from "./routes/helloRouter.js";
import mathRoute from "./routes/mathRouter.js";
import qrCodeRoute from "./routes/qrCodeRouter.js"; // Import the new router
import path from "path";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).send({ status: "ok" });
});

app.use("/hello", helloRoute);
app.use("/math", mathRoute);
app.use("/qrCode", qrCodeRoute); // Use the new router for QR code generation

// Serve static files (like generated QR code images)
app.use("/qrcodes", express.static(path.join(__dirname, "public", "qrcodes")));

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
