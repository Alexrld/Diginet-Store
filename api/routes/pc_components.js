import express from 'express';
import PcComponents from '../models/PcComponents';

const router = express.Router();

router.get('/', async (req, res) => {
   const query = await PcComponents.find();
   res.status(200).send(query);
})
router.get('/:id', async (req, res) => {
   const query = await PcComponents.findById(req.params.id);
   res.status(200).send(query);
})
router.post('/', async (req, res) => {
   const query = await PcComponents.create(req.body);
   res.status(201).send(query);
})
router.put('/:id', async (req, res) => {
   await PcComponents.findByIdAndUpdate(req.params.id, req.body);
   res.sendStatus(204);
})
router.delete('/:id', async (req, res) => {
   await PcComponents.findByIdAndDelete(req.params.id);
   res.sendStatus(204);
})

export default router;