import { createReadStream, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const contentTypes = { ".css": "text/css", ".html": "text/html", ".js": "text/javascript" };

createServer((request, response) => {
  const requestedPath = new URL(request.url ?? "/", "http://127.0.0.1").pathname;
  const pathname = requestedPath === "/" ? "/index.html" : requestedPath;
  const file = resolve(root, `.${pathname}`);
  try {
    if (!file.startsWith(root)) throw new Error("Path escapes the application root");
    if (!statSync(file).isFile()) throw new Error("Not found");
    response.writeHead(200, { "Content-Type": contentTypes[extname(file)] ?? "application/octet-stream" });
    createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404).end("Not found");
  }
}).listen(4175, "127.0.0.1", () => console.log("Calculator available at http://127.0.0.1:4175"));
