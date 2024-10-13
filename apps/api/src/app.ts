import { Hono } from "hono";
import { logger } from "hono/logger";

import bookRouter from "./routes/book.routes";

const app = new Hono();

app.use("*", logger());

app.get("/test", (c) => c.json({ message: "Foo" }));

app.route("/books", bookRouter);

export default app;
