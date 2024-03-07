import { faker } from "@faker-js/faker";
import { Hono } from "hono";

export const fakerAPI = new Hono();

fakerAPI.get("/", (c) => {
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
