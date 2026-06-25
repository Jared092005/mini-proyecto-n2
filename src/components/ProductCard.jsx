import { useEffect, useState } from "react";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div className="p-8 text-center text-lg">Cargando productos...</div>;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex justify-between gap-4 items-center">
        <div>
          <p className="text-xl uppercase text-black font-bold">New Arrivals</p>
        </div>
        <div className="">
          <button className="items-center rounded-full px-4 py-2 text-md font-semibold text-blue-600">
            See All
            <span className="ml-2 text-blue-600 text-lg">→</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4 xl:gap-6">
        {productos.map((producto) => (
          <article
            key={producto.id}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
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
                <button className="rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800">
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
