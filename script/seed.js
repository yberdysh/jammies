'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Jam} = require('../server/db/models')

async function destroyAll(){
  await db.sync({force: true})
  await Promise.all([
    User.drop(),
    Jam.drop()
    ])
}

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'}),
  ])

  const jammies = await Promise.all([
    Jam.create({
      price: 15.99,
      name: 'Power Jam',
      numInStock: 0,
      favorites: 0,
      description: "This is a lovely jam",
      reviews: 0,
      image: "https://i.etsystatic.com/17550118/r/il/1bf7fb/1483725448/il_570xN.1483725448_5nhk.jpg",
      numStars: 5
    }),
    Jam.create({
      price: 10.99,
      name: 'A Bit of Heaven',
      numInStock: 0,
      favorites: 0,
      description: "This is a lovely jam",
      image: "https://i.etsystatic.com/17550118/r/il/1bf7fb/1483725448/il_570xN.1483725448_5nhk.jpg",
      reviews: 0,
      numStars: 5
    }),
    Jam.create({
      price: 12.99,
      name: 'Strawberry Jam',
      description: "This is a lovely jam",
      image: "https://i.etsystatic.com/17550118/r/il/1bf7fb/1483725448/il_570xN.1483725448_5nhk.jpg",
      numStars: 5
    }),
    Jam.create({
      price: 15.99,
      name: 'Power Jam',
      numInStock: 0,
      favorites: 0,
      description: "This is a lovely jam",
      reviews: 0,
      image: "https://i.etsystatic.com/17550118/r/il/1bf7fb/1483725448/il_570xN.1483725448_5nhk.jpg",
      numStars: 5
    }),
        Jam.create({
      price: 15.99,
      name: 'Power Jam',
      numInStock: 0,
      favorites: 0,
      description: "This is a lovely jam",
      reviews: 0,
      image: "https://i.etsystatic.com/17550118/r/il/1bf7fb/1483725448/il_570xN.1483725448_5nhk.jpg",
      numStars: 5
    }),
            Jam.create({
      price: 15.99,
      name: 'Power Jam',
      numInStock: 0,
      favorites: 0,
      description: "This is a lovely jam",
      reviews: 0,
      image: "https://i.etsystatic.com/17550118/r/il/1bf7fb/1483725448/il_570xN.1483725448_5nhk.jpg",
      numStars: 5
    }),
                Jam.create({
      price: 15.99,
      name: 'Power Jam',
      numInStock: 0,
      favorites: 0,
      description: "This is a lovely jam",
      reviews: 0,
      image: "https://i.etsystatic.com/17550118/r/il/1bf7fb/1483725448/il_570xN.1483725448_5nhk.jpg",
      numStars: 5
    }),
                    Jam.create({
      price: 15.99,
      name: 'Power Jam',
      numInStock: 0,
      favorites: 0,
      description: "This is a lovely jam",
      reviews: 0,
      image: "https://i.etsystatic.com/17550118/r/il/1bf7fb/1483725448/il_570xN.1483725448_5nhk.jpg",
      numStars: 5
    }),
                        Jam.create({
      price: 15.99,
      name: 'Power Jam',
      numInStock: 0,
      favorites: 0,
      description: "This is a lovely jam",
      reviews: 0,
      image: "https://i.etsystatic.com/17550118/r/il/1bf7fb/1483725448/il_570xN.1483725448_5nhk.jpg",
      numStars: 5
    })
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
    console.log('destroying...')
    await destroyAll()
    console.log('reseeding...')
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
