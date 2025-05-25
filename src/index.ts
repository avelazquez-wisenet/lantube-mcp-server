import { middleware } from "#/middlewares/middlewares.js";
import express from "express";

const app = express();
const port = process.env.PORT ?? "3000";

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
app.get("/", middleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
