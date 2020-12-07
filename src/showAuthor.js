import React from 'react';
import ReactDOM from 'react-dom';



// Authortietoja     
const GetOneAuthor = (query) => {
    fetch("https://reststop.randomhouse.com/resources/authors?" + query)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            console.log("Haun tulokset", data);
            const items = data;
            console.log("One author: ", data);

            ReactDOM.render(
                <AuthorArray data={items} />,
                document.getElementById("info")
            );
        });
    return <div>Nothing here. Fething data...</div>;
};

// Authortietojen esittäminen taulukossa
const AuthorArray = (props) => {
    const { data } = props;
    // Leffan kuvake
    var posterImg;
    var url;

    // Funktio tyhjien kuvien tsekkaamiseen
    const CheckPoster = (props) => {
        var poster = props.src;
        // Jos kuvaa ei ole määritelty, korvataan se ikonilla
        if (poster == "" || poster == null) {
            posterImg = "https://reststop.randomhouse.com/resources/titles/" +;
        } else {
            posterImg = poster;
        }
        // Palautetaan kuvatägi. onError suoritetaan jos kuvan lataus ei onnistu
        return (
            <img
                src={posterImg}
                className="img-thumbnail"
                alt="Poster image"
                onError={addDefaultSrc}
                width="50%"
            />
        );
    };

    //Yritetään asettaa rikkinäiseen kuvaan tyhjä ikoni tai edes poistaa src-tägistä kokonaan
    const addDefaultSrc = (ev) => {
        console.log(ev.target);
        ev.target.src = "https://via.placeholder.com/150";
        ev.onError = null;
    };

    return (
        <div>
            <SearchBar />
            <table className="table table-striped table-bordered">
                <thead>
                    <tr key={props.id}>
                        <th scope="col">Title</th>
                        <th scope="col">Year</th>
                        <th scope="col">Directors</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Poster</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr>
                            <td key={i}> {item.title}</td>
                            <td> {item.year} </td>
                            <td> {item.directors} </td>
                            <td> {item.imdb.rating}</td>
                            {/*  Luodaan kuvatägi komponentin sisältämässä funktiossa */}
                            <td id="pic">
                                <CheckPoster src={item.poster} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};