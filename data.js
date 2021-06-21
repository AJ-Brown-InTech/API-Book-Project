async function getBooks() {
  const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=5Vd8O8baGS3WEG1eQVAaS2mG6K0VyHH8`)
  return response.data.results.books;
};

let books = getBooks()

// console.log()
// Getting books from api & creating a new array to build html
async function showBooks() {
  let book = await getBooks(books.title)
//   let bookGridHtml = book.map(x => getHtmlForBooks) // not sure if i need to add parameters for this function
//   return bookGridHtml
}

console.log(showBooks())
/* Building a html document too build the book cards.
the book image, Book rank - Book Title, Book description, Clicking on the book image or title should redirect to the Amazon page for the book. */

function getHtmlForBooks() {

  let bookSummaryHtml = `
 <article>
    <a href ="${book.amazon_product_url}" target ="_blank" 
        <img src ="${book.book_image}" alt="nytimesimg"/>
            <span> ${book.title} - Rank Number:${book.rank}
            </span>
        </a>
    <p>${book.description}</p>
</article>
 `
  return bookSummaryHtml
}
