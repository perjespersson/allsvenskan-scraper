import { Team } from "types";
import { fetchTable } from "../lib/parser/table";
import { Table, Container } from '@mantine/core';

export default function Home({ table }: Team[]) {
  const rows = table.map((team) => (
    <tr key={team.name}>
      <td style={{borderBottom: "none"}}>{team.position}</td>
      <td style={{borderBottom: "none"}}>{team.name}</td>
      <td style={{textAlign: "center", borderBottom: "none"}}>{team.playedGames}</td>
      <td style={{textAlign: "center", borderBottom: "none"}}>{team.wins}</td>
      <td style={{textAlign: "center", borderBottom: "none"}}>{team.draws}</td>
      <td style={{textAlign: "center", borderBottom: "none"}}>{team.losses}</td>
      <td style={{textAlign: "center", borderBottom: "none"}}>{team.goalDifferences}</td>
      <td style={{textAlign: "center", borderBottom: "none"}}>{team.points}</td>
    </tr>
  ));

  return (
    <Container size="sm" px="sm" style={{background: "white", borderRadius: "8px", border: "0.5px solid lightgray", padding: "0"}}>
      <Table striped style={{fontFamily: "'Poppins', sans-serif"}} fontSize="md" verticalSpacing="sm">
        <thead>
          <tr>
            <th style={{borderBottom: "none"}}>#</th>
            <th style={{borderBottom: "none"}}> Klubb</th>
            <th style={{textAlign: "center", borderBottom: "none"}}>SM</th>
            <th style={{textAlign: "center", borderBottom: "none"}}>V</th>
            <th style={{textAlign: "center", borderBottom: "none"}}>O</th>
            <th style={{textAlign: "center", borderBottom: "none"}}>F</th>
            <th style={{textAlign: "center", borderBottom: "none"}}>+/-</th>
            <th style={{textAlign: "center", borderBottom: "none"}}>P</th>
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