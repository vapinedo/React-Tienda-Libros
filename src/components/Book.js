import { useNavigate } from "react-router-dom";

export function Book({ book }) {
  const navigate = useNavigate();

  const handleClick = (book) => {
    navigate(`/book/${book.id}`);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{book.volumeInfo.title}</h5>
          <p className="card-text">{book.volumeInfo.categories}</p>
          <button onClick={() => handleClick(book)} className="btn btn-primary">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
}
