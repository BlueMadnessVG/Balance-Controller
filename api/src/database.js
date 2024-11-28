import { Low } from "lowdb";
import { JSONFile } from "lowdb/node"; // Correct import for JSONFile
import { join, dirname } from "path";
import { fileURLToPath } from "url";

let db;
const __dirname = dirname(fileURLToPath(import.meta.url));

export async function createConnection() {
  const file = join(__dirname, "../users.json");
  const adapter = new JSONFile(file);
  db = new Low(adapter, { users: [] });

  await db.read();

  db.data ||= { test: "hello world!" };

  db.write();
  console.log(db);
}

export const getConnection = () => db;
