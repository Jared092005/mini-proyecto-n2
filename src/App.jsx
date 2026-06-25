import CategoryFilter from "./components/CategoryFilter";
import Productos from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <section className="min-h-screen">
        <SearchBar />
        <Productos />
        <CategoryFilter />
      </section>
    </>
  );
}

export default App;
