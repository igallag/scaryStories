'use strict'

const db = require('../server/db')
const {User, Story} = require('../server/db/models')

const stories = [
  {
    title: 'The Scary Ghost',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius ipsum vel ligula auctor sollicitudin. Fusce quis dolor commodo enim feugiat mollis in at risus. Maecenas enim elit, placerat id tincidunt quis, semper cursus ex. Quisque egestas posuere tortor, eget placerat turpis maximus id. Vivamus nunc tortor, elementum quis fermentum vitae, molestie et nulla. Donec ut odio sit amet tellus pretium tempus. Sed quis bibendum felis, id porta quam. Suspendisse finibus congue ante condimentum rhoncus. Vivamus placerat mi massa. Aliquam volutpat turpis nec aliquam mattis. Duis pulvinar lacus a orci luctus accumsan. Donec et mauris tempor, consectetur libero non, vehicula metus. Curabitur facilisis nisi vitae quam rutrum pretium. Praesent bibendum ante sit amet massa vestibulum, at vehicula quam convallis. In commodo consequat justo, sed vehicula dolor pharetra non. Proin id odio eros.',
    description: 'This ghost is very scary!',
    imageUrl:
      'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/ghostandco/products/322253/shirt-1505688371-cba3557238311a34e07f2e290e803506.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19',
    imageAltText: 'Click if you dare!',
    published: true
  },
  {
    title: 'The Happy Vampire',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius ipsum vel ligula auctor sollicitudin. Fusce quis dolor commodo enim feugiat mollis in at risus. Maecenas enim elit, placerat id tincidunt quis, semper cursus ex. Quisque egestas posuere tortor, eget placerat turpis maximus id. Vivamus nunc tortor, elementum quis fermentum vitae, molestie et nulla. Donec ut odio sit amet tellus pretium tempus. Sed quis bibendum felis, id porta quam. Suspendisse finibus congue ante condimentum rhoncus. Vivamus placerat mi massa. Aliquam volutpat turpis nec aliquam mattis. Duis pulvinar lacus a orci luctus accumsan. Donec et mauris tempor, consectetur libero non, vehicula metus. Curabitur facilisis nisi vitae quam rutrum pretium. Praesent bibendum ante sit amet massa vestibulum, at vehicula quam convallis. In commodo consequat justo, sed vehicula dolor pharetra non. Proin id odio eros.',
    description: 'This vampire is very happy!',
    published: true
  },
  {
    title: 'The Dancing Baby',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius ipsum vel ligula auctor sollicitudin. Fusce quis dolor commodo enim feugiat mollis in at risus. Maecenas enim elit, placerat id tincidunt quis, semper cursus ex. Quisque egestas posuere tortor, eget placerat turpis maximus id. Vivamus nunc tortor, elementum quis fermentum vitae, molestie et nulla. Donec ut odio sit amet tellus pretium tempus. Sed quis bibendum felis, id porta quam. Suspendisse finibus congue ante condimentum rhoncus. Vivamus placerat mi massa. Aliquam volutpat turpis nec aliquam mattis. Duis pulvinar lacus a orci luctus accumsan. Donec et mauris tempor, consectetur libero non, vehicula metus. Curabitur facilisis nisi vitae quam rutrum pretium. Praesent bibendum ante sit amet massa vestibulum, at vehicula quam convallis. In commodo consequat justo, sed vehicula dolor pharetra non. Proin id odio eros.',
    description: 'This Baby is very Groovy!',
    imageUrl:
      'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/ghostandco/products/322253/shirt-1505688371-cba3557238311a34e07f2e290e803506.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19',
    imageAltText: 'Wah!',
    published: true
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
