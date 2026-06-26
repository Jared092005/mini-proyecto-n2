export default function FooterDesktop() {
  return (
    <footer className="hidden bg-[#f7f6f9] text-slate-700 lg:block">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr_1fr_1.6fr]">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-[0.24em] text-slate-900">
                LUXE.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                Your one-stop destination for premium lifestyle products, from
                jewelry to electronics. Quality guaranteed.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-800 shadow-sm transition hover:bg-slate-100"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.889h-2.33v6.99C18.343 21.128 22 16.99 22 12Z" />
                </svg>
              </button>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-800 shadow-sm transition hover:bg-slate-100"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </svg>
              </button>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-800 shadow-sm transition hover:bg-slate-100"
                aria-label="Twitter"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M22 5.923c-.806.358-1.67.6-2.58.71a4.49 4.49 0 0 0 1.96-2.482 8.968 8.968 0 0 1-2.844 1.087 4.48 4.48 0 0 0-7.639 4.086A12.72 12.72 0 0 1 3.15 4.966a4.48 4.48 0 0 0 1.387 5.981 4.462 4.462 0 0 1-2.03-.56v.057a4.48 4.48 0 0 0 3.59 4.393 4.51 4.51 0 0 1-2.024.077 4.48 4.48 0 0 0 4.18 3.112A8.978 8.978 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.015c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 22 5.924Z" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              Categories
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="cursor-pointer transition hover:text-slate-900">
                Electronics
              </li>
              <li className="cursor-pointer transition hover:text-slate-900">
                Jewelry
              </li>
              <li className="cursor-pointer transition hover:text-slate-900">
                Men's Fashion
              </li>
              <li className="cursor-pointer transition hover:text-slate-900">
                Women's Fashion
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              Support
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="cursor-pointer transition hover:text-slate-900">
                Help Center
              </li>
              <li className="cursor-pointer transition hover:text-slate-900">
                Shipping Policy
              </li>
              <li className="cursor-pointer transition hover:text-slate-900">
                Returns & Refunds
              </li>
              <li className="cursor-pointer transition hover:text-slate-900">
                Order Tracking
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              Newsletter
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
              Get the latest updates on new arrivals and sales.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email address"
                className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-3xl bg-blue-700 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-blue-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>© 2024 Luxe Store. Powered by FakeStore API.</p>
          <div className="mt-4 flex flex-wrap gap-4 sm:mt-0">
            <a href="#" className="transition hover:text-slate-900">
              Terms of Service
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
