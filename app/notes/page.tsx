import Link from 'next/link'
import {FaTrash, FaEdit, FaArrowLeft} from 'react-icons/fa'
import {
  linkStyle,
  iconSampleStyle,
  preStyle,
  headerStyle,
  h1Style,
} from '../../utils/styles'

export default function Page() {
  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>Notes</h1>
        <Link href=".." className={linkStyle}>
          <FaArrowLeft />
        </Link>
      </header>

      <pre className={preStyle}>## Add Notes Here</pre>

      <pre className={preStyle}>
        ## FA icons
        <a href="https://react-icons.github.io/react-icons/icons?name=fa">
          react-icons fa
        </a>
        <FaTrash title="FaTrash" className={iconSampleStyle} />
        <FaEdit title="FaEdit" className={iconSampleStyle} />
      </pre>
    </>
  )
}
