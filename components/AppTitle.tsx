import {h1Style} from '@/utils/styles'
type AppTitleProps = {
  page: string
}
export function AppTitle({page}: AppTitleProps) {
  const appTitle = process.env.NEXT_PUBLIC_APP_TITLE
  return (
    <h1 id="application-title" className={h1Style}>
      {appTitle} {page}
    </h1>
  )
}
