async function getBooks() {
  const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=5Vd8O8baGS3WEG1eQVAaS2mG6K0VyHH8`)
  return response.data.results.books;
};
getBooks()



// Getting books from api & creating a new array to build html
async function showBooks() {
  let books = await getBooks()
  let bookGridHTMLArray = books.map(book => getHtmlForBook(book))
  console.log(bookGridHTMLArray)
  let booksGridHtml = bookGridHTMLArray.join("")
  console.log(booksGridHtml) // not sure if i need to add parameters for this function

  document.getElementById('main-content').innerHTML = booksGridHtml
}

showBooks()
/* Building a html document too build the book cards.
the book image, Book rank - Book Title, Book description, Clicking on the book image or title should redirect to the Amazon page for the book. */

function getHtmlForBook(book) {

  let bookSummaryHtml = 
  `
  {<div class="card">
  <a href ="${book.amazon_product_url}" target ="_blank"
             <img src="${book.book_image}" class="card-img-top">
             <div class="card-body">
                    <h5 class="card-title">Title:${book.title }</h5>
                    <p class="card-text">Rank: ${book.rank} <br> Description: ${book.description}</p>
              </div>
              </a>
      </div> */}
 ` 
  return bookSummaryHtml
}
getHtmlForBook(book)
