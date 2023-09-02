import {redirect} from 'next/navigation'
const useData = () => {
  async function SaveEvent(data: FormData) {
    'use server'

    try {
      const summary = data.get('summary')?.valueOf()
      if (typeof summary !== 'string' || summary.length === 0) {
        throw new Error('Invalid Summary')
      }

      const detail = data.get('detail')?.valueOf()
      if (typeof detail !== 'string') {
        throw new Error('Invalid Detail')
      }

      const dateTime = data.get('timestamp')
      if (typeof dateTime !== 'string' || dateTime.length === 0) {
        throw new Error('Invalid Date/Time')
      }
      const date = new Date(dateTime)

      const complete = data.get('complete') === null ? false : true

      const section_id = 2

      const payload = {
        data: {section_id, summary, complete, timestamp: date.getTime(), detail},
      }
      console.log(payload)

      const postFormData = async () => {
        const origin = 'http://localhost:3000' // process.env.APP_ORIGIN
        const response = await fetch(`${origin}/api/create-event`, {
          method: 'POST',
          body: JSON.stringify(payload),
        })

        const data = await response.json()
      }
      postFormData()
    } catch (e) {
      console.log('unable to SaveEvent', e)
    }

    redirect('/tracker-events')
  }

  return {SaveEvent}
}

export {useData}
