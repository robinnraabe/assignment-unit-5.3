console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
// primesCollection
let myCollection = [];

function addToCollection (collection, title, artist, yearPublished) {
  let albumToAdd = {
    title,
    artist,
    yearPublished
  }
  collection.push(albumToAdd);
  return albumToAdd;
}

console.log('Added:', addToCollection(myCollection, 'Galore', 'Oklou', 2020));
console.log('Added:', addToCollection(myCollection, 'Sea and the Darkness', 'Galileo Galilei', 2016));
console.log('Added:',  addToCollection(myCollection, 'BBHF1 - Young Man Goes South', 'BBHF', 2020));
console.log('Added:',  addToCollection(myCollection, 'Bee And The Whales', 'Galileo Galilei', 2023));
console.log('Added:',  addToCollection(myCollection, 'food house', 'food house', 2020));
console.log('Added:',  addToCollection(myCollection, 'UFOF', 'Big Thief', 2019));
console.log(myCollection);


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
