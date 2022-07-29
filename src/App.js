import { BookList } from "./components/BookList";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <BookList />
      </div>
    </>
  );
};