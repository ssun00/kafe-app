const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8)
  })

  user.save((err, user) => {
    if (err) {
      res.status(500).send( { message: err } )
    }
    
    Role.findOne({ name: "user" }, (err, role) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      user.roles = [role._id];
      user.save(err => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        res.send({ message: "User was registered successfully!" });
      })
    })
  })
}

// exports.login = (req, res) => {
//   User.findOne({
//     username: req.body.username
//   })
//     .populate("roles")
// }