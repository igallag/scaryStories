const router = require('express').Router()
const Story = require('../db/models/story')
module.exports = router

// Get all stories
router.get('/', async (req, res, next) => {
  try {
    console.log('INSIDE THE GET ALL STORIES API')
    const stories = await Story.findAll()
    res.status(200).json(stories)
  } catch (error) {
    next(error)
  }
})

// Get a story by ID
router.get('/:storyId', async (req, res, next) => {
  try {
    const story = await Story.findByPk(req.params.storyId)
    if (story) {
      res.status(200).json(story)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

// Create a story
router.post('/', async (req, res, next) => {
  try {
    let newStory = req.body
    newStory.userId = req.user.id
    console.log(newStory, 'THIS IS STORY')
    const story = await Story.create(newStory)

    res.status(200).json(story)

    // await Story.create(req.body)
    // res.json(req.body)
  } catch (error) {
    next(error)
  }
})

// Edit a story (change later to protect it so only the author or admin can edit it)
router.put('/', async (req, res, next) => {
  try {
    const story = 'FILL ME IN'
  } catch (error) {
    next(error)
  }
})

// delete a story (change later to protect it so only the author or an admin can delete it)
router.delete('/:storyId', async (req, res, next) => {
  try {
    const story = await Story.findByPk(req.params.storyId)

    if (story) {
      await story.destroy()
      res.status(200).json(req.body)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})
