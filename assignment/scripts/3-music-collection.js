console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

// Adds an album object to a collection array
function addToCollection (collection, title, artist, yearPublished) {
  let albumToAdd = {
    title,
    artist,
    yearPublished
  }
  collection.push(albumToAdd);
  return albumToAdd;
}
console.log('Added:', addToCollection(myCollection, 'Galore', 'Oklou', 2020),
addToCollection(myCollection, 'Sea and the Darkness', 'Galileo Galilei', 2016),
addToCollection(myCollection, 'BBHF1 - Young Man Goes South', 'BBHF', 2020),
addToCollection(myCollection, 'Family', 'BBHF', 2019),
addToCollection(myCollection, 'Mirror Mirror', 'BBHF', 2019),
addToCollection(myCollection, 'Bee And The Whales', 'Galileo Galilei', 2023),
addToCollection(myCollection, 'food house', 'food house', 2020),
addToCollection(myCollection, 'UFOF', 'Big Thief', 2019));
console.log('The full collection:', myCollection);

// Console logs every album object in a collection array as a string
function showCollection(collection) {
  for (let object of collection) {
    console.log(`${object.title} by ${object.artist}, published in ${object.yearPublished}`);
  }
}
showCollection(myCollection);

// Searches a collection array for all album objects with the specified artist
function findByArtist(collection, artist) {
  let matchingResults = [];
  for (let object of collection) {
    if (object.artist == artist) {
      matchingResults.push(object);
    }
  }
  return matchingResults;
}
console.log('Albums by BBHF:', findByArtist(myCollection, 'BBHF'));
console.log('Albums by Madeon:', findByArtist(myCollection, 'Madeon'));

// Searches a collection array for all album objects with BOTH 
// the specified artist AND the specified year
function search(collection, searchCriteria) {
  let matchingResult = [];
  if (searchCriteria == undefined 
    || searchCriteria == {} 
    || searchCriteria.artist == undefined 
    || searchCriteria.artist == ''
    || (searchCriteria.year == undefined 
    && searchCriteria.yearPublished == undefined)) { 
      return collection;
  }
  else {
    for (let object of collection) {
      if (object.artist == searchCriteria.artist 
        && (object.yearPublished == searchCriteria.year
        || object.yearPublished == searchCriteria.yearPublished)) {
        matchingResult.push(object);
      }
    }
    return matchingResult;
  }
}
console.log('Should find two BBHF albums published in 2019', search(myCollection, {artist: 'BBHF', year: 2019}));
console.log('Should find one food house album published in 2020', search(myCollection, {artist: 'food house', yearPublished: 2020}));
console.log('Should not find artist or year and return the entire collection', search(myCollection, {}));
console.log('Should not find a match and return an empty array', search(myCollection, {artist: 'Galileo Galilei', year: 2020}));
console.log('Should not find artist or year and return the entire collection', search(myCollection, 'no object'));
console.log('Should not find artist or year and return the entire collection', search(myCollection));


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
