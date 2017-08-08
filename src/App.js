import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Search from './Search'
import List from './List'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      this.setState({
        books
      })
    })
  }

  handleShelfUpdate = (book, shelf) => {
    const index = this.state.books.indexOf(book)
    const updatedBooks = [...this.state.books]

    if (shelf === 'none') {
      updatedBooks.splice(index, 1) // remove book
      //TO DO - add update API code
    } else {
      const updatedBook = {...book, shelf} //update shelf location
      updatedBooks[index] = updatedBook // overwrite existing book
      //TO DO - add update API code
    }

    this.setState({
      books: updatedBooks
    })
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => (
              <List books={this.state.books} onShelfUpdate={this.handleShelfUpdate} />
            )} />
            <Route path='/search' render={() => (
              <Search books={this.state.books} />

            )} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
