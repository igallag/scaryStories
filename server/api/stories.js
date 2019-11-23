const router = require('express').Router()
const Story = require('../db/models/story')
const Sequelize = require('sequelize')
module.exports = router

// Get all stories
router.get('/', async (req, res, next) => {
  try {
    const stories = await Story.findAll()
    res.status(200).json(stories)
  } catch (error) {
    next(error)
  }
})

// Get a story by ID
// this may depricated after the 'get story by slug' route is implimented
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

// get story by slug
router.get('/content/:slug', async (req, res, next) => {
  try {
    const story = await Story.findOne({
      where: {
        slug: req.params.slug
      }
    })
    if (story) {
      res.status(200).json(story)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

// Get All Stories by Tag
router.get('/tag/:storyTag', async (req, res, next) => {
  const Op = Sequelize.Op

  try {
    const stories = await Story.findAll({
      where: {
        tags: {
          [Op.overlap]: [req.params.storyTag]
        }
      }
    })
    res.status(200).json(stories)
  } catch (error) {
    next(error)
  }
})

// Create a story
router.post('/', async (req, res, next) => {
  try {
    let newStory = req.body
    newStory.userId = req.user.id
    const story = await Story.create(newStory)

    res.status(200).json(story)
  } catch (error) {
    next(error)
  }
})

// Edit a story (change later to protect it so only the author or admin can edit it)
router.put('/', async (req, res, next) => {
  try {
    let oldStory = await Story.findByPk(req.body.id)
    // if(req.user.id === oldStory.userId){
    let newStory = req.body
    // makes sure there is a title on the new story
    if (!newStory.title) {
      newStory.title = oldStory.title
    }
    // makes sure there is a description on new story
    if (!newStory.description) {
      newStory.description = oldStory.description
    }
    // makes sure there is story content in the new Story
    if (!newStory.content) {
      newStory.content = oldStory.content
    }

    const obj = await oldStory.update({
      title: newStory.title,
      description: newStory.description,
      content: newStory.content,
      tags: newStory.tags
    })

    res.status(200).json(obj)
    // }
    // else {
    //   res.sendStatus(403)
    // }
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
