import React, { Component, Fragment } from "react";
import Book from '../../pages/book';

//class BookShow extends Component {
const BookShow = (props) => {

    //const BookShow = (props) => {
    //const { data } = this.props.bookInfo;
    //render() {
    //let data;
    let books = null;
    //data = this.props.bookInfo;
    const { bookInfo } = props;

    if (bookInfo.length === 0) {
        books = <p>Star a author to show!</p>;
    } else {
        //data.map((book) => {
        return (
            <Fragment>
                <div>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">ISBN</th>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookInfo.map((item, i) => (
                                <tr>
                                    <td> {item.id}</td>
                                    <td> {item.title} </td>
                                    <td> {item.authorName} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Fragment>
        )
        //});
        return <div>Nothing here. Fething data...</div>;

    }
}

export default BookShow;