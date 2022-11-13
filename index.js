const express= require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/api/user',(req,res)=>{
    res.json({name: 'amir'})
})