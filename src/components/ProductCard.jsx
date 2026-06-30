import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

export default function Productos({ searchQuery = "", selectedCategory = "" }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(false);

  useEffect(() => {
    async function traerDatos() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    traerDatos();
  }, []);

  useEffect(() => {
    setCategoryLoading(true);
    const timer = setTimeout(() => setCategoryLoading(false), 500);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  if (loading) {
    return <Loading />;
  }

  if (categoryLoading) {
    return <Loading />;
  }

  const term = searchQuery.trim().toLowerCase();
  const filteredProductos = productos.filter((producto) => {
    const matchesSearch =
      !term ||
      producto.title.toLowerCase().includes(term) ||
      producto.category.toLowerCase().includes(term);

    const matchesCategory =
      !selectedCategory ||
      producto.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 bg-[#f7f6f9]">
      <div className="mb-8 flex justify-between gap-4 items-center">
        <div className="flex flex-col">
          <p className="text-xl uppercase text-black font-bold lg:hidden">
            New Arrivals
          </p>
          <p className="hidden lg:inline font-bold text-2xl">Trending Now</p>
          <p className="hidden lg:inline text-gray-600 mt-2">
            Our most popular items this week
          </p>
        </div>
        <div className="">
          <button className="items-center rounded-full px-4 py-2 text-md font-semibold text-blue-600">
            See All
            <span className="ml-2 text-blue-600 text-lg">→</span>
          </button>
        </div>
      </div>

      {filteredProductos.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-700 shadow-sm">
          No se encontraron productos para “{searchQuery}”.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 xl:gap-6">
          {filteredProductos.map((producto) => (
            <Link
              key={producto.id}
              to={`/producto/${producto.id}`}
              className="no-underline"
            >
              <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md cursor-pointer h-full">
                <div className="relative overflow-hidden bg-slate-50 p-4">
                  <button className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm transition hover:text-red-500">
                    ♥
                  </button>
                  <img
                    src={producto.image}
                    alt={producto.title}
                    className="mx-auto h-36 w-full object-contain transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="space-y-3 p-4">
                  <div>
                    <p className="text-[14px] uppercase text-slate-400">
                      {producto.category}
                    </p>
                    <h2 className="mt-2 text-sm font-semibold text-slate-900 overflow-hidden text-ellipsis truncate">
                      {producto.title}
                    </h2>
                  </div>
                  <div className="flex flex-col justify-between gap-2">
                    <p className="text-md font-semibold text-blue-700 text-start ml-1">
                      ${producto.price.toFixed(2)}
                    </p>
                    <button className="rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 active:scale-95 duration-150">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
