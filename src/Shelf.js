import React from 'react'
//import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Shelf extends React.Component {
  state = {
  }

  render() {
    const { title, books,  onShelfUpdate } = this.props
    const booksList = books.length === 0 ?
      <li key='empty'>Emptry</li> : books.map((book) => {
        return (
          <li key={book.id}>
            <Book book={book} onShelfUpdate={onShelfUpdate} />
          </li>
        )
      })

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksList}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
