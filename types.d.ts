declare module '*module.css' {
  const styles: {
    [className: string]: string
  }
  export default styles
}

export type Team = {
  name: string,
  position: string,
  playedGames: string,
  wins: string,
  draws: string,
  losses: string,
  goalDifferences: string,
  points: string,
}

export type Player = {
  name: string,
  position: string,
  number: string,
  country: string,
  birthDate: string,
  birthYear: string,
  previousClub: string,
  clubOfOrigin: string,
}