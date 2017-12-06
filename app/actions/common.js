export function post (baseUri, action, payload) {
  return window.fetch(baseUri + '/' + action, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(payload)
  })
}
