const express = require('express')
const restful = require('node-restful')
const server = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// Middlewares
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors())

// Database
const mongoose = restful.mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

// ODM
const Client = restful.model('Client', {
  name: { type: String, required: true }
})

// Rest API
Client.methods(['get', 'post', 'put', 'delete'])
Client.updateOptions({ new: true, runValidators: true })

// Routers
Client.register(server, '/clients')


server.get('/', (req, res, next) => {
  res.send('Backend!')
});

server.listen(3000);