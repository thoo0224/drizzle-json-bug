import { Client, Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

import { triggers } from "./schemas";

const pool = new Pool({
  connectionString: "",
});

export const db = drizzle(pool, {
  schema: { ...triggers },
});
