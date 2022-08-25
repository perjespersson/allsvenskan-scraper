import { Team } from "types";
import { fetchTable } from "../lib/parser/table";
import { fetchMarathonTable } from "../lib/parser/marathonTable";
import { fetchGoldTable } from "../lib/parser/goldTable";
import { Table, Container, Grid } from '@mantine/core';
import Qualification from "lib/components/Qualification";

export default function TableStanding({ table, marathonTable, goldTable }: Team[]) {
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

  const rowsMarathon = marathonTable.map((team) => (
    <tr key={team.name}>
      <td className="no-border">{team.position}</td>
      <td className="no-border">{team.name}</td>
      <td className="no-border center">{team.points}</td>
    </tr>
  ));

  const rowsGold = goldTable.map((team) => (
    <tr key={team.name}>
      <td className="no-border">{team.position}</td>
      <td className="no-border">{team.name}</td>
      <td className="no-border center">{team.numberOfGolds}</td>
    </tr>
  ));

  return (
    <Container size="xl">
      <Grid gutter="xl">
        <Grid.Col xl={9} sm={12}>
          <Table striped fontSize="md" verticalSpacing="sm" style={{borderRadius: "8px", border: "0.5px solid lightgray", padding: "0" }}>
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

          <div style={{ display: "flex", alignItems: "center" }}>
            <Qualification qualification={"CL-Kval"} color={"lightgreen"}></Qualification>
            <Qualification qualification={"ECL-Kval"} color={"lightblue"}></Qualification>
            <Qualification qualification={"Nedflyttnings-Kval"} color={"orange"}></Qualification>
            <Qualification qualification={"Nedflyttning"} color={"red"}></Qualification>
          </div>
        </Grid.Col>

        <Grid.Col xl={3} sm={12}>
          <Grid>
            <Grid.Col span={12}>
              <Table striped fontSize="md" verticalSpacing="sm" style={{borderRadius: "8px", border: "0.5px solid lightgray", padding: "0" }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th> Klubb</th>
                  <th className="center">P</th>
                </tr>
              </thead>
              <tbody>{rowsMarathon}</tbody>
            </Table>
            </Grid.Col>
            <Grid.Col span={12}>
              <Table striped fontSize="md" verticalSpacing="sm" style={{borderRadius: "8px", border: "0.5px solid lightgray", padding: "0" }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th> Klubb</th>
                    <th className="center">G</th>
                  </tr>
                </thead>
                <tbody>{rowsGold}</tbody>
              </Table>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const table = await fetchTable('https://allsvenskan.se/tabell');
  const marathonTable = await fetchMarathonTable('https://sv.wikipedia.org/w/api.php?action=parse&format=json&page=Fotbollsallsvenskans_maratontabell&section=2&prop=text');
  const goldTable = await fetchGoldTable('https://sv.wikipedia.org/w/api.php?action=parse&format=json&page=Svenska_m%C3%A4stare_i_fotboll&section=8&prop=text');
  return {
    props: { table, marathonTable, goldTable },
  };
}