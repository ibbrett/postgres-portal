import {h1Style} from '@/utils/styles'
export function AppTitle() {
  const appTitle = process.env.NEXT_PUBLIC_APP_TITLE
  return <h1 className={h1Style}>{appTitle}</h1>
}
