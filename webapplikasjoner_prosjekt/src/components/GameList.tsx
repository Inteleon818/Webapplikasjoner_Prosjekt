import { GameCard } from "@/components/GameCard";
import { games } from "@/data/games";

export function GameList() {
  return (
    <main className="flex flex-row flex-wrap justify-evenly gap-10">
      {games.map((game) => <GameCard key={game.id} game={game} />)}
    </main>
  )
}