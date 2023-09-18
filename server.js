const express = require('express')
const app = express()

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

app.listen(3000)