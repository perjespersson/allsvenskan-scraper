import { GoldTeam } from "types";
const cheerio = require('cheerio');

export async function fetchGoldTable(url: string) {
  const response = await fetch(url);
  const JSONResponse = await response.json();
  const html = JSONResponse.parse.text['*'];
  const $ = cheerio.load(html);

  let marathonTeams: GoldTeam[] = [];

  $('tr', html).each(function(index: number, element: string) {


    const position = index.toString()
    const name = $(element).children().eq(0).find('a').text();
    const numberOfGolds = $(element).children().eq(1).text();

    const goldTeam: GoldTeam = {
      name,
      position,
      numberOfGolds,
    };

    if (isValid(goldTeam))
      marathonTeams.push(goldTeam);
  });

  return marathonTeams;
}

function isValid (goldTeam: GoldTeam) {
  return !!goldTeam.name;
}