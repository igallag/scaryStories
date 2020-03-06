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
    tags: ['ghost', 'scary', 'spooky'],
    published: true,
    userId: 1
  },
  {
    title: 'The Happy Vampire',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius ipsum vel ligula auctor sollicitudin. Fusce quis dolor commodo enim feugiat mollis in at risus. Maecenas enim elit, placerat id tincidunt quis, semper cursus ex. Quisque egestas posuere tortor, eget placerat turpis maximus id. Vivamus nunc tortor, elementum quis fermentum vitae, molestie et nulla. Donec ut odio sit amet tellus pretium tempus. Sed quis bibendum felis, id porta quam. Suspendisse finibus congue ante condimentum rhoncus. Vivamus placerat mi massa. Aliquam volutpat turpis nec aliquam mattis. Duis pulvinar lacus a orci luctus accumsan. Donec et mauris tempor, consectetur libero non, vehicula metus. Curabitur facilisis nisi vitae quam rutrum pretium. Praesent bibendum ante sit amet massa vestibulum, at vehicula quam convallis. In commodo consequat justo, sed vehicula dolor pharetra non. Proin id odio eros.',
    description: 'This vampire is very happy!',
    tags: ['vampire', 'happy', 'spooky'],
    published: true,
    userId: 1
  },
  {
    title: 'The Dancing Baby',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius ipsum vel ligula auctor sollicitudin. Fusce quis dolor commodo enim feugiat mollis in at risus. Maecenas enim elit, placerat id tincidunt quis, semper cursus ex. Quisque egestas posuere tortor, eget placerat turpis maximus id. Vivamus nunc tortor, elementum quis fermentum vitae, molestie et nulla. Donec ut odio sit amet tellus pretium tempus. Sed quis bibendum felis, id porta quam. Suspendisse finibus congue ante condimentum rhoncus. Vivamus placerat mi massa. Aliquam volutpat turpis nec aliquam mattis. Duis pulvinar lacus a orci luctus accumsan. Donec et mauris tempor, consectetur libero non, vehicula metus. Curabitur facilisis nisi vitae quam rutrum pretium. Praesent bibendum ante sit amet massa vestibulum, at vehicula quam convallis. In commodo consequat justo, sed vehicula dolor pharetra non. Proin id odio eros.',
    description: 'This Baby is very Groovy!',
    imageUrl:
      'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/ghostandco/products/322253/shirt-1505688371-cba3557238311a34e07f2e290e803506.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19',
    imageAltText: 'Wah!',
    tags: ['dance', 'happy', 'baby'],
    published: true,
    userId: 2
  },
  {
    title: 'Paroaria gularis',
    content:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    description: 'cubilia curae nulla dapibus dolor vel est',
    imageUrl: 'http://dummyimage.com/189x131.bmp/dddddd/000000',
    userId: 2
  },
  {
    title: 'Ovis orientalis',
    content:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    description: 'et magnis dis parturient montes nascetur ridiculus mus etiam',
    imageUrl: 'http://dummyimage.com/249x180.jpg/cc0000/ffffff',
    userId: 2
  },
  {
    title: 'Cynictis penicillata',
    content:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    description: 'tellus nisi eu orci mauris',
    imageUrl: 'http://dummyimage.com/222x192.jpg/cc0000/ffffff',
    userId: 1
  },
  {
    title: 'Tayassu tajacu',
    content:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    description: 'metus arcu adipiscing molestie hendrerit at vulputate vitae',
    imageUrl: 'http://dummyimage.com/225x180.jpg/dddddd/000000',
    userId: 1
  },
  {
    title: 'Cracticus nigroagularis',
    content:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    description: 'ullamcorper augue a suscipit',
    imageUrl: 'http://dummyimage.com/170x146.bmp/5fa2dd/ffffff',
    userId: 2
  },
  {
    title: 'Raphicerus campestris',
    content:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    description: 'eget eros elementum pellentesque quisque porta',
    imageUrl: 'http://dummyimage.com/152x109.jpg/5fa2dd/ffffff',
    userId: 2
  },
  {
    title: 'Ursus americanus',
    content:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    description: 'orci eget orci vehicula condimentum curabitur in libero ut',
    imageUrl: 'http://dummyimage.com/207x119.jpg/cc0000/ffffff',
    userId: 1
  },
  {
    title: 'Tenrec ecaudatus',
    content:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    description: 'scelerisque mauris sit amet eros suspendisse accumsan',
    imageUrl: 'http://dummyimage.com/211x140.bmp/dddddd/000000',
    userId: 1
  },
  {
    title: 'Neophron percnopterus',
    content:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    description: 'nec sem duis aliquam convallis nunc proin at turpis',
    imageUrl: 'http://dummyimage.com/112x130.jpg/5fa2dd/ffffff',
    userId: 2
  },
  {
    title: 'Megaderma spasma',
    content:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    description: 'felis donec semper sapien a libero',
    imageUrl: 'http://dummyimage.com/224x100.jpg/dddddd/000000',
    userId: 2
  },
  {
    title: 'Otocyon megalotis',
    content:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    description: 'non pretium quis lectus suspendisse potenti',
    imageUrl: 'http://dummyimage.com/126x233.png/dddddd/000000',
    userId: 1
  },
  {
    title: 'Macropus fuliginosus',
    content:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    description: 'sociis natoque penatibus et magnis dis parturient montes',
    imageUrl: 'http://dummyimage.com/120x195.bmp/cc0000/ffffff',
    userId: 2
  },
  {
    title: 'Procyon lotor',
    content:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    description: 'velit donec diam neque vestibulum eget vulputate ut',
    imageUrl: 'http://dummyimage.com/122x204.jpg/dddddd/000000',
    userId: 2
  },
  {
    title: 'Ammospermophilus nelsoni',
    content:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    description: 'orci luctus et ultrices posuere',
    imageUrl: 'http://dummyimage.com/109x174.jpg/5fa2dd/ffffff',
    userId: 2
  },
  {
    title: 'Felis wiedi or Leopardus weidi',
    content:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    description: 'nec sem duis aliquam',
    imageUrl: 'http://dummyimage.com/202x118.jpg/cc0000/ffffff',
    userId: 1
  },
  {
    title: 'Ara ararauna',
    content:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    description: 'nisl duis ac nibh fusce lacus purus',
    imageUrl: 'http://dummyimage.com/140x110.png/cc0000/ffffff',
    userId: 1
  },
  {
    title: 'Limosa haemastica',
    content:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    description: 'enim blandit mi in porttitor',
    imageUrl: 'http://dummyimage.com/219x188.bmp/cc0000/ffffff',
    userId: 2
  },
  {
    title: 'Coluber constrictor foxii',
    content:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    description:
      'ultrices libero non mattis pulvinar nulla pede ullamcorper augue',
    imageUrl: 'http://dummyimage.com/234x124.png/dddddd/000000',
    userId: 1
  },
  {
    title: 'Pelecanus occidentalis',
    content:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    description:
      'orci luctus et ultrices posuere cubilia curae duis faucibus accumsan',
    imageUrl: 'http://dummyimage.com/223x236.jpg/ff4444/ffffff',
    userId: 1
  },
  {
    title: 'Sciurus niger',
    content:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    description: 'fusce consequat nulla nisl nunc nisl duis bibendum felis',
    imageUrl: 'http://dummyimage.com/119x243.jpg/ff4444/ffffff',
    userId: 1
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const seedStories = await Promise.all(
    stories.map(story => {
      return Story.create(story)
    })
  )

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${seedStories.length} stories`)
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
