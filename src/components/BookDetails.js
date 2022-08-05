import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Book } from './Book';

export const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  let url = `https://www.googleapis.com/books/v1/volumes/${id}`;

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch(url);
      const book = await response.json();
      console.log(book);
      setBook(book);      
    };
    getBooks();
  }, []);

  return (
    <div className="col-md-4">
      {(book == null) ? <p>Loading...</p> : <Book book={book} />}
    </div>
  )
}