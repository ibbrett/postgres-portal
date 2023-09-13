const useFetch = () => {
  const api = 'api'
  const origin = process.env.NEXT_PUBLIC_ORIGIN
  const apiPath = `${origin}/${api}`

  const fetchSections = async () => {
    return fetchData(`${apiPath}/get-sections`)
  }

  const fetchSection = async (section_id: string | null) => {
    return fetchData(`${apiPath}/get-section?section_id=${section_id}`)
  }

  const fetchLogs = async () => {
    return fetchData(`${apiPath}/get-logs`)
  }

  const fetchEvents = async (section_id: string | null) => {
    if (section_id && section_id.length) {
      return fetchData(`${apiPath}/get-events?section_id=${section_id}`)
    } else {
      return fetchData(`${apiPath}/get-events`)
    }
  }

  const fetchActiveEvents = async (section_id: string | null) => {
    return fetchData(`${apiPath}/get-events?section_id=${section_id}&complete=0`)
  }

  const fetchArchivedEvents = async (section_id: string | null) => {
    return fetchData(`${apiPath}/get-events?section_id=${section_id}&complete=1`)
  }

  const fetchData = async (url: string) => {
    const result = await fetch(`${url}`, {cache: 'no-store'})
      .then(response => response.json())
      .then(result => {
        return result
      })
      .catch(err => {
        console.log('fetch error', err)
        return {}
      })

    return result
  }

  return {
    fetchSection,
    fetchSections,
    fetchLogs,
    fetchEvents,
    fetchActiveEvents,
    fetchArchivedEvents,
  }
}

export {useFetch}
