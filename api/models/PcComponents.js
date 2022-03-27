const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pcComponentsSchema = new Schema({
   name: String, 
   desc:String, 
   price: Number, 
   img: String, 
   category: String, 
   subcategory: String, 
   quantity: Number
});

const PcComponents = mongoose.model('PcComponents', pcComponentsSchema);

export default PcComponents;