import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8"
};

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host}`);
    const safePath = normalize(url.pathname).replace(/^(\.\.[/\\])+/, "");
    const filePath = join(root, safePath === "/" ? "index.html" : safePath);
    const data = await readFile(filePath);
    response.writeHead(200, { "content-type": types[extname(filePath)] || "application/octet-stream" });
    response.end(data);
  } catch {
    const data = await readFile(join(root, "index.html"));
    response.writeHead(200, { "content-type": types[".html"] });
    response.end(data);
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Triathlon PWA running at http://127.0.0.1:${port}`);
});
