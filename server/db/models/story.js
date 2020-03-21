const Sequelize = require('sequelize')
const db = require('../db')

const Story = db.define('story', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue:
      'https://scarystoriesfromcamproanoke.files.wordpress.com/2017/08/cropped-largest-finished-logo.jpg'
  },
  imageAltText: {
    type: Sequelize.TEXT,
    defaultValue: 'Boo!'
  },
  published: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

Story.beforeValidate(story => {
  /*
   * Generate slug
   */
  if (!story.uniqueId) {
    story.slug = story.title
      .replace(/\s/g, '_')
      .replace(/\W/g, '')
      .replace(/_/g, '-')
      .toLowerCase()
  }

  /**
   * This splits the tags for every comma and space as instructed to the user
   */
  if (typeof story.tags === 'string') {
    story.tags = story.tags.toLowerCase().split(', ')
  }

  // if there is no entered image URL it is replaced with the default
  if (story.imageUrl === '') {
    story.imageUrl =
      'https://scarystoriesfromcamproanoke.files.wordpress.com/2017/08/cropped-largest-finished-logo.jpg'
  }
})

module.exports = Story
