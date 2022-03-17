const user = require("../model/user");

async function getNumberOfUser(req, res){
  console.log("Inside getNumberOfUser")
  const count = await user.getCount();

  res.send({count: count});
}

async function postDetail(req, res){
  const name = req.body.name;
  const id = req.body.id;

  const isSuccess = await user.create(id, name);
  res.send({isSuccess: isSuccess});
}

async function deleteDetail(req, res){
  const id = req.params.id;

  const isSuccess = await user.deleteById(id);

  res.send({isSuccess: isSuccess});
}

async function getUserDetail(req, res){
  const id = req.params.id;

  const detail = await user.getById(id);

  res.send({detail: detail});
}

async function updateDetail(req, res){
  const name = req.body.name;
  const id = req.body.id;

  const isSuccess = await user.update(id, name);

  res.send({isSuccess: isSuccess});
}

module.exports = {
  getNumberOfUser,
  postDetail,
  deleteDetail,
  getUserDetail,
  updateDetail,
}
