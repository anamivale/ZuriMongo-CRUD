const route = require("express").Router()
const controller = require("../controllers/user")

route.get("/adduser", controller.addUser)
route.get("/users", controller.getUsers)
route.get("/user/:id", controller.getUser)
route.get("/update/:id", controller.updateUser)
route.get("/delete/:id", controller.deleteUser)

module.exports = route
