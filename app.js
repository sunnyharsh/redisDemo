const express = require('express')
const axios= require('axios')
const cors= require('cors');
const { adminRoutes } = require('./routes/adminRoutes');

const app =express();
app.use(express.urlencoded({extended:true}))
app.use(cors());

const PORT=1234

app.use('/', adminRoutes)

app.listen(PORT, ()=>{
    console.log(`server connect on ${PORT} 🔥`)
})
