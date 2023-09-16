import Link from 'next/link'
import {h1Style, hr} from '@/utils/styles'
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

export function Tuyo() {
  return (
    <>
      <hr className={hr} />
      <h1 className={h1Style}>
        <Link
          href="https://youtu.be/GJm7H9IP5SU?si=P23z1JhIDUsCqMbo"
          rel="noopener noreferrer"
          target="_blank"
        >
          {' '}
          Tuyo{' '}
        </Link>
      </h1>
      <ul>
        {tuyo.lyrics.map(line => (
          <li key={line[0]} title={line[1]}>
            {line[0]}
          </li>
        ))}
      </ul>
    </>
  )
}
