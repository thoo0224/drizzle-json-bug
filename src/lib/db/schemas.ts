import { jsonb, pgTable, serial } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

type TriggerPropertyType = "text" | "player";
type TriggerProperty = {
  name: string;
  type: TriggerPropertyType;
};

export const triggers = pgTable("triggers", {
  id: serial("id").primaryKey(),
  properties: jsonb("properties").$type<TriggerProperty[]>(),
});

export const selectTriggersSchema = createSelectSchema(triggers);
export const insertTriggersSchema = createInsertSchema(triggers);

// 'properties' should be TriggerProperty[]
export type Trigger = z.infer<typeof selectTriggersSchema>;
export type NewTrigger = z.infer<typeof selectTriggersSchema>;
