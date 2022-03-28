const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
   pcComponent_id: {type: Schema.Types.ObjectId, ref: 'PcComponents'}, 
   user_id: String,
   quantity: {
      type: Number,
      default: 1
   }
});

const Orders = mongoose.model('Orders', ordersSchema);

export default Orders;