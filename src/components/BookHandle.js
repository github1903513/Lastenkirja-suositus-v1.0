
import ReactDOM from "react-dom";

export const GetOneAuthor = async (query) => {
    const URL = 'https://reststop.randomhouse.com/resources/authors?${query}';
    const response = await fetch(
        `https://reststop.randomhouse.com/resources/authors?${query}`
    );
    let xmlData = await response.text();
    let convert = require("xml-js");
    let jsonData = convert.xml2json(xmlData, {
        compact: true,
        trim: true,
        spaces: 1,
    }); //alert(jsonData);
    let parsedData = JSON.parse(jsonData);
    let authorIsbns = parsedData.authors.author.map((a) =>
        a.titles.hasOwnProperty("isbn") &&
        a.titles.isbn
            .filter((isbn) => isbn._attributes.contributortype === "A")
            .map((isbn) => isbn._text)
    );
    let isbns = authorIsbns.filter((a) => a);
    isbns = [].concat.apply([], isbns);
    isbns.length = 5;

    return isbns;
};


export const fetchTitles = async (isbn) => {
    const response = await fetch(
        `https://reststop.randomhouse.com/resources/titles/${isbn}`
    );
    let xmlData = await response.text();
    let convert = require("xml-js");
    let jsonData = convert.xml2json(xmlData, {
        compact: true,
        trim: true,
        spaces: 1,
    });
    let parsedData = JSON.parse(jsonData);
    let bookInfo = [
        {
            authorName: parsedData.title.authorweb._text,
            formatCode: parsedData.title.formatcode._text,
            id: parsedData.title.isbn._text,
            title: parsedData.title.titleshort._text,
        },
    ];

    return bookInfo;
    //return <div>Nothing here. Fething data...</div>;
};