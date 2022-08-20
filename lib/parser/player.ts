const cheerio = require('cheerio');
import { Player } from "../types/player";

export async function fetchPlayers(url: string) {
  const response = await fetch(url);
  const JSONResponse = await response.json();
  const html = JSONResponse.parse.text['*'];
  const $ = cheerio.load(html);

  let players: Player[] = [];
  let position: string = ""

  $('tr', $('.wikitable', html).eq(0).html()).each(function(index: number, element: string) {
    const isPositionRow: boolean = $("th", element).length == 1 ? true : false;

    if(isPositionRow) {
      const parsedPosition = $(element).children().text().trim();
      position = parsedPosition == 'Målvakter' ? 'Målvakt' : parsedPosition
    }
    else {
      const number = $(element).children().eq(0).text().trim();
      const country = $(element).children().eq(1).children().find('a').attr('title');
      const name = $(element).children().eq(2).find('a').text();
      const birthDate = $(element).children().eq(3).find('a').eq(0).text();
      const birthYear = $(element).children().eq(3).find('a').eq(1).text();
      const previousClub = $(element).children().eq(4).find('a').text();
      const clubOfOrigin = $(element).children().eq(5).find('a').text();

      const player: Player = {
        name,
        position,
        number,
        country,
        birthDate,
        birthYear,
        previousClub,
        clubOfOrigin,
      };

      if (isValid(player))
        players.push(player);
      }
  });

  return players;
}

function isValid (player: Player) {
  return !!player.name;
}