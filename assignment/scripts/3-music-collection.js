console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

// Adds an album object to a collection array
function addToCollection (collection, title, artist, yearPublished, trackList) {
  let albumToAdd = {
    title,
    artist,
    yearPublished,
    trackList
  }
  collection.push(albumToAdd);
  return albumToAdd;
}
console.log('Added:', 
addToCollection(myCollection, 'Galore', 'Oklou', 2020,
[{name: 'asturias', duration: '1:32'},
  {name: 'girl on my throne', duration: '3:00'},
  {name: 'another night', duration: '3:42'},
  {name: 'galore', duration: '2:28'},
  {name: 'unearth me', duration: '3:26'},
  {name: 'rosebud', duration: '2:46'},
  {name: 'little', duration: '0:49'},
  {name: "god's chariots", duration: '3:04'},
  {name: 'nighttime', duration: '2:11'},
  {name: 'fall', duration: '2:13'}, 
  {name: "I didn't give up on you", duration: '8:07'}]),
addToCollection(myCollection, 'Sea and the Darkness', 'Galileo Galilei', 2016,
[{name: 'Sea and the Darkness', duration: '1:07'},
{name: 'Kung Fu Boy', duration: '2:52'},
{name: 'Ghost', duration: '4:30'},
{name: 'Wednesday', duration: '3:31'},
{name: 'Bed ft. Aimer', duration: '3:47'},
{name: 'Tori To Tori', duration: '4:35'},
{name: 'Moeru Mori To Hyouga', duration: '3:13'},
{name: 'Nichiyou', duration: '1:45'},
{name: 'Koi No Jumyou (Remastered)', duration: '5:06'},
{name: 'Arashi No Ato De', duration: '5:08'},
{name: 'Unique', duration: '3:04'},
{name: 'Blues', duration: '3:55'},
{name: 'Aoi Chi', duration: '5:22'},
{name: 'Sea and the Darkness 2: Totally Black', duration: '4:08'},
{name: 'Climber', duration: '3:10'}]),
addToCollection(myCollection, 'BBHF1 - Young Man Goes South', 'BBHF', 2020,
[{name: 'Ryu Hyo', duration: '4:10'},
{name: 'Tsuki no Kutsu', duration: '1:35'},
{name: 'Siva', duration: '4:40'},
{name: 'N30E17', duration: '4:42'},
{name: 'Crayon Missile', duration: '4:14'},
{name: 'Retake', duration: '4:00'},
{name: 'Tokenai Mahou', duration: '4:23'},
{name: '1988', duration: '4:09'},
{name: 'YOUNG MAN GOES SOUTH', duration: '1:35'},
{name: 'Tori To Kuma To Nousagi To Sakana', duration: '1:33'},
{name: 'Yuhi', duration: '2:44'},
{name: 'Bokura No Seikatsu', duration: '3:26'},
{name: 'Tsukareteku', duration: '4:01'},
{name: 'Kimi Wa Sasete Kureru', duration: '4:50'},
{name: 'Flint Stone', duration: '4:17'},
{name: 'YoHoHiHo', duration: '3:10'},
{name: 'Taiyo', duration: '4:37'}]),
addToCollection(myCollection, 'Family', 'BBHF', 2019,
[{name: 'Hana No Youni', duration: '3:11'},
{name: 'Nani Mo Shiranai', duration: '4:14'},
{name: 'Mayonaka No Dance', duration: '4:30'},
{name: 'Simple', duration: '5:29'},
{name: 'Suimen Wo Tatake', duration: '5:01'},
{name: 'Akogare', duration: '4:18'},
{name: 'Namida No Kaidan', duration: '3:47'}]),
addToCollection(myCollection, 'Mirror Mirror', 'BBHF', 2019,
[{name: 'Torch', duration: '3:53'},
{name: 'Daisuki', duration: '3:22'},
{name: 'Tomodachi E', duration: '4:00'},
{name: 'Mirror Mirror', duration: '2:55'},
{name: 'Back', duration: '3:48'},
{name: 'Libido', duration: '5:06'}]),
addToCollection(myCollection, 'Bee And The Whales', 'Galileo Galilei', 2023,
[{name: 'Hey Hey', duration: '3:09'},
{name: 'Please Die', duration: '3:28'},
{name: 'Colors', duration: '4:11'},
{name: 'No Cast', duration: '3:35'},
{name: 'To Peter With Love', duration: '3:58'},
{name: 'Father', duration: '3:43'},
{name: 'I Like You', duration: '4:21'},
{name: 'Tide', duration: '4:35'},
{name: 'Your Season', duration: '4:21'},
{name: 'Loveless', duration: '4:12'},
{name: 'Bee and The Whales', duration: '2:37'},
{name: 'Guitar Bag', duration: '5:01'},
{name: 'Bouquet And Crystal', duration: '4:03'},
{name: 'Asobo', duration: '4:12'}]),
addToCollection(myCollection, 'food house', 'food house', 2020,
[{name: 'Sole', duration: '2:41'},
{name: 'Ride', duration: '2:36'},
{name: '8 Now', duration: '3:29'},
{name: '51129', duration: '3:27'},
{name: 'One You Know', duration: '3:44'},
{name: 'Mos Thoser', duration: '4:07'},
{name: 'Curses', duration: '2:52'},
{name: 'Clown Nose', duration: '2:40'},
{name: 'Pharmacy', duration: '1:34'},
{name: 'Metal', duration: '2:53'},
{name: 'Foresight', duration: '5:48'}]),
addToCollection(myCollection, 'UFOF', 'Big Thief', 2019,
[{name: 'Strange', duration: '3:41'},
{name: 'Betsy', duration: '3:28'},
{name: 'Contact', duration: '3:54'},
{name: 'Cattails', duration: '4:05'},
{name: 'Orange', duration: '3:30'},
{name: 'Jenni', duration: '4:11'},
{name: 'Century', duration: '3:07'},
{name: 'UFOF', duration: '3:08'},
{name: 'Open Desert', duration: '3:47'},
{name: 'Terminal Paradise', duration: '3:25'},
{name: 'Magic Dealer', duration: '3:01'},
{name: 'From', duration: '3:58'}]));
console.log('The full collection:', myCollection);

