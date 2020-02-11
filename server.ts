import express from "express"
import path from "path"

const server = express()

server.get('/', (_req: any, res: any) => {
  return res.sendFile(path.join(__dirname, '/public/index.html'))
})

server.listen(3000)
console.log('Started! http://localhost:3000')
