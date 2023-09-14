import {SectionForm} from '@/components/sections/SectionForm'
import {useData} from '@/hooks/useData'
export default function Page() {
  const {SaveSection} = useData()
  return <SectionForm SaveSection={SaveSection} id={null} />
}
