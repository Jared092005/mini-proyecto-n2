import img1 from "../../public/images/clothes-hanger-svgrepo-com.svg";

export default function CategoryFilter() {
  return (
    <section className="bg-[#eaedf8] p-4 lg:hidden">
      <p className="font-bold text-2xl">Shop by Category</p>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <button className="flex flex-col items-center gap-2 rounded-3xl p-3 text-center transition duration-150 hover:shadow-lg active:scale-95">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-person-standing h-6 w-6"
              viewBox="0 0 16 16"
            >
              <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 6.75v8.5a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2.75a.75.75 0 0 0 1.5 0v-2.5a.25.25 0 0 1 .5 0" />
            </svg>
          </span>
          <span className="text-sm font-medium text-slate-700">Women</span>
        </button>
        <button className="flex flex-col items-center gap-2 rounded-3x p-3 text-center transition duration-150 hover:shadow-lg active:scale-95">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-bag h-6 w-6"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
          </span>
          <span className="text-sm font-medium text-slate-700">Men</span>
        </button>
        <button className="flex flex-col items-center gap-2 rounded-3xl p-3 text-center transition duration-150 hover:shadow-lg active:scale-95">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
            <img src={img1} alt="Clothes hanger" className="h-6 w-6" />
          </span>
          <span className="text-sm font-medium text-slate-700">Bag</span>
        </button>
      </div>
    </section>
  );
}
