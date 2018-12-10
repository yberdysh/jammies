'use strict'

const db = require('../server/db')

const {User} = require('../server/db/models')
const {Jam} = require('../server/db/models')
const {Review} = require('../server/db/models')

async function destroyAll(){
  await db.sync({force: true})
  await Promise.all([
    Review.drop(),
    User.drop(),
    Jam.drop()
    ])
}

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'joe@email.com', password: '123'}),
    User.create({email: 'frank@email.com', password: '123'}),
    User.create({email: 'matt@email.com', password: '123'}),
    User.create({email: 'sammy@email.com', password: '123'}),
    User.create({email: 'andy@email.com', password: '123'}),
    User.create({email: 'kat@email.com', password: '123'}),
    User.create({email: 'katie@email.com', password: '123'}),
    User.create({email: 'alicia@email.com', password: '123'}),
    User.create({email: 'angelina@email.com', password: '123'}),
    User.create({email: 'brock@email.com', password: '123'}),
    User.create({email: 'cindy@email.com', password: '123'}),
    User.create({email: 'steph@email.com', password: '123'}),
    User.create({email: 'jane@email.com', password: '123'}),
  ])

  const jammies = await Promise.all([
    Jam.create({
      price: "15.99",
      name: 'Pink Raspberry Jam',
      description: "Give our raspberry jam and a try and you will surely not regret it. Our jam is known as the sweetest respberry jam in all of Lousiana! Pair this with some toast, bagels, or even goat cheese for a lovely night of appetizers and wine.",
      image: "https://i.etsystatic.com/17550118/r/il/1bf7fb/1483725448/il_570xN.1483725448_5nhk.jpg",
    }),
    Jam.create({
      price: "10.99",
      name: 'Heavenly Strawberry Jam',
      description: "Our classic Strawberry Jam starts with fresh, ripe strawberries, cooked in its own juices to jam perfection, and canned in my health department-approved kitchen. \n Ingredients include: Strawberries, lemon juice, sugar, pectin. Your order is for one half-pint jar of delicious home-canned goodness.",
      image: "http://kuking.net/resize/197/600/w/uploads/content/1403500357.jpg",
    }),
    Jam.create({
      price: "12.99",
      name: 'Mango Raspberry Jam',
      description: "Mango Raspberry Jam combines the delicious sweetness of raspberries with the fresh tartness of mangoes for an absolutely wonderful addition to your morning biscuits! Each half-pint of awesomeness is made with fresh mangoes, raspberries, lemon juice, sugar, and pectin. Makes a perfect gift for someone special--or just for you!",
      image: "https://i.etsystatic.com/12787516/r/il/a9c350/1508606374/il_fullxfull.1508606374_ei8o.jpg",
    }),
    Jam.create({
      price: "10.00",
      name: 'Blackberry Sage Jam',
      description: "Ohhhh at last....at last...Blackberries and Sage should of just been born as one. Truly a magnificent pair! This jam makes the ultimate cocktail or glaze on the protein of your choice.",
      image: "https://i.etsystatic.com/5919507/r/il/76e8c8/771613937/il_fullxfull.771613937_ihfb.jpg",
    }),
        Jam.create({
      price: "13.50",
      name: 'Strawberry Pepper Jam',
      description: "Strawberries & Hot Peppers! That's what pepper jelly should be huh? \n Fresh local Ponchatoula, Louisiana Strawberries contribute that perfect sweetness to offset such spicy hot peppers as jalepenos and serranos! \n Each jar is 8oz and will last for up to a year in your pantry and 1 month in your refridgerator once opened...But after tasting it, I'm sure it won't be around for long.",
      image: "https://i.etsystatic.com/5919507/r/il/0fa1cf/693045386/il_fullxfull.693045386_qhxn.jpg",
    }),
            Jam.create({
      price: "24.00",
      name: 'Organic Blackberry Jam',
      description: "One half-pint (8 ounces) of low sugar blackberry jam in a glass mason jar. Handmade in small batches with organic produce. Ingredients: organic blackberries, organic lemon juice, sugar, pectin.",
      image: "https://i.etsystatic.com/6235609/r/il/c0baa6/1675099258/il_fullxfull.1675099258_1cj4.jpg",
    }),
    Jam.create({
      price: "16.00",
      name: 'Homemade Blueberry Spice Jam',
      description: "Our Homemade Blueberry jam is made from Plump juicy Michigan Blueberries. You will enjoy this jam right to the last spoonful,we guarantee it. My half pint jars are packed full of delicious locally sourced fruit. \n You will be pleasantly pleased that our Jams are still handmade just like old times, one small batch at a time, and we think you will notice the difference in taste and texture compared to \"store bought jams\" that use corn syrup and artificial flavorings and colorings to make their preserves. \n If you are looking for that jam or jelly just like what your Mom or Grandmother made, look no further. We make it just like our Grandmother's did so many years ago without changing a thing. You will be able to see the delicious bits of fruit as you spread our jam on your favorite type of bread, and you will taste the difference when you take each bite.",
      image: "https://i.etsystatic.com/6759938/r/il/8cb3bf/509839387/il_fullxfull.509839387_6inu.jpg",
    }),
    Jam.create({
      price: "10.00",
      name: 'Homemade Cherry Jam',
      description: "Our Homemade Chocolate Cherry jam is made from world renowned Michigan Cherries and Ghirardelli chocolate. You will enjoy this jam right to the last spoonful, we guarantee it. My half pint jars are packed full of delicious locally sourced fruit. \n You will be pleasantly pleased that our Jams are still handmade just like old times, one small batch at a time, and we think you will notice the difference in taste and texture compared to \"store bought jams\" that use corn syrup and artificial flavorings and colorings to make their preserves. \n If you are looking for that jam or jelly just like what your Mom or Grandmother made, look no further. We make it just like our Grandmother's did so many years ago without changing a thing. You will be able to see the delicious bits of fruit as you spread our jam on your favorite type of bread, and you will taste the difference when you take each bite.",
      image: "https://i.etsystatic.com/6759938/r/il/50259d/509844577/il_fullxfull.509844577_8b5s.jpg",
    }),
    Jam.create({
      price: "16.99",
      name: "Organic Decadent Raspberry Jam",
      description: "Organic Decadent Raspberry Jam is a deliciously decadent, fruity and chocolatey, addition to your morning biscuits! Each half-pint of awesomeness is made with raspberries, cocoa powder, lemon juice, sugar, and pectin. Makes a wonderful gift--or just for you!",
      image: "https://i.etsystatic.com/12787516/r/il/638349/1518896601/il_fullxfull.1518896601_9iiv.jpg",
    }),
    Jam.create({
      price: "12.00",
      name: "Chocolate Raspberry Jam",
      description: "Chocolate Raspberry Jam is a delicious, decadent, fruity and chocolatey! Top everything from cheesecakes to pound cakes, pancakes and waffles, even drizzle lavishly over biscuits or scones. Or how about over a bowl of ice cream? Each half-pint of awesomeness is made with fresh raspberries, cocoa powder, lemon juice, and sugar. Makes a wonderful gift--or just for you!",
      image: "https://i.etsystatic.com/12787516/r/il/41b89a/1584919783/il_fullxfull.1584919783_p3yt.jpg",
    }),
    Jam.create({
      price: "13.00",
      name: "Homemade Strawberry Rhubarb Jam",
      description: "Homemade strawberry rhubarb jam! Sweet strawberry rhubarb jam for all the berry lovers in your life! Made fresh and canned to last for months! Available in a 4 oz. and 8 oz. jar. \n Made with strawberries, rhubarb, sugar and pectin. Canned in a hot water bath to ensure long-lasting freshness. \n The jam will last up to a year unopened on the shelf. Once opened it should be refrigerated immediately. The jam should last up to a year if refrigerated properly.",
      image: "https://www.joyofkosher.com/.image/t_share/MTMxNzYyODU5OTg1MTE1NjE0/homemade-strawberry-jam.jpg",
    }),
    Jam.create({
      price: "30.00",
      name: "Simply Delicious Black Currant Jam",
      description: "(2) 10 Ounce Jars Black Currant Preserves \n Ingredients: \n Pacific Northwest Black Currants \n Organic Cane Sugar \n Crème de Cassis \n Lemon Juice \n Black currants have an earthy, sweet-tart taste that, when combined with sugar and cassis, make a delectable jam that is excellent on buttery pastries or used in baking. \n This order will contain (2) 10 oz. jars of Black Currant Preserves",
      image: "https://food-images.files.bbci.co.uk/food/recipes/simple_blackcurrant_jam_77904_16x9.jpg",
    }),
    Jam.create({
      price: "11.00",
      name: "Friggin Good Fig Jam",
      description: "This Frigging Good Fig Jam is friggin' good! Serve it at a wine and cheese party, eat it as a snack, or back it for lunch. There are a thousand ways to enjoy this jam, so be sure to try every one of them!",
      image: "https://static01.nyt.com/images/2016/08/31/dining/31martha2/31martha2-articleLarge.jpg",
    }),
    Jam.create({
      price: "15.00",
      name: "Homemade BlackBerry Jam",
      description: "Delicious Blackberry homemade Jam. We make this jam with preserve sugar and a half of lemon. We do use frozen Fruits. We've done research on frozen fruit and what we have read is that, they retain their nutritional value longer and they are preserved to their peak. All our jars and Lids are sterilized. We try our best to make the jam smooth and tasty. Sometimes its comes out a little thick. Every time we make a batch, we do our best to make it perfect. Enjoy our jam!",
      image: "https://i.etsystatic.com/18742947/r/il/500345/1660208636/il_fullxfull.1660208636_tu0p.jpg",
    }),
    Jam.create({
      price: "11.99",
      name: "Homemade Mixed Fruit Jam",
      description: "Delicious Blackberry homemade Jam. We make this jam with preserve sugar and a half of lemon. We do use frozen Fruits. We've done research on frozen fruit and what we have read is that, they retain their nutritional value longer and they are preserved to their peak. All our jars and Lids are sterilized. We try our best to make the jam smooth and tasty. Sometimes its comes out a little thick. Every time we make a batch, we do our best to make it perfect. Enjoy our jam!",
      image: "https://i.etsystatic.com/18742947/r/il/278b26/1656583062/il_fullxfull.1656583062_d7c3.jpg",
    }),
    Jam.create({
      price: "12.00",
      name: "Seedless Wild Blackberry Jam",
      description: "This is for 1- (8oz) half pint jar of Organic Seedless Wild Blackberry Jam made with Homemade Pectin Vegan!! \n Combined shipping is available and the shipping price will reflect that when you add more than one to your cart! \n If you would like more than 3, please send us a convo so we can set up a custom listing for you! \n If you have been a fan of ours for some time, you know that every so often we make Wild Blackberry Jam and make it available for purchase! Well this year is one of those years! We not only have made some scrumptious SEEDLESS Jam out of the plethora of Wild Blackberries here on the farm, but we have also made our own HOMEMADE PECTIN!! \n Most jams are made with pectin from the store that is derived from GMO sources and highly refined. We used Pomona's Pectin before which is great, but still has the pectin taste. So you get a unique flavor when you add in your own HOMEMADE Pectin!!",
      image: "https://i.etsystatic.com/5804442/r/il/9f36b9/812134553/il_fullxfull.812134553_ezug.jpg",
    }),
    Jam.create({
      price: "15.99",
      name: "Homemade Strawberry Jam",
      description: "This super delicious jam is made in our kitchen in batches of about 4-6 jars at a time. We receive nothing but major compliments. Our family members, friend's, and even my pooch love it. Our jam is delicious mixed with vanilla ice cream in a chilled glass or bowl; a sandwich; on toast; french toast; yogurt, and even super tasty made with pastry dishes.(as seen in my photos) Incredible strawberry flavor. You just cannot compare to homemade.",
      image: "https://i.etsystatic.com/15442244/r/il/e50bbf/1236660118/il_fullxfull.1236660118_2fvr.jpg",
    }),
    Jam.create({
      price: "13.00",
      name: "Peach Jam",
      description: "My Homemade Peach jam is made ripe juicy sun drenched Georgia peaches for that sweet and delicious southern taste. You will enjoy this fruit spread right to the last spoonful, we guarantee it. My half pint jars of fruit preserves are packed full of delicious locally sourced fruit. \n You will be pleasantly pleased that my Half Pint size Jams are still handmade just like old times, one small batch at a time, and I think you will notice the difference in taste and texture compared to \"store bought jams\" that use corn syrup and artificial flavorings and colorings to make their preserves. \n If you are looking for that jam or jelly just like what your Mom or Grandmother made, look no further. We make it just like our Grandmother's did so many years ago without changing a thing. You will be able to see the delicious bits of fruit as you spread our jam on your favorite type of bread, and you will taste the difference when you take each bite.",
      image: "https://i.etsystatic.com/6759938/r/il/21fb05/639138237/il_fullxfull.639138237_9eqd.jpg",
    }),
    Jam.create({
      price: "10.99",
      name: "Organic Apricot Jam",
      description: "An 8 ounce jar of Apricot jam. We use ripe hand picked apricots to create this jam. Tart and sweet with a warm apricot color. It's wonderful as a cake filling and makes a lovely glaze on baked chicken. It is water bath canned with a shelf life of 1 year. Please refrigerate after opening and recycle the jar and lid. Enjoy!",
      image: "https://i.etsystatic.com/7181726/r/il/fe4a9e/1064157241/il_fullxfull.1064157241_su01.jpg",
    }),
    Jam.create({
      price: "16.00",
      name: "Organic Apple Jam",
      description: "For those days, and nights, when an apple pie sounds like a lot of work, our APPLE PIE Jam does the job. With all the spices and flavorings of a traditional apple pie, including tender apple chunks, it's no wonder it's an all American staple ... and one of our best sellers. :) \n This listing is for 1 pint of homemade APPLE PIE Jam made with fresh (never frozen)fruit, real sugar and pectin. Use the jam on pancakes, toast, ice cream, biscuits, in cakes, muffins, cheesecake, whatever! They make great gifts and good food better! \n All our jam is sealed and guaranteed for a 6 month shelf life from date of sale. Once opened, keep the jam covered and refrigerated for up to two weeks for best taste. ",
      image: "https://i.etsystatic.com/11444300/r/il/49f9c0/892978318/il_fullxfull.892978318_hb3f.jpg",
    }),
    Jam.create({
      price: "14.50",
      name: "Orange Marmalade Jam",
      description: "A marmalade, by the way, is defined as a jam-like product that includes citrus fruit and slivers of peel. We make our orange marmalade from scratch, cutting up the pieces of orange and lemon and the peels, then soaking them overnight to soften. The next day we add sugar, bring it to a boil, and simmer it until it gels. The pieces of orange and lemon peel are almost candied, yet still soft. It's a truly delicious treat, just like the marmalade we tasted in England. Forget about store-bought marmalade, you need the real deal, home-canned. \n Ingredients include: Oranges, lemons, water, sugar, pectin. Your order is for one half-pint jar of delicious home-canned goodness.",
      image: "https://i.etsystatic.com/12787516/r/il/6a09b7/1175215893/il_fullxfull.1175215893_oqzm.jpg",
    })
    ])

const reviews = await Promise.all([
  Review.create({
      numStars: 5,
      content: "This is my favorite Jam",
      userId: 1,
      jamId: 1
    }),
    Review.create({
      numStars: 3,
      content: "This jam was meh",
      userId: 2,
      jamId: 1
    }),
      Review.create({
      numStars: 4,
      content: "This jam was good but not amazing",
      userId: 3,
      jamId: 1
    }),
    Review.create({
      numStars: 5,
      content: "This is the greatest jam",
      userId: 1,
      jamId: 2
    }),
    Review.create({
      numStars: 5,
      content: "This is my favorite Jam",
      userId: 2,
      jamId: 2
    }),
    Review.create({
      numStars: 4,
      content: "This is an ok jam",
      userId: 3,
      jamId: 2
    }),
    Review.create({
      numStars: 4,
      content: "This is a good jam",
      userId: 6,
      jamId: 2
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${jammies.length} jams`)
  console.log(`seeded ${reviews.length} reviews`)
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
