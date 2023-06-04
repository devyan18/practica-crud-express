const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()

// servir carpeta public
app.use('/public', express.static('public'))

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.use('/api', require('./routes/tasks.routes'))

app.listen(4000, () => {
    console.log('Server is running on port 4000')
}) 