console.log('***** Music Collection *****')
console.log('--version 1 START - ONE giant array');
let collection1 = [];


// function addToCollection1 ( collectionVariable, title, artist, yearPublished ) {
//     let newObject =[]; //creating blank array called new object
//     collectionVariable.push(title);//adding "title' to array
//     collectionVariable.push(artist)//adding "artist' to array
//     collectionVariable.push(yearPublished)//adding "yearPublished' to array
//     return newObject; //returning the NewObject as the result
// }
// addToCollection1(collection1, 'Its Blitz!', 'Yeah Yeah Yeahs', '2009');
// //called the function, specified "collection" as the array to use, added title, artist, yearpub

// console.log('collection is now-->' + collection1); //prove it worked




// //Version 2, adding an array for each album, INSIDE the main "collection" array. Just for fun.
// //would just be easier to actual look up a single album if we were using this example in the real world
// console.log('--version 2 - multiple arrays INSIDE main array');
// let collection2 = [];

// function addToCollection2 ( collectionVariable, title, artist, yearPublished ) {
//     // collectionVariable=[];
//     let newAlbum =[]; //creating blank array called new object
//     newAlbum.push(title);//adding "title' to array
//     newAlbum.push(artist)//adding "artist' to array
//     newAlbum.push(yearPublished)//adding "yearPublished' to array
//     collectionVariable = collectionVariable.push(newAlbum);
//     console.log(newAlbum);

//     return collectionVariable; //returning the NewObject as the result
// }
// addToCollection2(collection2, 'Its Blitz!', 'Yeah Yeah Yeahs', '2009');
// //called the function, specified "collection" as the array to use, added title, artist, yearpub
// addToCollection2(collection2, 'Dreamland', 'Glass Animals', '2020' )
// addToCollection2(collection2, 'Life of Pablo', 'Kanye', '2016' )
// addToCollection2(collection2, 'Youre a Woman, Im a Machine', 'Death from Above 1979', '2004' )
// addToCollection2(collection2, 'Walking on a Dream', 'Empire of the Sun', '2008' )
// addToCollection2(collection2, 'Take off your pants and jacket', 'blink 182 ', '2001' )
// addToCollection2(collection2, 'Enema of the State', 'blink 182 ', '1999' )
// addToCollection2(collection2, 'all killer no filler songs', 'sum 41  ', '2001' )

// console.log( 'My full record collection is:'+ collection2 );


// console.log( 'this is my new record collection:'+ collection);
// console.log('new collection is -->', collection);
// console.log('Check first album. Should be Yeah Yeah Yeahs--> ', collection[0] );
// console.log(collection[0], collection[1], collection[2]);
// function entireCollection(array){
//     for ( let i of array ){
//     i = array[];
//     }
//     return array;
// }


//tried to log every array(album) in the main array on a new line in. couldn't figure it out.
// console.log('test'+ entireCollection(collection));
// function entireCollection(array) {
//     for (let album=0; album <= array.length; album++ ) {
//         // console.log('album: ' + array[album])
//         return album;
//     }
//     // return ;
// }
// entireCollection(collection);

// console.log('---stat of "showCollection"---');

// function showCollection (array, ablum ) {
//     for (let i=0; i< array.length; i++) {
//         ablum = i;
//         console.log('This album is--> ' + array[i]);

//     }
//     // albumCount = array.length;
//     // albumInfo = array[i];

//     return ablum
// }
// console.log(showCollection(collection2));
//FORGOT TO MAKE ALBUMS O-B-J-E-C-T-S RE DOING THIS ----


console.log('------version 3 - albums as OBJECTS - INSIDE main array(whoops)-----');
let collection = [];

function addToCollection ( titleName, artistName, yearPublishedName ) {
    // collectionVariable=[];
    let newAlbum ={
        title: titleName,
        artist: artistName,
        yearPublished: yearPublishedName
    }; //creating blank array called new object
    // newAlbum.push(title);//adding "title' to array
    // newAlbum.push(artist)//adding "artist' to array
    // newAlbum.push(yearPublished)//adding "yearPublished' to array
    // collectionVariable = collectionVariable.push(newAlbum);
    collection.push(newAlbum);
    // console.log('adding new album:', newAlbum);

    return newAlbum; //returning the NewObject as the result
}

addToCollection( 'Its Blitz!', 'Yeah Yeah Yeahs', '2009');
// //called the function, specified "collection" as the array to use, added title, artist, yearpub
addToCollection( 'Dreamland', 'Glass Animals', '2020' )
addToCollection( 'Life of Pablo', 'Kanye', '2016' )
addToCollection( 'Youre a Woman, Im a Machine', 'Death from Above 1979', '2004' )
addToCollection( 'Walking on a Dream', 'Empire of the Sun', '2008' )
addToCollection( 'Take off your pants and jacket', 'blink 182 ', '2001' )
addToCollection( 'Enema of the State', 'blink 182 ', '1999' )
addToCollection( 'All killer no filler songs', 'sum 41  ', '2001' )



console.log('---stat of "showCollection"---');

function showCollection (array ) {
    for ( album of array ){
        console.log( 'Title: ', album.title, 'By Artist: ', album.artist, 'Published in year: ', album.yearPublished );
    
    }

    // for (let i=0; i< array.length; i++) {
        
    //     console.log('This album is--> ' + array[i]);
    return

    // } 
    // // albumCount = array.length;
    // // albumInfo = array[i];
}
console.log('test', showCollection(collection));

// console.log( collection.forEach(x => console.log('Title: ', x.title, 'Artist: ', x.artist, 'Year Published: ', x.yearPublished) ));


// console.log( 'My full record collection is:', collection );
// collection.map( x => console.log('My full record collection is', x));

// console.log('---showCollection Function---');
// function showCollection (array,album) {
//     album = array.[];
//     return album

// }
// console.log( showCollection(collection, 2) );


// function showCollection (array, albumToCheck, parameterToCheck ) {
//     console.log('in showCollection' ); //per Dev will delete later
//     //array, i, p, 
//     a = array;
//     i = albumToCheck;
//     p = parameterToCheck;
//     console.log('checking album', a[i]);
//     console.log('checking array length', array.length);
//     if ( i.yearPublished == parameterToCheck ) {
//        return true;
//     }
//     else {
//         return false;
//     }  
// }

// console.log(showCollection(collection , 0, '2009' ));


// function findByArtist ( artist ) {
//     blankarray = [];
// }
// console.log(obtitle);

// let testarray = [1,2,3,4,];
// for ( i of testarray );