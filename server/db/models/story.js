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
  tag: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  }
})

module.exports = Story
