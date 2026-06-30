import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FooterMobile from "../components/FooterMobile";
import FooterDesktop from "../components/FooterDesktop";
import Loading from "../components/Loading";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function traerProducto() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    traerProducto();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!producto) {
    return (
      <div className="p-8 text-center text-lg min-h-screen flex items-center justify-center">
        Producto no encontrado
      </div>
    );
  }

  return (
    <>
      <SearchBar showBanner={false} />
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 bg-[#f7f6f9] min-h-screen">
        <button
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          ← Volver
        </button>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 bg-white rounded-3xl p-8 shadow-md">
          <div className="flex items-center justify-center bg-slate-50 rounded-2xl p-8">
            <img
              src={producto.image}
              alt={producto.title}
              className="max-h-96 max-w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-start space-y-6">
            <div>
              <p className="text-sm uppercase text-slate-400 font-semibold tracking-wide">
                {producto.category}
              </p>
              <h1 className="mt-3 text-3xl font-bold text-slate-900">
                {producto.title}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < Math.floor(producto.rating?.rate || 0)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-slate-600">
                {producto.rating?.rate || "N/A"} ({producto.rating?.count || 0}{" "}
                reseñas)
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Descripción
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {producto.description}
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-200">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-blue-700">
                  ${Number(producto.price || 0).toFixed(2)}
                </span>
                <span className="text-sm text-slate-500">Envío gratis</span>
              </div>

              <div className="flex gap-3 pt-4">
                <button className="flex-1 rounded-full bg-slate-900 px-6 py-3 text-lg font-semibold text-white transition hover:bg-slate-800 active:scale-95 duration-150 cursor-pointer">
                  Agregar al Carrito
                </button>
                <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-red-100 hover:text-red-500">
                  ♥
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterMobile />
      <FooterDesktop />
    </>
  );
}
