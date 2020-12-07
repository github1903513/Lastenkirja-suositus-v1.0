import React from 'react';
import ReactDOM from 'react-dom';

// Authortietoja
// Määritellään käsittelija napille 1

const SearchBar = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Tapahtuman aiheutti: ", event.target);
        var form = event.target;
        console.log("Hakusana: ", form.query.value);
        // Kutsutaan funktiota ja välitään sinne käyttäjän hakusana
        GetOneAuthor(form.query.value);
    };

    // Komponentin palauttama JSX muotoinen esitys
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Select a author(Top 10 children book author): </label>
                <select name="query" id="query" onchange="">
                    <option value="null">select a artist</option>
                    <option value="lastName=Dahl&firstName=Roald">Roald Dahl</option>
                    <option value="lastName=Dewdney&firstName=Anna">Anna Dewdney</option>
                    <option value="lastName=Cousins&firstName=Lucy">Lucy Cousins</option>
                    <option value="lastName=Rowling&firstName=J.K.">J.K. Rowling</option>
                    <option value="lastName=Palacio&firstName=R.J.">R.J. Palacio</option>
                    <option value="lastName=Symbol&firstName=Norton">Norton Symbol</option>
                </select>
            </div>
            <div id="submitarea" className="form-group">
                <button type="submit" id="button1" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    );
};
ReactDOM.render(<SearchBar />, document.getElementById("selectarea"));
