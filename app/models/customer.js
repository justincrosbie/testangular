var mongoose = require('mongoose')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]
  , Schema = mongoose.Schema;
 
var CustomerSchema = new Schema({
  name: {type : String},
  subscription: {type: Schema.ObjectId, ref: 'Subscription'},
  start: {type : Date},
  end: {type : Date},
  created: {type : Date},
  createdby: {type: Schema.ObjectId, ref: 'User'},
  modified: {type : Date},
  modifiedby: {type: Schema.ObjectId, ref: 'User'}
});
 
 CustomerSchema.statics = {
   load: function (id, cb) {
     this.findOne({ _id : id }).populate('subscription').exec(cb);
   }
 };
 
mongoose.model('Customer', CustomerSchema);