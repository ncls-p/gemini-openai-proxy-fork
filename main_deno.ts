import { app } from "./src/app.ts";

Deno.serve({ port: 8080 }, app.fetch);
