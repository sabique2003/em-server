require('dotenv').config()
const routes=require('./Routes/routes')
const express=require('express')
const cors=require('cors')
require('./Connection/db')

const empServer=express()

empServer.use(cors())
empServer.use(express.json())
empServer.use(routes)

const PORT = 3000 || process.env.PORT


empServer.listen(PORT,()=>{
    console.log(`Server is Running at ${PORT}`);
    
})