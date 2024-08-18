import { serve } from "@hono/node-server";
import { app } from "./src/app.ts";
console.log("Listening on http://localhost:8080/");
serve({
  fetch: app.fetch,
  port: 8080,
});
