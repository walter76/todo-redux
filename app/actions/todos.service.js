export function createTodosService () {
  const todosUri =
    window.location.protocol + '//' +
    window.location.host +
    '/api/todos'

  function getAll () {
    let options = {
      'method': 'GET',
      'headers': {
        'Content-Type': 'application/json; charset=utf-8'
      },
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

            resolve({
              'success': false,
              'status': response.status,
              'statusText': response.statusText,
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

  function create (todo) {
    window.fetch(todosUri, {
      'method': 'POST',
      'headers': {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json; charset=utf-8'
      },
      'body': JSON.stringify(todo)
    })
  }

  return {
    'getAll': getAll,
    'create': create
  }
}
