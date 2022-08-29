import express from 'express';
import cors from 'cors'
import router from './routers/routers'

const app = express();
const port = 9290;

app.use(cors());
app.use(express.json());
app.use(router)
app.listen(port, () => console.log(`Server listening on port ${port}`));