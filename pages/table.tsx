import { Team } from "types";
import { fetchTable } from "../lib/parser/table";
import { Table, Container } from '@mantine/core';

export default function TableStanding({ table }: Team[]) {
  const rows = table.map((team) => (
    <tr key={team.name}>
      <td className="no-border info"><div className="qualification"></div></td>
      <td className="no-border">{team.position}</td>
      <td className="no-border">{team.name}</td>
      <td className="no-border center">{team.playedGames}</td>
      <td className="no-border center">{team.wins}</td>
      <td className="no-border center">{team.draws}</td>
      <td className="no-border center">{team.losses}</td>
      <td className="no-border center">{team.goalDifferences}</td>
      <td className="no-border center">{team.points}</td>
    </tr>
  ));

  return (
    <Container size="sm" px="sm" style={{background: "white", borderRadius: "8px", border: "0.5px solid lightgray", padding: "0"}}>
      <Table striped fontSize="md" verticalSpacing="sm">
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th> Klubb</th>
            <th className="center">SM</th>
            <th className="center">V</th>
            <th className="center">O</th>
            <th className="center">F</th>
            <th className="center">+/-</th>
            <th className="center">P</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>

    </Container>
  );
}

export async function getStaticProps() {
  const table = await fetchTable('https://allsvenskan.se/tabell');

  return {
    props: { table },
  };
}