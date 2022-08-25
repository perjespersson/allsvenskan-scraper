import { MarathonTeam } from "types";
const cheerio = require('cheerio');

export async function fetchMarathonTable(url: string) {
  const response = await fetch(url);
  const JSONResponse = await response.json();
  const html = JSONResponse.parse.text['*'];
  const $ = cheerio.load(html);

  let marathonTeams: MarathonTeam[] = [];

  $('tr', html).each(function(index: number, element: string) {
    if (index > 5) return

    const position = $(element).children().eq(0).text();
    const name = $(element).children().eq(2).find('a').text();
    const points = $(element).children().eq(10).text();

    const marathonTeam: MarathonTeam = {
      name,
      position,
      points,
    };

    if (isValid(marathonTeam))
      marathonTeams.push(marathonTeam);
  });

  return marathonTeams;
}

function isValid (marathonTeam: MarathonTeam) {
  return !!marathonTeam.name;
}