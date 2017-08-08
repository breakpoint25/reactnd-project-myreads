import React from 'react'
import { Link } from 'react-router-dom'
//import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'

class List extends React.Component {
  constructor(props) {
    super(props)

    this.CATEGORIES = {
      CURRENTLY_READING: { filter: 'currentlyReading', text: 'Currently Reading' },
      WANT_TO_READ: { filter: 'wantToRead', text: 'Want to Read' },
      READ: { filter: 'read', text: 'Read' }
    }

    this.state = {
    }

  }

  filterBooks = (books, filterBy) => {
    return books.filter((book) => {
      return book.shelf === filterBy
    })
  }

  render() {
    const { books, onShelfUpdate } = this.props
    const shelfList = Object.entries(this.CATEGORIES).map((category) => {
      return (
        <Shelf key={category[1].filter} title={category[1].text} books={this.filterBooks(books, category[1].filter)}
          onShelfUpdate={onShelfUpdate} />
      )
    })

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelfList}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default List
