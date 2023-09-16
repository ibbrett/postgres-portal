import {
  linkStyle,
  formField,
  formButtonContainer,
  formStyle,
  headerStyle,
  h1Style,
  hr,
} from '@/utils/styles'
import {useFiles} from '@/hooks/useFiles'

async function CreateEvent(data: FormData) {
  'use server'
  const {updateEnvFiles} = useFiles()
  updateEnvFiles(data)
}

export function SettingsForm() {
  const appTitle = process.env.NEXT_PUBLIC_APP_TITLE
  return (
    <>
      <div className={headerStyle}>
        <h1 className={h1Style}>[.env]</h1>
      </div>
      <form action={CreateEvent} className={formStyle}>
        <span>[.env.development.local] App Title</span>
        <input
          type="text"
          name="title"
          defaultValue={appTitle}
          className={formField}
        />
        <div className={formButtonContainer}>
          <button type="submit" className={linkStyle}>
            Save Updates
          </button>
        </div>
      </form>
    </>
  )
}
