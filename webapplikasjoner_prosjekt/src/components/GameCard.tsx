import { Game } from "@/types/game";

export function GameCard({ game }: { game: Game }) {
  const { title, boxArtImageURL, genres, releaseDate } = game;

  return (
    <article className="pt-10">
      <img src={boxArtImageURL} alt={`${title} box-art`} width="300" height="300" />
      <section className="bg-[#d7d7d7]">
        <p><span className="font-bold">Title: </span>{title}</p>
        <p><span className="font-bold">Genres: </span>{genres.join(", ")}</p>
        <p><span className="font-bold">Release Date: </span>{releaseDate.toLocaleDateString()}</p>
      </section>
    </article>
  )
}