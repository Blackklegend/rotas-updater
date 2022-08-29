import express from 'express';
import { fecthNPull } from '../services/service'; 

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({
    status: "All systems operational"
  })
})

router.post('/update_rota', (req,res) => {
  res.status(200).type('json').send(fecthNPull(req.body))
})

export default router;