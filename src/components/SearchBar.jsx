import imgMenu from "../../public/icons/menu-svgrepo-com.svg";
import imgSearch from "../../public/icons/search-svgrepo-com.svg";
import imgBag from "../../public/icons/shopping-bag-svgrepo-com.svg";
import imgPerson from "../../public/images/image.png";

export default function SearchBar() {
  return (
    <>
      <header className=" w-full">
        <div className="w-full p-4 flex justify-between xl:justify-evenly">
          <div className="flex gap-16 lg:gap-0 items-center">
            {" "}
            <img
              src={imgMenu}
              alt="menu hamburguesa"
              className="w-8 lg:hidden"
            />
            <img src={imgBag} alt="" className="hidden w-8 lg:block" />
            <h1 className="text-blue-700 text-4xl ml-4 lg:text-black lg:text-3xl">
              LUXE
            </h1>
            <div className="hidden lg:flex lg:items-center text-lg gap-6 ml-8 text-gray-800/60">
              <p className="cursor-pointer">Electronics</p>
              <p className="cursor-pointer"> Jewelry</p>
              <p className="cursor-pointer">Men's</p>
              <p className="cursor-pointer">Women's</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img src={imgSearch} alt="" className="w-8 lg:hidden" />
            <input
              type="text"
              className="hidden lg:inline outline-none px-6 py-3 rounded-2xl bg-gray-200"
              placeholder="🔍 Search Products..."
            />
            <div className="hidden lg:flex">
              <button className="bg-white h-18 w-17 flex items-center justify-center rounded-full active:scale-90 transition duration-150 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-heart-fill w-6 cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                  />
                </svg>
              </button>

              <button className="bg-white h-18 w-17 flex items-center justify-center rounded-full active:scale-90 transition duration-150 cursor-pointer">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-bag w-6 cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
              </button>
              <button className="bg-white h-18 w-17 flex items-center justify-center rounded-full active:scale-90 transition duration-150 cursor-pointer">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-person-circle w-7 cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </button>
            </div>
            <img src={imgBag} alt="" className="w-8 lg:hidden" />
          </div>
        </div>
      </header>
      <section className="relative w-full overflow-hidden">
        <img
          src={imgPerson}
          alt="persona con un abrigo"
          className="h-130 w-full object-cover sm:h-155 lg:h-180"
        />
        <div className="absolute inset-0 bg-black/70" />
        <article className="absolute inset-x-4 top-16 z-30 mx-auto flex max-w-4xl flex-col gap-4 px-4 text-left text-white sm:top-24 sm:px-6 lg:left-16 lg:top-28 lg:max-w-3xl lg:px-0">
          <span className="hidden lg:inline-flex rounded-full bg-blue-600/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-blue-200">
            NEW COLLECTION 2024
          </span>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Redefine Your{" "}
            <span className="lg:text-blue-400">Everyday Style</span>
          </h2>
          <p className="max-w-xl text-sm text-slate-200 sm:text-base">
            Explore our curated selection of premium electronics and
            high-fashion apparel tailored for the modern lifestyle.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto active:scale-90">
              Shop Collection
            </button>
            <button className="inline-flex lg:hidden w-full items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 sm:w-auto active:scale-90">
              View Lookbook
            </button>
            <button className="hidden lg:inline-flex w-full items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 sm:w-auto active:scale-90">
              View Deal
            </button>
          </div>
        </article>
      </section>
    </>
  );
}
