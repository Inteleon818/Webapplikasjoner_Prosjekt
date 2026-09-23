import { sqliteTable, text, int } from "drizzle-orm/sqlite-core";
import { games } from "./game-schema"

export const users = sqliteTable("users", {
  id: int().primaryKey({ autoIncrement: true }),
  username: text().notNull(),
  password: text().notNull(),
  gameList: text().notNull().references(() => games.id, { onDelete: "cascade" }),
});

export type User = typeof users.$inferSelect;
export type CreateUser = typeof users.$inferInsert;
