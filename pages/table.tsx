import { Team } from "types";
import { fetchTable } from "../lib/parser/table";
import { Table, Container } from '@mantine/core';

export default function Home({ table }: Team[]) {
  const rows = table.map((team) => (
    <tr key={team.name}>
      <td>{team.position}</td>
      <td>{team.name}</td>
      <td style={{textAlign: "center"}}>{team.playedGames}</td>
      <td style={{textAlign: "center"}}>{team.wins}</td>
      <td style={{textAlign: "center"}}>{team.draws}</td>
      <td style={{textAlign: "center"}}>{team.losses}</td>
      <td style={{textAlign: "center"}}>{team.goalDifferences}</td>
      <td style={{textAlign: "center"}}>{team.points}</td>
    </tr>
  ));

  return (
    <Container size="sm" px="sm" style={{background: "white", borderRadius: "8px", border: "0.5px solid lightgray"}}>
      <Table fontSize="md" verticalSpacing="sm">
        <thead>
          <tr>
            <th>#</th>
            <th> Klubb</th>
            <th style={{textAlign: "center"}}>SM</th>
            <th style={{textAlign: "center"}}>V</th>
            <th style={{textAlign: "center"}}>O</th>
            <th style={{textAlign: "center"}}>F</th>
            <th style={{textAlign: "center"}}>MS</th>
            <th style={{textAlign: "center"}}>P</th>
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