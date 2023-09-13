import Link from 'next/link'
import {useFiles} from '@/hooks/useFiles'
import {FaArrowLeft} from 'react-icons/fa'
import {linkStyle, form_field, headerStyle, h1Style, hr} from '@/utils/styles'

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

async function CreateEvent(data: FormData) {
  'use server'
  const {updateEnvFiles} = useFiles()
  updateEnvFiles(data)
}

export default function Page() {
  const appTitle = process.env.NEXT_PUBLIC_APP_TITLE

  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>Settings</h1>
        <Link href=".." className={linkStyle}>
          <FaArrowLeft />
        </Link>
      </header>
      <form action={CreateEvent} className="flex gap-2 flex-col">
        <span>[.env.development.local] App Title</span>
        <input
          type="text"
          name="title"
          defaultValue={appTitle}
          className={form_field}
        />
        <div className="flex gap-1 justify-end">
          <button type="submit" className={linkStyle}>
            Save Updates
          </button>
        </div>
      </form>
      <hr className={hr} />
      <ul>
        <li>
          <Link href="/sections">Sections</Link>
        </li>
        <li>
          <Link href="/db-tables">Database Tables</Link>
        </li>
      </ul>
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
