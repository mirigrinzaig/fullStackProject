const Users = require("../models/Users");
const bcrypt=require("bcrypt")
// Create:
const createNewUser = async (req, res) => {
  const { name, password, userName, email, phone } = req.body;

  // Validate required fields:
  if (!name || !userName || !password) {
    return res.status(400).json({ error: "Missing required fields" + name + " ," + userName + " , " + password });
  }

  // Validate unique fields (case-insensitive)
  const existingUser = await Users.findOne({userName}).lean();
  if (existingUser) {
    return res.status(409).json({ error: "Username already exists" });
  }

  //צריך לקבל הרשאה? לא נראה לי! כיון שמשתמש לא יכול לשנות לו הרשאה
  // // Validate roles from enum:
  // if (roles!=null&&roles!=="admin"&&roles!=="user") {
  //   roles = "user";
  // }
  const hashPwd=await bcrypt.hash(password,10)

  const user = await Users.create({ name, userName, email, phone, password:hashPwd });
  res.json(` ${user.name}  created!!`);
};

// Get All:
const getAllUsers = async (req, res) => {
  const users = await Users.find({}, {password: 0}).lean();
  if (!users)
    return res.status(400).json({ error: "No users" });
  res.json(users);
};

// Update:
//We can to change the roles? maby for the shopkeapers?
const update = async (req, res) => {
  const {_id,name,password,userName, email, phone,roles} = req.body;
  //שליפת המשתמש הקיים
  //אולי צריך לשנות לשליפה עפ"י id?
  const existingUser = await Users.findById(_id).lean();
//if not exist user to update:
  if (!existingUser) {
    return res.status(400).json({ error: "No user found" });
  }
  // //אולי צריך לשנות לשגיאה כללית יותר
  // if (existingUser._id !=_id) {
  //   return res.status(400).json({ error: "User ID does not match" });
  // }
  // Validate unique fields (only if userName has changed):
  if (userName !== existingUser.userName) {
    const usernameExists = await Users.findOne({ userName });
    if (usernameExists) {
      return res.status(400).json({ error: "Username already exists" });
    }
  }
  //here is only admin! so, he can change the roles...
  //change here the role?
  if(roles){
    if(roles!=='user'&&roles!=='admin'){
      return res.status(400).json({ error: "The role is unvalid!!" });
    }
  }
   let hashPwd;
  //if password can be change
  if(password){
    hashPwd=await bcrypt.hash(password,10)
  }
  const user = await Users.findById(_id);
  user.name = name
  user.userName = userName
  user.email = email
  user.phone = phone
  user.password=hashPwd||user.password
  user.roles=roles

  const updateUser = await user.save()
  res.json(`${updateUser.name} updated!!`);
};
// Delete:
//לא בטוח שיש צורך
const deleteUser = async (req, res) => {
  const {_id } = req.body
  const user = await Users.findById(_id).exec()
  if(!user){
    return res.status(400).json({ error: "No user found" });
  }
  const result = await user.deleteOne()
  res.json(`task:${result.name} deleted.`)
};

// Get By ID:
const getUserById = async (req, res) => {
  const { id } = req.params;
  //האם גם בשליפת אחד ניתן להגביל ללא קוד
  const user = await Users.findById(id, {password:false}, { password:0}).lean();
  if(!user){
    return res.status(400).json({ error: "No user found" });
  }
  res.json(user);
};

module.exports = { createNewUser, getAllUsers, update, deleteUser, getUserById };