import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import FooterDesktop from "../components/FooterDesktop";
import FooterMobile from "../components/FooterMobile";
import Productos from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <SearchBar
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <Productos
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <FooterMobile />
      <FooterDesktop />
    </div>
  );
}
