const userServ = require('../services/userService');

exports.funcHello = async (req, res) => {
  res.send("Hello World!");
};

exports.funcGetUsers = userServ.getAllUsers;

// GET /users - Lista todos os usuários
exports.funcGetUsers = async (req, res) => {
  try {
    const users = await userServ.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /users/name/:name - Busca usuários por nome
exports.funcGetUserByName = async (req, res) => {
  try {
    const name = req.params.name;
    const user = await userServ.getUserByName(name);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /users - Cria um novo usuário
exports.funcCreateUser = async (req, res) => {
  try {
    const newUser = await userServ.createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /users/:id - Atualiza um usuário existente
exports.funcUpdateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await userServ.updateUser(id, req.body);
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};