import imgMenu from "../../public/icons/menu-svgrepo-com.svg";
import imgSearch from "../../public/icons/search-svgrepo-com.svg";
import imgBag from "../../public/icons/shopping-bag-svgrepo-com.svg";
import imgPerson from "../../public/images/image.png";

export default function SearchBar() {
  return (
    <>
      <header className=" w-full">
        <div className="w-full p-4 flex justify-between">
          <img src={imgMenu} alt="menu hamburguesa" className="w-8" />
          <h1 className="text-blue-700 text-4xl ml-4">LUXE</h1>
          <img src={imgSearch} alt="" className="w-8" />
          <img src={imgBag} alt="" className="w-8" />
        </div>
      </header>
      <section className="w-full relative">
        <img
          src={imgPerson}
          alt="persona con un abrigo"
          className="h-130 object-cover overflow-hidden"
        />
        <article className="absolute flex flex-col gap-4 top-20 left-4 z-30 text-center px-4">
          <p className="font-bold text-blue-600">NEW COLLECTION 2024</p>
          <p className="text-white text-4xl font-bold">
            Redefine Your Everyday Style
          </p>
          <p className="text-gray-300">
            Discover our curated collection of premium essentials designed for
            the modern lifestyle.
          </p>
          <button className="bg-blue-600 w-full p-4 rounded-lg text-white font-semibold active:bg-blue-800 active:scale-90 transition duration-150">
            Shop Collection
          </button>
          <button className="bg-gray-500/70 p-4 rounded-lg text-white font-semibold active:bg-gray-700/70 active:scale-90 transition duration-150">
            View Lookbook
          </button>
        </article>
        <div className="absolute inset-0 bg-black/60 z-20"></div>
      </section>
    </>
  );
}
