import { server } from './mocks/node.js'

server.listen()

async function app() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const user = await response.json()
  console.log(user)
}

app()
