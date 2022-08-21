import { fetchPlayers } from "../../lib/parser/player";
import { Player } from "types";

export default function Home({ players }: Player) {
  return (
    <table>
      <thead>
        <tr>
          <th>Namn</th>
          <th>Nummer</th>
          <th>Position</th>
          <th>Ursprungsklubb</th>
          <th>Förgåendeklubb</th>
        </tr>
      </thead>
      <tbody>
      {players.map((player: Player) => (
        <tr>
          <td>{ player.name }</td>
          <td>{ player.number }</td>
          <td>{ player.position }</td>
          <td>{ player.clubOfOrigin }</td>
          <td>{ player.previousClub }</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export async function getStaticProps() {
  const players = await fetchPlayers('https://sv.wikipedia.org/w/api.php?action=parse&format=json&page=Malm%C3%B6_FF&section=15&prop=text');

  return {
    props: { players },
  };
}