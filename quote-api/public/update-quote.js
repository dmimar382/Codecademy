const submitButton = document.getElementById('submit-updated-quote');
const newQuoteContainer = document.getElementById('updated-quote');

submitButton.addEventListener('click', () => {
  const quoteID = document.getElementById('quoteID').value;
  const quote = document.getElementById('quote').value;
  const person = document.getElementById('person').value;

  fetch(`/api/quotes?quoteID=${quoteID}&quote=${quote}&person=${person}` ,{
    method: 'PUT',
  })
  .then(response => response.json())
  .then((object) => {
    console.log(object)
    const newQuote = document.createElement('div');
    newQuote.innerHTML = `
    <h3>Congrats, your quote was updated!</h3>
    <div class="quote-id">${object.quoteID}</div>
    <div class="quote-text">${object.quote}</div>
    <div class="attribution">- ${object.person}</div>
    <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
    `
    newQuoteContainer.appendChild(newQuote);
  });
});
