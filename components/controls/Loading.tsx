import {Spinner} from '@/components/controls/Spinner'

type LoadingProps = {
  msg: string
  margin: string
  spinnerColor: string
}

export const Loading = ({msg, margin, spinnerColor}: LoadingProps) => {
  return (
    <>
      <h3 style={{marginBottom: margin}}>{msg}</h3>
      <Spinner spinnerColor={spinnerColor} />
    </>
  )
}
