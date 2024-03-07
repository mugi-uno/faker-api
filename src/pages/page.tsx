import { Hono } from "hono";
import { Root } from "./_components/Root";

export const root = new Hono();

root.get("/", (c) => {
  return c.html(<Root />);
});
