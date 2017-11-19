export function createTodosService () {
  const todosUri =
    window.location.protocol + '//' +
    window.location.host +
    '/api/todos'

  function getAll () {
    let headers = new window.Headers()
    headers.append('content-type', 'application/json; charset=utf-8')

    let options = {
      'method': 'GET',
      'headers': headers,
      'cache': 'default'
    }

    let request = new window.Request(todosUri, options)

    return new Promise(
      (resolve, reject) => {
        window.fetch(request)
        .then((response) => {
          if (!response.ok) {
            console.log('status: ', response.status)
            console.log(response.statusText)

            reject({
              'success': false,
              'items': []
            })
          }

          return response.json()
        })
        .then((json) => {
          resolve({
            'success': true,
            'items': json
          })})})
  }

  return {
    'getAll': getAll
  }
}
