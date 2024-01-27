// mathRouter.js
import { Router } from "express";

const mathRoute = Router();

mathRoute.post("/add", async (req, res) => {
  const { num1, num2 } = req.body;

  // Check if both num1 and num2 are provided in the request body
  if (num1 === undefined || num2 === undefined) {
    return res.status(400).send({ error: "Both 'num1' and 'num2' are required in the request body." });
  }

  // Perform the addition
  const total = Number(num1) + Number(num2);

  res.status(200).send({ total });
});

export default mathRoute;
