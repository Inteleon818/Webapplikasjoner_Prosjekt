import { Game } from "./game";
import { userSettings } from "./settings";

export type User = {
  id: string,
  name: string,
  gameList: Game[],
  userSettings: userSettings
}