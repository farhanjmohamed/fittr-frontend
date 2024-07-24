import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header aria-label="Site Header" className="bg-white mt-3">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-black" href="/">
          <span className="sr-only">Home</span>
          <img src="capstone.svg" className="h-10 w-auto" />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className="hidden md:block">
            <ul className="flex items-center gap-6 text-md">
              <li>
                <a className="text-black transition hover:text-gray-500/75" href="/about">
                  About
                </a>
              </li>

              <li>
                <a className="text-black transition hover:text-gray-500/75" href="/closet">
                  My Closet
                </a>
              </li>

              <li>
                <a className="text-black transition hover:text-gray-500/75" href="/items">
                  Items
                </a>
              </li>

              <li>
                <a className="text-black transition hover:text-gray-500/75" href="/outfits">
                  Outfits
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {localStorage.jwt === undefined ? (
                <>
                  <a
                    className="block rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-500"
                    href="/login"
                  >
                    Login
                  </a>

                  <a
                    className="block rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-500"
                    href="/signup"
                  >
                    Signup
                  </a>
                </>
              ) : (
                <>
                  <p className="block px-5 py-2.5 text-sm font-medium text-black">Welcome User!</p>
                  <LogoutLink />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
