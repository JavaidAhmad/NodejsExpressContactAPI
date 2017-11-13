const express=require('express');
const mongoose=require('mongoose');
const crmRoutes = require('./src/routes/crmRoute.js')
const bodyParser=require('body-parser');
const app = express();
const PORT = 3000;

//mongoose setup
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
  useMongoClient : true
});
//body parser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
crmRoutes.routes(app);
app.get('/',(req,res)=>{
  req.send(`Node and express server is running on port ${PORT}`);
});
app.listen(PORT,()=>{
  console.log(`your server is running on port ${PORT}`);
});
