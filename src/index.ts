import cors from "cors";
import express, { json } from "express";
import { routes } from "./infra/http/routes/routes";

const app = express();
const port = 5500;

app.use(json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Server running in localhost:${port}`);
});
