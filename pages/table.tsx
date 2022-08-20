import { fetchTable } from "../lib/parser/table";
import { Team } from "../lib/types/team";

export default function Home({ table }: Team[]) {
  return (
    <>
      {table.map((team: Team) => (
        <p>
          { team.position } { team.name } { team.playedGames } { team.wins } { team.draws } { team.losses } { team.goalDifferences } { team.points }
        </p>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const table = await fetchTable('https://allsvenskan.se/tabell');

  return {
    props: { table },
  };
}