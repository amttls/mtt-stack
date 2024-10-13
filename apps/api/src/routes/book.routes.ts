import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const bookRouter = new Hono();

bookRouter.get("/", (c) => {
  return c.json({ books: [] });
});

bookRouter.get("/:id{[0-9]+}", (c) => {
  const id = Number.parseInt(c.req.param("id"));
  return c.json({ id });
});

bookRouter.post(
  "/",
  zValidator(
    "json",
    z.object({
      title: z.string(),
      author: z.string(),
    }),
  ),
  (c) => {
    const book = c.req.valid("json");

    return c.json(book);
  },
);

bookRouter.put(
  "/:id{[0-9]+}",
  zValidator(
    "json",
    z.object({
      title: z.string().optional(),
      author: z.string().optional(),
    }),
  ),
  (c) => {
    const id = Number.parseInt(c.req.param("id"));
    return c.json({ id });
  },
);

bookRouter.delete("/:id{[0-9]+}", (c) => {
  const id = Number.parseInt(c.req.param("id"));
  return c.json({ id });
});

export default bookRouter;
