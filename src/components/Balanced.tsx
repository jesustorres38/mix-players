import { FormEvent, useState } from "react"
import "../App.css"
import PlayerList from "./PlayerList"

const Balanced = () => {
  const [player, setPlayer] = useState("")
  const [nemesis, setNemesis] = useState("")
  const [teamA, setTeamA] = useState<{ id: number; firstName: string }[]>([])
  const [teamB, setTeamB] = useState<{ id: number; firstName: string }[]>([])
  const [players, setPlayers] = useState<{ id: number; firstName: string }[]>(
    []
  )
  const [showTeams, setShowTeams] = useState(false)

  const setTeamsAB = () => {
    if (Math.random() * 10 > 5) {
      setTeamA([
        ...teamA,
        {
          id: Math.random(),
          firstName: player,
        },
      ])
      setTeamB([
        ...teamB,
        {
          id: Math.random(),
          firstName: nemesis,
        },
      ])
    } else {
      setTeamA([
        ...teamA,
        {
          id: Math.random(),
          firstName: nemesis,
        },
      ])
      setTeamB([
        ...teamB,
        {
          id: Math.random(),
          firstName: player,
        },
      ])
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(player)
    if (player !== "" && nemesis !== "") {
      setPlayers([
        ...players,
        {
          id: Math.random(),
          firstName: player,
        },
        {
          id: Math.random(),
          firstName: nemesis,
        },
      ])
      setTeamsAB()
    }
    setPlayer("")
    setNemesis("")
    setShowTeams(false)
  }

  return (
    <div className='wrapper'>
      <div className='card'>
        <h1>Balanced</h1>
        <form onSubmit={handleSubmit} className='form'>
          <div className='form-group mb-2'>
            <label htmlFor='player'>Player</label>
            <input
              type='text'
              name='player'
              className='form-control'
              id='player'
              onChange={(e) => setPlayer(e.target.value)}
              placeholder='Player name'
              value={player}
            />
          </div>
          <div className='form-group mb-4'>
            <label htmlFor='nemesis'>Nemesis</label>
            <input
              type='text'
              name='nemesis'
              className='form-control'
              id='nemesis'
              onChange={(e) => setNemesis(e.target.value)}
              placeholder='Nemesis name'
              value={nemesis}
            />
          </div>
          <button type='submit' className='btn button-1 mb-2'>
            Add players
          </button>
        </form>

        <div className='form'>
          <button
            className='btn button-2 mb-4'
            onClick={() => setShowTeams(true)}
          >
            Show balanced teams
          </button>
        </div>

        {players && <PlayerList title='List of Players' players={players} />}

        {showTeams && <PlayerList title='Team A' players={teamA} />}

        {showTeams && <PlayerList title='Team B' players={teamB} />}
      </div>
    </div>
  )
}

export default Balanced
