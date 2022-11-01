const express = require('express')
const app = express()
const homeRoutes = require('./routes/home')
const channelsRoute = require('./routes/channels')
const cors = require('cors')
app.use(cors())
require('dotenv').config({ path: './config/.env' })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
// app.use('/channels', channelsRoute)


app.listen(process.env.PORT, () => {
   console.log("server running, betta go catch it!")
})