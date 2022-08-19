let quoteText = document.getElementById("quote")
let tech = document.getElementById("technology")
let science = document.getElementById("science")
let history = document.getElementById("history")
let freedom = document.getElementById("freedom")
let random = document.getElementById("random")


tech.addEventListener("click", async () => {
    let quote = await fetch(`https://api.quotable.io/random?tags=technology`);
    quote = await quote.json();
    quoteText.innerHTML = quote.content + `<span class="author" id="author">${quote.author}</span>`;

})
science.addEventListener("click", async () => {
    let quote = await fetch(`https://api.quotable.io/random?tags=science`);
    quote = await quote.json();
    quoteText.innerHTML = quote.content + `<span class="author" id="author">${quote.author}</span>`;

})
history.addEventListener("click", async () => {
    let quote = await fetch(`https://api.quotable.io/random?tags=history`);
    quote = await quote.json();
    quoteText.innerHTML = quote.content + `<span class="author" id="author">${quote.author}</span>`;
})
freedom.addEventListener("click", async () => {
    let quote = await fetch(`https://api.quotable.io/random?tags=freedom`);
    quote = await quote.json();
    quoteText.innerHTML = quote.content + `<span class="author" id="author">${quote.author}</span>`;
})
random.addEventListener("click", async () => {
    let quote = await fetch(`https://api.quotable.io/random`);
    quote = await quote.json();
    quoteText.innerHTML = quote.content + `<span class="author" id="author">${quote.author}</span>`;
})