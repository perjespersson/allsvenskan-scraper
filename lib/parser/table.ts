import { Team } from "types";
const cheerio = require('cheerio');

export async function fetchTable(url: string) {
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  let teams: Team[] = [];

  $('tr.normal', $('.show__desktop', html)).each(function(index: number, element: string) {
    const position = $(element).children().eq(0).text()
    const name = $(element).children().eq(3).text()
    const playedGames = $(element).children().eq(4).text()
    const wins = $(element).children().eq(5).text();
    const draws = $(element).children().eq(6).text();
    const losses = $(element).children().eq(7).text();
    const goalDifferences = $(element).children().eq(8).text();
    const points = $(element).children().eq(9).text();

    const team: Team = {
      name,
      position,
      playedGames,
      wins,
      draws,
      losses,
      goalDifferences,
      points,
    };

    if (isValid(team))
      teams.push(team);
  });

  return teams;
}

function isValid (team: Team) {
  return !!team.name;
}