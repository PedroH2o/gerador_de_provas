// Import the framework and instantiate it
import Fastify from 'fastify'


const app = Fastify()

// Declare a route
app.get('/', async function handler (request, reply) {
  return 'hello world'
})

// Run the server!
try {
    app.listen({ port: 3000 }).then(() => {
    console.log('HTTP Server running!')
})
} catch (err) {
  app.log.error(err)
  process.exit(1)
}