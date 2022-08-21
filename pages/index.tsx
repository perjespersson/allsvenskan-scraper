import { fetchPlayers } from "../lib/parser/player";
import { Player } from "types";


export default function Home({ players }: Player[]) {
  return (
    <>
      {players.map((player: Player) => (
        <p>
          { player.name } { player.number } { player.position }
        </p>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const players = await fetchPlayers('https://sv.wikipedia.org/w/api.php?action=parse&format=json&page=Malm%C3%B6_FF&section=15&prop=text');

  return {
    props: { players },
  };
}