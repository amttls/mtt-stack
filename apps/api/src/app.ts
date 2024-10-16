import path from "path";
import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";

import bookRouter from "./routes/book.routes";

const app = new Hono();

app.use("*", logger());

app.route("/api/books", bookRouter);

app.get(
  "*",
  serveStatic({
    root: path.resolve(__dirname, "../../client/dist"),
  }),
);
app.get(
  "*",
  serveStatic({
    path: path.resolve(__dirname, "../../client/dist/index.html"),
  }),
);

export default app;
