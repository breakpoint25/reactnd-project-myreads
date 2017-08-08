import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends React.Component {
  state = {
    value: '',
    searchResults: []
  }

  searchBooks = () => {
    BooksAPI.search(this.state.value, 20).then(
      (searchResults) => {
        searchResults.map((result) => {
          const index = this.props.books.indexOf(result)
          console.log(index)
        })

        return searchResults
      }
    ).then(
      (searchResults) => {
        this.setState({
          searchResults
        })
      }
    )
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    }, this.searchBooks)
  }

  render() {
    const { searchResults } = this.state
    console.log(searchResults)
    const booksList = searchResults.length === 0 ?
      <li key='empty'>Emptry</li> : searchResults.map((book) => {
        return (
          <li key={book.id}>
            <Book book={book} />
          </li>
        )
      })

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" onChange={this.handleChange} value={this.state.value} placeholder="Search by title or author" />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {booksList}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
