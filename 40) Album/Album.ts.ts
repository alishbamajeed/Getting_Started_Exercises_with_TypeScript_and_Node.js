interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Making three dictionaries representing different albums
const album1 = makeAlbum("Artist1", "Album1");
const album2 = makeAlbum("Artist2", "Album2", 12);
const album3 = makeAlbum("Artist3", "Album3");

// Printing each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);

