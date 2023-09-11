'use client'

import Link from 'next/link'
import {linkStyle, headerStyle, h1Style} from '@/utils/styles'
import {FaCog, FaStickyNote} from 'react-icons/fa'
import {rowStyle} from '@/utils/styles'
import {useFetch} from '@/hooks/useFetch'
import {useState, useEffect} from 'react'

const tuyo = {
  lyrics: [
    ['Soy el fuego que arde tu piel', 'I am the fire that burns your skin'],
    ['Soy el agua que mata tu sed', 'I am the water that quenches your thirst'],
    ['El castillo, la torre yo soy', 'The castle, the tower I am'],
    ['La espada que guarda el caudal', 'The sword that guards the treasure'],
    ['Tu el aire que respiro yo', 'You, the air that I breathe'],
    ['Y la luz de la luna en el mar', 'And the light on the moon on the sea'],
    ['La garganta que ansio mojar', 'The throat that I long to wet'],
    ['Que temo ahogar de amor', 'That I fear drowning of love'],
    ['¿Y cuales deseos me vas a dar?', 'And which desires will you give me?'],
    [
      'Dices tu: Mi tesoro basta con mirarlo',
      'You say: "My treasure is enough to look at"',
    ],
    ['Y Tuyo Sera, Y Tuyo Sera', 'yours it will be, and yours it will be'],
  ],
}

const tunes = [
  {
    artist: 'Ricardo Amarante',
    tune: 'Toyu',
    link: 'https://youtu.be/GJm7H9IP5SU?si=P23z1JhIDUsCqMbo',
  },
  {
    artist: 'Buena Vista Social Club',
    tune: '',
    link: 'https://youtu.be/V0FoYUcq9FQ?si=QsucBDz_WkPQNWY2',
  },
  {
    artist: 'Buena Vista Social Club',
    tune: 'El Cuarto de Tula',
    link: 'https://youtu.be/rtGSLV2sNKE?si=1cyKb50Erd0kYupA',
  },
]

export default function Home() {
  const [results, setResults] = useState({})
  const {fetchSessions} = useFetch()
  const appTitle = process.env.NEXT_PUBLIC_APP_TITLE

  useEffect(() => {
    async function doFetch() {
      let fetchResults
      fetchResults = await fetchSessions()
      console.log('sessions', fetchResults)
      setResults(fetchResults)
    }
    doFetch()
  }, [])

  return (
    <>
      <header className={headerStyle}>
        {/*<h1 className={h1Style}>{process.env.APP_TITLE}</h1>*/}
        <h1 className={h1Style}>{appTitle}</h1>

        <span>
          [ <Link href="./log">Activity Log</Link> |{' '}
          <Link href="./tracker-events">Tracker Events</Link> ]
        </span>
        <span className={rowStyle}>
          <Link className={linkStyle} href="/notes">
            <FaStickyNote />
          </Link>
          <Link className={linkStyle} href="/settings">
            <FaCog />
          </Link>
        </span>
      </header>
      <h1 className={h1Style}>Tuyo</h1>
      <ul>
        {tuyo.lyrics.map((line, i) => (
          <li key={i} title={line[1]}>
            {line[0]}
          </li>
        ))}
      </ul>
    </>
  )
}
