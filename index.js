import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import BookingRouter from './router/BookingRouter.js'
import UserRouter from './router/UserRouter.js'
config()
let PORT = process.env.PORT || 5050

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:8080',
    credentials:true
}));

app.use(express.static('public'))

app.use('/users', UserRouter)
app.use('/booking', BookingRouter)
app.listen(PORT, ()=>{
    console.log('http://localhost:'+PORT);
})