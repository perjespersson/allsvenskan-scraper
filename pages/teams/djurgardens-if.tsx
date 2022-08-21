import { fetchPlayers } from "../../lib/parser/player";
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
  const players = await fetchPlayers('https://sv.wikipedia.org/w/api.php?action=parse&format=json&page=Djurg%C3%A5rdens_IF_Fotboll&section=22&prop=text');

  return {
    props: { players },
  };
}