import { db } from "../lib/db";
import { triggers } from "../lib/db/schemas";

export default async function Home() {
  const trigger = await db.select().from(triggers);

  return <main></main>;
}
