import { useState, useEffect } from "react";

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

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log({ data });
  //       bookList = data;
  //       console.log(bookList);
  //     })
  //     .catch((error) => console.log(error));

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {bookList.map((book) => (
        <div className="col">
          <div class="card h-100">
            <img src={book.volumeInfo.imageLinks.thumbnail} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{book.volumeInfo.title}</h5>
              <p class="card-text">{book.volumeInfo.categories}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
