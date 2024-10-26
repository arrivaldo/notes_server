import express from 'express';
import cors from 'cors'
import connectToMongoDB from './db/db.js';

import authRouter from './routes/auth.js'
import noteRouter from './routes/note.js'


const app = express()
app.use(cors({
    origin: "https://notes-frontend-beryl.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    credentials: true // If you're using cookies or sessions
}))
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/note', noteRouter)



app.listen(5000, () => {
    connectToMongoDB()
    console.log("Server is running")
})