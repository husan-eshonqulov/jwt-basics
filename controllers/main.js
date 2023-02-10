const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(StatusCodes.CREATED).json({ msg: 'user created', token });
};

const dashboard = async (req, res) => {
  const lukyNumber = Math.floor(Math.random() * 100) + 1;
  res.status(StatusCodes.OK).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your luky number is ${lukyNumber}`,
  });
};

module.exports = { login, dashboard };
