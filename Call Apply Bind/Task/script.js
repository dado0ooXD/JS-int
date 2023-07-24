const book =  {
    title: "Road to Euro",
    author: "Davud"
}

function text(year, method) {
    console.log(`${method} === ${this.title} was written by ${this.author} and was released in ${year}`)
}

// Call()
text.call(book, 2018, "Call");

// Apply()
text.apply(book, [2018, "Apply"])

// Bind
const bookInfo = text.bind(book, 2018, "Bind");
bookInfo();