// Console logs every album object in a collection array as a string
function showCollection(collection) {
  for (let object of collection) {
    let trackList = '';
    let index = 1;
    for (let track of object.trackList) {
      trackList += `${index}. ${track.name}: ${track.duration}\n`
      index++;
    }
    console.log(`${object.title} by ${object.artist}, 
    published in ${object.yearPublished}:\n ${trackList}`);
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

// ***** STRETCH GOAL *****
// Searches a collection array for all album objects with BOTH 
// the specified artist AND the specified year
function search(collection, searchCriteria) {
  let matchingResult = [];
  // 1
  if (searchCriteria != undefined 
    && searchCriteria.trackName != undefined) {
      for (let object of collection) {
        for (let track of object.trackList) {
          if (track.name == searchCriteria.trackName) {
            matchingResult.push(object);
          }
        }
      }
      return matchingResult;
  }
  // 2
  else if (searchCriteria == undefined 
    || searchCriteria == {} 
    || searchCriteria.artist == undefined 
    || searchCriteria.artist == ''
    || (searchCriteria.year == undefined 
    && searchCriteria.yearPublished == undefined)) { 
      return collection;
  }
  // 3
  else if (searchCriteria != undefined) {
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
console.log('Should find the Galileo Galilei album that contains Blues', search(myCollection, {artist: 'Galileo Galilei', trackName: 'Blues'}));
console.log('Should find the food house album that contains One You Know, even if the artist is wrong', search(myCollection, {artist: 'Oklou', trackName: 'One You Know'}));
console.log('Should not find the track and return an empty array', search(myCollection, {artist: 'Revenge Wife', trackName: 'Earthquake'}));


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
