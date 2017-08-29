import React from "react";
import {Link} from "react-router-dom";
import * as BookAPI from "./../../BooksAPI";
import * as Constants from "./../../Constants";
import BookRow from "./components/BookRow";
class BookshelfScreen extends React.Component {
    state = {
        books: [],
        currentlyReadingBooks: [],
        wantToReadBooks: [],
        readBooks: []
    }

    getAllBooks() {

        BookAPI.getAll().then((books) => {
           this.processBooks(books);
        })
    }
    processBooks = (books) =>{

        this.setState({
            books: books,
            currentlyReadingBooks: books.filter((book) => {
                return book.shelf === Constants.currentlyReading
            }),
            wantToReadBooks: books.filter((book) => {
                return book.shelf === Constants.wantToRead
            }),
            readBooks: books.filter((book) => {
                return book.shelf === Constants.read
            })
        });
    }
    onReloadBooks = (book,type) =>{
        let currentBooks = this.state.books;
        currentBooks.map((cbook)=>{
            if(cbook.id===book.id){
                cbook.shelf = type;
                return cbook;
            }
            return book;
        })
        this.processBooks(currentBooks);
    }
    componentDidMount() {
        this.getAllBooks();
    }

    render() {
        const {currentlyReadingBooks, wantToReadBooks, readBooks} = this.state;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {
                                        currentlyReadingBooks.map((book) => (
                                                <BookRow onReloadBooks={this.onReloadBooks} book={book} key={book.id}/>
                                            )
                                        )
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {
                                        wantToReadBooks.map((book) => (
                                                <BookRow onReloadBooks={this.onReloadBooks} book={book} key={book.id}/>
                                            )
                                        )
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {
                                        readBooks.map((book) => (
                                                <BookRow onReloadBooks={this.onReloadBooks} book={book} key={book.id}/>
                                            )
                                        )
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search"/>
                </div>
            </div>
        )
    }
}

export default BookshelfScreen