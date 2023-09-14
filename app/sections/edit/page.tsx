import {SectionForm} from '@/components/sections/SectionForm'
import {useData} from '@/hooks/useData'

type Params = {
  id: string
}
type ServerSideParams = {
  searchParams: Params
}
export default function Page({searchParams}: ServerSideParams) {
  const {SaveSection} = useData()
  return <SectionForm SaveSection={SaveSection} id={searchParams.id} />
}
