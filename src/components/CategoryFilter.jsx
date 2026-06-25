import img1 from "../../public/images/clothes-hanger-svgrepo-com.svg";

export default function CategoryFilter() {
  return (
    <>
      <section className="bg-[#eaedf8] p-4 lg:hidden">
        <p className="font-bold text-2xl">Shop by Category</p>
        <div className="flex p-4 justify-between">
          <button className="bg-white h-18 w-17 flex items-center justify-center rounded-full active:scale-90 transition duration-150 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-person-standing w-6"
              viewBox="0 0 16 16"
            >
              <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 6.75v8.5a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2.75a.75.75 0 0 0 1.5 0v-2.5a.25.25 0 0 1 .5 0" />
            </svg>
          </button>

          <button className="bg-white h-18 w-17 flex items-center justify-center rounded-full active:scale-90 transition duration-150 cursor-pointer">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-bag w-6"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
          </button>
          <button className="bg-white h-18 w-17 flex items-center justify-center rounded-full active:scale-90 transition duration-150 cursor-pointer">
            <img src={img1} alt="" className="w-6" />
          </button>
        </div>
      </section>
    </>
  );
}
