import {redirect} from 'next/navigation'
const useData = () => {
  async function SaveEvent(data: FormData) {
    'use server'
    try {
      const id = data.get('id')?.valueOf()

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

      type PostFormDataProps = {
        section_id: number
        summary: string
        complete: boolean
        timestamp: number
        detail: string
      }

      type PutFormDataProps = {
        id: string | {}
        section_id: number
        summary: string
        complete: boolean
        timestamp: number
        detail: string
      }

      type FormDataPostPayload = {
        data: PostFormDataProps
      }

      type FormDataPutPayload = {
        data: PutFormDataProps
      }

      const postFormData = async (payload: FormDataPostPayload) => {
        const origin = process.env.NEXT_PUBLIC_ORIGIN
        const response = await fetch(`${origin}/api/create-event`, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await response.json()
        console.log('postFormData', data, payload)
      }

      const putFormData = async (payload: FormDataPutPayload) => {
        const origin = process.env.NEXT_PUBLIC_ORIGIN
        const response = await fetch(`${origin}/api/update-event`, {
          method: 'PUT',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await response.json()
        console.log('putFormData', data, payload)
      }

      if (id === undefined) {
        postFormData({
          data: {section_id, summary, complete, timestamp: date.getTime(), detail},
        })
      } else {
        putFormData({
          data: {
            id,
            section_id,
            summary,
            complete,
            timestamp: date.getTime(),
            detail,
          },
        })
      }
    } catch (e) {
      console.log('unable to SaveEvent', e)
    }

    redirect('/tracker-events')
  }

  return {SaveEvent}
}

export {useData}
