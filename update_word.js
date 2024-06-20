function getRandomWord()
{
    let _random_index;
    let _random_word;
    const maxAttempts = 1000;
    let attempts = 0;
    
    do
    {
        _random_index = Math.floor(Math.random() * words.length);
        _random_word = words[_random_index];
        attempts++;
    }
    while (used_words.includes(_random_word) && attempts < maxAttempts);

    if (attempts >= maxAttempts)
    {
        throw new Error('Exceeded maximum attempts to find a new word');
    }

    return _random_word;
}

const fs = require('fs');
const used_words = fs.readFileSync('words.txt', 'utf8').split('\n').filter(Boolean);
const words = fs.readFileSync('five_letter_words.txt', 'utf8').split('\n').filter(Boolean);
const random_word = getRandomWord();
console.log(random_word);
random_word.replace('\n', '');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<h1 id="random-word">.*<\/h1>/, `<h1 id="random-word">${random_word}</h1>`);
fs.writeFileSync('index.html', html);
fs.appendFileSync('words.txt', random_word + '\n');
