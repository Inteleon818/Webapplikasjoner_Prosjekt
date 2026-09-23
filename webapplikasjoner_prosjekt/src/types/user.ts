import { Hash } from "node:crypto";
import { Game } from "./game";
import { userSettings } from "./settings";

export type User = {
  readonly id: string,
  username: string,
  password: string,
  gameList?: Game[],
}