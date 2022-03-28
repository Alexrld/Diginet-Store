import express from 'express';
import Orders from '../models/Orders';

const router = express.Router();

router.get('/', async (req, res) => {
   const query = await Orders.find();
   res.status(200).send(query);
})
router.get('/:id', async (req, res) => {
   const query = await Orders.findById(req.params.id);
   res.status(200).send(query);
})
router.post('/', async (req, res) => {
   const query = await Orders.create(req.body);
   res.status(201).send(query);
})
router.put('/:id', async (req, res) => {
   await Orders.findByIdAndUpdate(req.params.id, req.body);
   res.sendStatus(204);
})
router.delete('/:id', async (req, res) => {
   await Orders.findByIdAndDelete(req.params.id);
   res.sendStatus(204);
})

export default router;