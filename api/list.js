import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dir = path.resolve("./");
  const files = fs.readdirSync(dir)
    .filter(f => f.endsWith(".html") && f !== "index.html");
  res.status(200).json(files);
}
