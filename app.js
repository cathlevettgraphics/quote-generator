function generateRandomQuote() {
    const randNum = Math.floor(Math.random() * data.length);
    
    const markup = `
    <h1>${data[randNum].quote}</h1>
    <p>–${data[randNum].film}</p>
`;
    const bigQuote = document.querySelector('.quote-gen');
    bigQuote.innerHTML = markup;
    // console.log(markup)
}

const getQuote = document.getElementById('btn');
getQuote.addEventListener('click', () => {
    generateRandomQuote()
})