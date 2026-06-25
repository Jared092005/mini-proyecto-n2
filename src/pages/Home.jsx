import CategoryFilter from "../components/CategoryFilter";
import FooterDesktop from "../components/FooterDesktop";
import FooterMobile from "../components/FooterMobile";
import Productos from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div>
      <SearchBar />
      <Productos />
      <CategoryFilter />
      <FooterMobile />
      <FooterDesktop />
    </div>
  );
}
