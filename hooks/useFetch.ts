const useFetch = () => {
  const protocol = 'http'
  const host = 'localhost'
  const port = '3000'
  const api = 'api'
  const apiPath = `${protocol}://${host}:${port}/${api}`

  const fetchSessions = async () => {
    return fetchData(`${apiPath}/get-sections`)
  }

  const fetchLogs = async () => {
    return fetchData(`${apiPath}/get-logs`)
  }

  const fetchEvents = async () => {
    return fetchData(`${apiPath}/get-events`)
  }

  const fetchData = async (url: string) => {
    console.log('fetchData')

    const result = await fetch(`${url}`)
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
    fetchSessions,
    fetchLogs,
    fetchEvents,
  }
}

export {useFetch}
