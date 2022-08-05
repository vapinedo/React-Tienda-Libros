import { AppRouter } from "./AppRouter";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <AppRouter />
      </div>
    </>
  );
};
