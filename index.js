var mongoose = require('./db/mongoose')
var Note = require('./model/Note')
var User = require('./model/User')
var {ObjectID} = require('mongodb')
const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')

app.use(cors())
app.use(express.static('build'))

// let notes = [
//     {
//       id: 1,
//       content: "HTML is easy",
//       date: "2019-05-30T17:30:31.098Z",
//       important: true
//     },
//     {
//       id: 2,
//       content: "Browser can execute only Javascript",
//       date: "2019-05-30T18:39:34.091Z",
//       important: false
//     },
//     {
//       id: 3,
//       content: "GET and POST are the most important methods of HTTP protocol",
//       date: "2019-05-30T19:20:14.298Z",
//       important: true
//     }
//   ]

  const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id))
      : 0
    return maxId + 1
  }
  
  app.post('/api/notes', (req, res) => {
  
    // if (!body.content) {
    //   return response.status(400).json({ 
    //     error: 'content missing' 
    //   })
    // }
    var newNote = new Note({
      content:req.body.content

    });
    newNote.save().then((doc)=>{
        res.send(doc)
        console.log(doc)
    },(err)=>{
        res.status(400).send(err)
    })

    // const note = {
    //   content: body.content,
    //   important: body.important || false,
    //   date: new Date(),
    //   id: generateId(),
    // }
  
    // notes = notes.concat(note)
  
    // response.json(note)
  })

app.get('/', (request, response) => {
  response.send('<h1>Hello koko!</h1>')
})

app.get('/api/notes', (req, res) => {
  // console.log(req.params);
  
  Note.find().then((notes)=>{
    res.send({notes})
    },
        (err)=>{
            res.status(400).send(err)
        })
  // res.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  console.log(request.params);

    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    
    if (note) {
      response.json(note)
      console.log('hello');
      
    } else {
      response.status(404).end("doesnt exist")
    }
  })

  app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
  
    response.status(204).end()
  })

  const PORT = process.env.PORT || 3002
  app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})