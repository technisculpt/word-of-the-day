const fs = require('fs');
const words = fs.readFileSync('five_letter_words.txt', 'utf8').split('\n').filter(Boolean);
const randomIndex = Math.floor(Math.random() * words.length);
const randomWord = words[randomIndex];
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<h1 id="random-word">.*<\/h1>/, `<h1 id="random-word">${randomWord}</h1>`);
fs.writeFileSync('index.html', html);
fs.appendFileSync('words.txt', randomWord + '\n');
