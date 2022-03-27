const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
   pcComponent_id: {type: Schema.Types.ObjectId, ref: 'PcComponents'}, 
   user_id: String,
   quantity: Number
});

const Orders = mongoose.model('Orders', ordersSchema);