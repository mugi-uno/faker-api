import { faker } from "@faker-js/faker";
import { Hono } from "hono";

const app = new Hono();

app.get("/faker", (c) => {
  let count = Number(c.req.query("count"));
  if (!Number.isNaN(count) && count > 100) {
    count = 100;
  }

  const isArrayResponse = !Number.isNaN(count);

  const create = () => ({
    name: faker.location.country(),
  });

  if (isArrayResponse) {
    return c.json(Array.from({ length: count }, () => create()));
  }

  return c.json(create());
});

export default app;
