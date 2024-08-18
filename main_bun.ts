import { app } from "./src/app.ts";

console.log("Listening on http://localhost:8080/");

// @ts-ignore supress warning
Bun.serve({
  port: 8080,
  fetch: app.fetch,
});
