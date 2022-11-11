const users = require("../models/user")
exports.example = (req, res) => {
  console.log("example")
  res.send(" example")
}

exports.addUser = async (req, res) => {
  try {
    const user = new users(req.body)
    await user.save()
    res.status(200).json("added")
  } catch (error) {
    res.status(500).json(error.message)
  }
}
exports.getUsers = async (req, res) => {
  try {
    const users = await users.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
exports.getUser = async (req, res) => {
  const user = await users.findOne({ _id: req.params.id })
  res.send(user)
}

exports.updateUser = async (req, res) => {
  try {
    const updateduser = await users.findOne({ _id: req.params.id })

    if (req.body.title) {
      updateduser.title = req.body.title
    }

    if (req.body.content) {
      updateduser.time = req.body.time
    }

    await updateduser.save()
    res.send(updateduser)
  } catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" })
  }
}
exports.deleteUser = async (req, res) => {
  try {
    await users.deleteOne({ _id: req.params.id })
    res.status(204).send()
  } catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" })
  }
}
