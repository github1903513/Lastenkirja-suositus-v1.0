import React, { Component, Fragment } from 'react';
import ReactDOM from "react-dom";
import { GetOneAuthor, fetchTitles } from "../../components/BookHandle";
import BookShow from "../../components/BookShow/BookShow";
import { NavLink } from 'react-router-dom';


//const Book = () => {
class Book extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allIsbns: [],
            bookInfo: [],
        };
    }

    handleSubmit = (event) => {
        this.state.allIsbns = [];
        event.preventDefault();
        console.log("Tapahtuman aiheutti: ", event.target);
        var form = event.target;
        console.log("Hakusana: ", form.query.value);
        // Kutsutaan funktiota ja välitään sinne käyttäjän hakusana
        // GetOneAuthor(form.query.value);
        GetOneAuthor(form.query.value)
            .then((result) =>
                this.setState({ allIsbns: [...this.state.allIsbns, ...result] })
            )
            .then(() => this.getTitles())
            .catch((error) => console.log("error", error));
    };

    getTitles = () => {
        //alert("getTitles");
        this.state.bookInfo = [];
        this.state.allIsbns.map(async (isbn) => {
            //alert(isbn);
            await fetchTitles(isbn)
                .then((result) =>
                    this.setState({ bookInfo: [...this.state.bookInfo, ...result] })
                )
                //.then(() => this.filterFormats())
                .then(() => this.removeDuplicates())
            //.then(() => this.sortAlphabetically());
            //alert("bookInfo.title " + this.state.bookInfo);
            ReactDOM.render(
                <BookShow bookInfo={this.state.bookInfo} />,
                document.getElementById("info")
            );
        });
    };

    filterFormats = () => {
        let filteredFormats = this.state.bookInfo.filter(
            (book) => book.formatCode === "HC"
        );
        this.setState({ bookInfo: [...filteredFormats] });
    };

    removeDuplicates = () => {
        let uniqueTitles = Array.from(
            new Set(this.state.bookInfo.map((book) => book.title))
        ).map((title) => {
            return this.state.bookInfo.find((book) => book.title === title);
        });
        this.setState({ bookInfo: [...uniqueTitles] });
    };

    sortAlphabetically = () => {
        let alphabetical = this.state.bookInfo.sort((a, b) =>
            a.title > b.title ? 1 : -1
        );
        this.setState({ bookInfo: [...alphabetical] });
    };

    render() {
        return (
            <Fragment>

                <div class="row">
                    <div class="col-12">
                        <ul class="nav justify-content-left">
                            <li class="nav-item">
                                <NavLink to="/home" className="list-group-item">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/book" className="list-group-item">Book</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/management" className="list-group-item">Management</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="selectarea" class="container p-3 my-3 border">
                    <form onSubmit={this.handleSubmit} method="get">
                        <div className="form-group">
                            <label>Select a author(Top 10 children book author): </label>
                            <select name="query" id="query" >
                                <option value="null">select a artist</option>
                                <option value="lastName=Dahl&firstName=Roald">Roald Dahl</option>
                                <option value="lastName=Dewdney&firstName=Anna">Anna Dewdney</option>
                                <option value="lastName=Jansson&firstName=Tove">Tove Jansson</option>
                                <option value="lastName=Rowling&firstName=J.K.">J.K. Rowling</option>
                                <option value="lastName=Dicamillo&firstName=Kate">Kate Dicamillo</option>
                                <option value="lastName=Cole&firstName=Joanna">Joanna Cole</option>
                            </select>
                        </div>
                        <div id="submitarea" className="form-group">
                            <button type="submit" id="button1" className="btn btn-primary">
                                Submit
                </button>
                        </div>
                    </form>
                </div>

                <div id="content" class="container">
                    <div id="info" class="topAblums">Author's top 5 books goes here......</div>
                    <br />
                    <br />
                </div>

            </Fragment>

        )
    }
}

export default Book;