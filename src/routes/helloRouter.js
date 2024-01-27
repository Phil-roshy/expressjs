// helloRouter.js
import { Router } from "express";

const helloRoute = Router();

helloRoute.get("/", async (req, res) => {
  const { name } = req.query;
  const message = name ? `Hello ${name}` : "Hello";
  res.status(200).send({ message });
});

export default helloRoute;
