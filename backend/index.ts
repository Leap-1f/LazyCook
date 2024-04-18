import express, { Request, Response } from "express";

const app: express.Application = express();

const port: number = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("TypeScript With Express");
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}/`);
});
