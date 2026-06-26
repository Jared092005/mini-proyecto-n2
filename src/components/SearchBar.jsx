import { useState } from "react";
import imgMenu from "../../public/icons/menu-svgrepo-com.svg";
import imgSearch from "../../public/icons/search-svgrepo-com.svg";
import imgBag from "../../public/icons/shopping-bag-svgrepo-com.svg";
import imgPerson from "../../public/images/image.png";

export default function SearchBar({ searchQuery = "", onSearch }) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSearch = (event) => {
    onSearch?.(event.target.value);
  };

  return (
    <>
      <header className="w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-4 lg:px-8 lg:py-6 gap-4 lg:gap-0">
          {/* SECCIÓN SUPERIOR / MÓVIL (Logo y acciones rápidas) */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            {/* Menú Hamburguesa - Solo Móvil */}
            <img src={imgMenu} alt="Abrir menú" className="w-8 lg:hidden" />

            {/* Logo - Azul en móvil, Negro en desktop */}
            <h1 className="text-blue-700 text-4xl lg:text-black lg:text-3xl font-bold">
              LUXE
            </h1>

            {/* Iconos de acción - Solo Móvil */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                type="button"
                aria-label="Buscar productos"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm"
                onClick={() => setMobileSearchOpen((open) => !open)}
              >
                <img src={imgSearch} alt="Buscar" className="w-6" />
              </button>
              <img src={imgBag} alt="Carrito" className="w-8" />
            </div>
          </div>

          {/* SECCIÓN ESCRITORIO (Categorías, Buscador y Botones) */}
          {/* Se eliminó el border-t innecesario y se estructuró con flex-1 para distribuir espacios */}
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-between lg:ml-12">
            {/* Categorías - Centradas o pegadas al logo con un margen controlado */}
            <div className="flex items-center gap-8 text-lg font-medium text-gray-600">
              <p className="cursor-pointer hover:text-blue-600 transition">
                Electronics
              </p>
              <p className="cursor-pointer hover:text-blue-600 transition">
                Jewelry
              </p>
              <p className="cursor-pointer hover:text-blue-600 transition">
                Men's
              </p>
              <p className="cursor-pointer hover:text-blue-600 transition">
                Women's
              </p>
            </div>

            {/* Bloque de Búsqueda y Botones de Usuario */}
            <div className="flex items-center gap-6">
              {/* Input de Buscador */}
              <div className="relative w-72">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  🔍
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full rounded-xl border border-slate-200 bg-gray-50 pl-10 pr-4 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="Buscar productos..."
                />
              </div>

              {/* Botones de Iconos (Favoritos, Carrito, Perfil) */}
              <div className="flex items-center gap-3">
                {/* Favoritos */}
                <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 text-slate-700 transition duration-150 hover:bg-slate-100 active:scale-95">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-heart-fill w-5"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                  </svg>
                </button>

                {/* Carrito */}
                <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 text-slate-700 transition duration-150 hover:bg-slate-100 active:scale-95">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-bag w-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                  </svg>
                </button>

                {/* Perfil */}
                <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 text-slate-700 transition duration-150 hover:bg-slate-100 active:scale-95">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-person-circle w-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                </button>
              </div>
            </div>
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
        {mobileSearchOpen && (
          <div className="absolute inset-x-4 top-6 z-40 rounded-3xl bg-white/95 p-4 shadow-2xl backdrop-blur-md">
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                🔍
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                className="w-full rounded-3xl border border-slate-200 bg-white px-12 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                placeholder="Buscar productos..."
              />
              <button
                type="button"
                onClick={() => setMobileSearchOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-900"
                aria-label="Cerrar búsqueda"
              >
                ✕
              </button>
            </div>
          </div>
        )}
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
