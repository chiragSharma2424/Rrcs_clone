import express from 'express';
import cors from 'cors';
import { connectToDB } from './database/db';
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    return res.json({
        msg: "home route"
    })
});

app.listen(port, () => {
    console.log(`server is up on ${port}`);
})