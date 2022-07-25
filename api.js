import Fastify from "fastify";

// log connections
const fastify = Fastify({ logger: true });

// curl http://127.0.0.1:3000/ -> {"success":true}
fastify.get("/", (req, res) => {
    const message = { success: true }
    res.send(message)
})

// curl http://127.0.0.1:3000/hello/angel -X POST -> {"success":true, "message":"hello angel"}
fastify.post("/hello/:name", (req, res) => {
    const name = req.params.name
    const message = { success: true, message: `Hello ${name}`}
    res.send(message)
})

// curl http://127.0.0.1:3000/body -H "Content-Type: application/json" -d '{"name": "angel"}' -> { success: true, message: 'Hello angel' }
fastify.post("/body", (req, res) => {   
    const { name } = req.body
    const message = { success: true, message: `Hello ${name}`}
    res.send(message)
})


// start server
const start = async () => {
    
    try {
      await fastify.listen({ port: 3000 })
    } 
    
    catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }

}

start()