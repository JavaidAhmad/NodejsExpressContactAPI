const mongoose = require('mongoose');
const schema = mongoose.Schema;


var ContactSchema = new schema({
  firstName:{
    type:String,
    required:"Enter first name"
  },
  lastName:{
    type:String,
    required:"Enter last name"
  },
  email:{
    type:String
  },
  company:{
    type:String
  },
  phone:{
    type:Number
  },
  createdDate:{
    type:Date,
    default: Date.now
  }
});

module.exports={
  ContactSchema
}
