// generate-list.js
import fs from "fs";

const files = fs
  .readdirSync("./")
  .filter(f => f.endsWith(".html") && f !== "index.html");

fs.writeFileSync("pages.json", JSON.stringify(files, null, 2));
console.log("✅ pages.json 已生成：", files);