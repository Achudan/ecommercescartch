const ecomm = require('../Model/schema');

exports.signup = async (req, res, next) => {
  
  const { name, emailid, password, phonenumber } = req.body;
  console.log(req.body);
  let user = {};
  user.name = name;
  user.emailid = emailid;
  user.password = password;
  user.phonenumber = phonenumber;
  
  // await ecomm.userModel.create(user)
  // console.log("db created for user")
  let userModel = new ecomm.userModel(user);
  await userModel.save();
  res.json(userModel);
}
exports.signin =async(req, res,next)=>{
  console.log(req.body)
  ecomm.userModel.findOne({emailid:req.body.emailid},(err,obj)=>{
    console.log(obj)
    if(obj==null)
      res.status(401).send("Please Register")
    else
      if(obj.password===req.body.password){
        res.status(200).send(obj._id)
      }
      else
        res.status(401).send("Enter Correct Password")
  })
} 
