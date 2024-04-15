interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Feel it',
    details: {
        author: 'd4vd',
        year: 2024
    }
}

const { song, songDuration: duration, details } = audioPlayer;
const { author } = details;

// console.log(`Song: `, audioPlayer.song);
// console.log(`Song: `, song);

// console.log(`Song: `, audioPlayer.songDuration);
// console.log(`Song: `, duration);

// console.log(`Song: `, audioPlayer.details.author);
// console.log(`Song: `, author);

const countries: string[] = ['Ec', 'Col', 'Bzl'];
const colombia = countries[1] || 'Not Found';

const [ec, co, bz] = countries;

console.log('Country 2: ', colombia);
console.log('Country 2: ', co);

export {};