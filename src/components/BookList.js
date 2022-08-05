import { useState, useEffect } from "react";
import { Book } from "./Book";

export const BookList = () => {
  let url = `https://www.googleapis.com/books/v1/volumes?maxResults=20&orderBy=relevance&q=oliver%20sacks`;

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const books = data.items;
      console.log({ books });
      setBookList(books);
    };
    getBooks();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {bookList.map((book) => <Book key={book.id} book={book} />)}
    </div>
  );
};
