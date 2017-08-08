import React from 'react'

class Book extends React.Component {
  state = {
    value: this.props.book.shelf
  }

  handleChange = (event) => {
    this.props.onShelfUpdate(this.props.book, event.target.value)

    this.setState({value: event.target.value})
  }

  render() {
    // Nested destructuring with ES6
    const {
      book: { title, authors, imageLinks: { thumbnail } }
    } = this.props

    console.log(thumbnail)
    const authorsList = authors.map((author) => {
      return <div key={author}>{author}</div>
    })

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: 'url(' + thumbnail + ')'
            }}>
          </div>
          <div className="book-shelf-changer">
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authorsList}</div>
      </div>
    )
  }
}

export default Book