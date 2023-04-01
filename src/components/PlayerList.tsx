interface PlayerList {
  title: string
  players?: { id: number; firstName: string }[]
  list?: string[]
}

const PlayerList = ({ title, players, list }: PlayerList) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {players?.map((player) => {
          return <li key={player.id}>{player.firstName}</li>
        })}
        {list?.map((player) => {
          return <li key={player}>{player}</li>
        })}
      </ul>
    </>
  )
}

export default PlayerList
