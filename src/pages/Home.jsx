import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import FooterDesktop from "../components/FooterDesktop";
import FooterMobile from "../components/FooterMobile";
import Productos from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
      <Productos searchQuery={searchQuery} />
      <CategoryFilter />
      <FooterMobile />
      <FooterDesktop />
    </div>
  );
}
