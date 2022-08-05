import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookDetails } from "./components/BookDetails";
import { BookList } from "./components/BookList";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
