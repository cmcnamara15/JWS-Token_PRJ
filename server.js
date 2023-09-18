const express = require('express')
const app = express()

const jwt =require('jsonwebtoken')

app.use(express.json)


const posts = [
    {
        username: 'Chris',
        title: 'Post 1'
    },
    {
        username: 'Kyle',
        title: 'Post 2'
    },
]

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.post('login', (req, res)  => {
    // Authenticate User
})

app.listen(3000)