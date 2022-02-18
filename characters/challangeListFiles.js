const text = 'list of files mp3: jazz.mp3, Rock.mp3, podcast.mp3, blues.mp3';

// 1 - brings the results that contains .mp3
const getMp3Regex = /\.mp3/g;
console.log(text.match(getMp3Regex))

const getMp3FilesRegex = /[a-z\|A-Z]*\.mp3/g;
console.log(text.match(getMp3FilesRegex))

const getMp3FilesBetterRegex = /\w+\.mp3/g;
console.log(text.match(getMp3FilesBetterRegex))