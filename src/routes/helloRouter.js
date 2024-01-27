import { Router } from "express";

const routes = Router();

routes.get("/:name", async (req, res) => {
  const { name } = req.params;
  res.status(200).send({ message: `Hello ${name}` });
});

export default routes;
