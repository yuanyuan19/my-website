import fs from "fs";
import path from "path";

export default function handler(req, res) {
  // 读取当前目录下所有文件
  const dir = path.resolve("./");
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".html") && f !== "index.html");

  res.status(200).json(files);
}
