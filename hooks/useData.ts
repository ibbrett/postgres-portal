import {redirect} from 'next/navigation'
//import {useRouter} from 'next/navigation'
const useData = () => {
  async function SaveSection(data: FormData) {
    'use server'

    const id = data.get('id')?.valueOf()

    type PostFormDataProps = {
      name: string
      type: string
    }

    type PutFormDataProps = {
      id: string | {}
      name: string
      type: string
    }

    type FormDataPostPayload = {
      data: PostFormDataProps
    }

    type FormDataPutPayload = {
      data: PutFormDataProps
    }

    try {
      const name = data.get('name')?.valueOf()
      if (typeof name !== 'string') {
        throw new Error('Invalid Name')
      }

      const type = data.get('type')?.valueOf()
      if (typeof type !== 'string') {
        throw new Error('Invalid Type')
      }

      const postFormData = async (payload: FormDataPostPayload) => {
        console.log('payload', payload)
        const origin = process.env.NEXT_PUBLIC_ORIGIN
        const response = await fetch(`${origin}/api/create-section`, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await response.json()
      }

      const putFormData = async (payload: FormDataPutPayload) => {
        const origin = process.env.NEXT_PUBLIC_ORIGIN
        const response = await fetch(`${origin}/api/update-section`, {
          method: 'PUT',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await response.json()
      }

      if (id === undefined) {
        postFormData({
          data: {name, type},
        })
      } else {
        putFormData({
          data: {
            id,
            name,
            type,
          },
        })
      }
    } catch (e) {
      console.log('unable to save section', e)
    }

    redirect('/sections')
    // return redirect('/sections')
  }

  async function SaveEvent(data: FormData) {
    'use server'

    type PostFormDataProps = {
      section_id: string | {} | undefined
      summary: string
      complete: boolean
      timestamp: number
      detail: string
    }

    type PutFormDataProps = {
      id: string | {}
      section_id: string | {} | undefined
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

    // const router = useRouter()
    const id = data.get('id')?.valueOf()
    const section_id = data.get('section_id')?.valueOf()

    const postFormData = async (payload: FormDataPostPayload) => {
      //try {
      const origin = process.env.NEXT_PUBLIC_ORIGIN
      //const origin = 'http://127.0.0.1:3000'
      const response = await fetch(`${origin}/api/create-event`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })

      const data = await response.json()
      // console.log('data', data)
      return data
      //} catch (e) {
      // console.error('Bullshit error', e)
      //}
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
      // console.log('data', data)
      return data
    }

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

      let responseData
      if (id === undefined) {
        responseData = await postFormData({
          data: {section_id, summary, complete, timestamp: date.getTime(), detail},
        })
        //redirect('/sections/event?section_id=' + section_id)
      } else {
        responseData = await putFormData({
          data: {
            id,
            section_id,
            summary,
            complete,
            timestamp: date.getTime(),
            detail,
          },
        })
        //redirect('/sections/event?section_id=' + section_id)
      }

      console.log('responseData', JSON.stringify(responseData.events.rows, null, 2))
    } catch (e) {
      console.log('unable to save event', e)
    }

    // redirect('/sections/event?section_id=' + section_id)
    redirect('/sections/event?section_id=' + section_id)
    // router.push('/sections/event?section_id=' + section_id)
  }

  return {SaveEvent, SaveSection}
}

export {useData}
