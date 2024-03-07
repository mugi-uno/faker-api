import { Hono } from "hono";
import { fakerAPI } from "./api/faker";
import { root } from "./pages/page";

const app = new Hono();

app.route("/", root);
app.route("/faker", fakerAPI);

export default app;
