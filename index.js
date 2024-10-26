import express from 'express';
import cors from 'cors'
import connectToMongoDB from './db/db.js';

import authRouter from './routes/auth.js'
import noteRouter from './routes/note.js'


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/note', noteRouter)

const PORT = process.env.PORT || 5000; // Use the PORT environment variable or default to 5000


app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`);
})