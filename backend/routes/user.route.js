const express = require("express");
const validate = require("../middlewares/validate");
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const {cloudinary} = require('../utils/cloudinary')
const userSchema = require("../schemas/user.json");
const router = express.Router();
const isAdmin= require("../middlewares/isAdmin.mdw")
const { v4: uuidv4 } = require("uuid");
const isAdminMdw = require("../middlewares/isAdmin.mdw");
// Get all
router.get("/", async function (req, res) {
  const users = await userModel.all();
  let responseUsers = users.map((user) => {
    delete user.password;
    delete isDeleted
    delete rfToken
    return user;
  });
  return res.json(responseUsers);
});

// Get single by ID
router.get("/:id", async function (req, res) {
  const id = req.params.id;
  const user = await userModel.singleById(id);

  if (user === null) {
    res.json({
      msg: `User with id=${id} is not found`,
    });
  }

  res.json(user);
});

// Lock user
router.patch('/lock/:id',isAdminMdw,async function(req,res){
  const id = req.params.id;
  console.log("äsdasd")
  const user = await userModel.singleById(id);
  if(!user) return res.status(202).send("User is not exist");
  
  await userModel.update(id, {
    isBlocked: true
  })
  return res.json({
    msg:"Lock user successfully"
  })
})

// Unlock user
router.patch('/unlock/:id',isAdminMdw,async function(req,res){
  const id = req.params.id;
  const user = await userModel.singleById(id);
  
  if(!user) return res.status(400).send("User is not eixst");
  
  
  await userModel.update(id, {
    isBlocked: false
  })
  return res.json({
    msg:"Unlock user successfully"
  })
})

router.post("/", validate(userSchema), async (req, res, next) => {
  const user = req.body;
  const isUsernameExist = await userModel.singleByName(user.username);
  const isEmailExist = await userModel.singleByEmail(user.email);
  if (isUsernameExist && isEmailExist) {
    return res.status(202).json({
      msg: "Username and email have already existed!",
    });
  } else if (isUsernameExist) {
    return res.status(202).json({
      msg: "Username have already existed!",
    });
  } else if (isEmailExist) {
    return res.status(202).json({
      msg: "Email have already existed!",
    });
  } else {
    const newUser = {
      ...user,
      id: uuidv4(),
      logCreatedDate: new Date(),
      logUpdatedDate: new Date(),
      role: +user.role,
      password: bcrypt.hashSync(user.password, 10),
    };
    await userModel.add(newUser);
    delete newUser.password;

    return res.status(201).json(newUser);
  }

  return res.status(202).json({
    msg: "Error",
  });
});

// Delete user
router.patch("/delete/:id", async function (req, res) {
  const id = req.params.id;

  const selectedUser = await userModel.singleById(id);
  if (selectedUser.role === 0) {
    return res.status(202).json({
      msg: "Can not delete admin",
    });
  }
  if (selectedUser === null) {
    return res.status(202).json({
      msg: "Nothing to delete",
    });
  }

  await userModel.delete(id);
  res.json({
    msg: "User is deleted successfully!",
  });
});

// Update user
router.patch("/:id", async function (req, res) {
  const user = req.body;
  const id = req.params.id;

  const selectedUser = await userModel.singleById(id);
  if (selectedUser === null) {
    return res.json({
      msg: "Nothing to update",
    });
  }

  await userModel.update(id, user);
  return res.json({
    msg: "Update successfully",
  });
});

// Upload avatar
router.patch("/upload-avatar/:id", async function(req,res){
  const id=req.params.id;
  const user=await userModel.singleById(id);
  if(user){
    const fileStr= req.body.data;
    try{
      const uploadedResponse= await cloudinary.uploader.upload(fileStr,{
        upload_preset: 'elearning'
      });
      if(uploadedResponse){
        await userModel.update(id, {
          avatar: uploadedResponse.secure_url
        })
        return res.json({
          msg:"Update avatar successfully!",
          avatar: uploadedResponse.secure_url
        })
      }
     return res.status(202).json({
       msg: "Upload error!"
     })
    }catch(error){
      throw(error)
    }
  }

  return res.status(202).json({
    msg: "User is not exist"
  })
})

//Change password
router.patch("/change-password/:id",async function(req, res){
  const {oldPassword, newPassword}= req.body;
  const id=req.params.id;

  const user= await userModel.singleById(id)
 

  if(!user){
    res.status(202).json({
      msg:"User is not exist!"
    })
  }
 

  else{
    let isMatch= bcrypt.compareSync(oldPassword,user.password);
    if(isMatch){
      await userModel.update(id,{
        password: bcrypt.hashSync(newPassword,10)
      })

      return res.json({
        msg:"Password changed successfully"
      })
    }

    return res.status(202).json({
      msg: "Old password is not correct"
    })
  }
  
})
module.exports = router;
