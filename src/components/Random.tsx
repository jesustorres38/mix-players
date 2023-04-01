import { FormEvent, useState } from "react";
import PlayerList from "./PlayerList";

const Random = () => {
  const [teamA, setTeamA] = useState<string[]>([])
  const [teamB, setTeamB] = useState<string[]>([])
  const [list, setList] = useState('')
  const [showTeams, setShowTeams] = useState(false)

  const shuffle = (array: string[]) => {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const names = list.replace(/[^A-Za-z.áéíóú]+/g, "").split(".").slice(1)
    shuffle(names)
    setTeamA(names.slice(0, names.length / 2))
    setTeamB(names.slice(names.length / 2, names.length))
    
    setShowTeams(true)
  }

  return (
    <div className='wrapper'>
      <div className='card'>
        <h1>Random</h1>
        <form onSubmit={handleSubmit} className='form'>
          <div className='form-group mb-2'>
            <label htmlFor='player'>Players</label>
            <textarea
              name='player'
              className='form-control'
              id='player'
              placeholder='Copy players from whatsapp group!'
              rows={14}
              onChange={(e) => setList(e.target.value)}
            />
          </div>
          <button type='submit' className='btn button-1 mb-2'>
            Add players
          </button>
        </form>

        {showTeams && <PlayerList title='Team A' list={teamA} />}

        {showTeams && <PlayerList title='Team B' list={teamB} />}
      </div>
    </div>
  )
}


export default Random 