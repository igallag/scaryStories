const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

// Gets all users (probably alter this one to only display to admins or something)
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// Get a single user by ID
router.get('/:userId', async (req, res, next) => {
  try {
    if (req.user.id === req.params.userId) {
      const user = await User.findbyPk(req.user.id)
      res.status(200).json(user)
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})

// Create a new user
router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
})

// Edit a user's information
router.put('/', async (req, res, next) => {
  try {
    const user = 'FILL ME IN'
  } catch (error) {
    next(error)
  }
})

// Delete a user
router.delete('/:userId', async (req, res, next) => {
  try {
    if (req.user.id === req.params.userId) {
      const user = await User.findbyPk(req.user.id)

      if (user) {
        await user.destroy()
        res.status(200).json(req.body)
      } else {
        res.sendStatus(404)
      }
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})
