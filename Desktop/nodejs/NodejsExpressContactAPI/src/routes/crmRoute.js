const {addNewContact,getContacts,getContactWithID,updateContact,deleteContact}=require('../controllers/crmController.js');

const routes = (app)=>{
  app.route('/contact')
  .get((req,res,next)=>{
    //middleware
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request from:${req.method}`);
    next();
  },getContacts)
  .post(addNewContact);

  app.route('/contact/:contactID')
  //get contact respected to contact id
  .get(getContactWithID)

  //put call:  update existing contact with id
  .put(updateContact)
  //delele call: deleleexisting contact with id
  .delete(deleteContact);
}

module.exports={
  routes
}
