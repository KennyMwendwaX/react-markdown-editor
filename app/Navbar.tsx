export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-slate-200">
                TaskTracker
              </span>
            </Link>
            <div className="space-x-3">
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "text-gray-100"
                    : "text-gray-400 hover:text-gray-200"
                } text-sm font-medium`}>
                Home
              </Link>
              <Link
                href="/tasks"
                className={`${
                  pathname === "/tasks"
                    ? "text-gray-100"
                    : "text-gray-400 hover:text-gray-200"
                } text-sm font-medium`}>
                Tasks
              </Link>
            </div>
          </div>
          <div className="flex md:order-2 items-center space-x-3">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <MagnifyingGlassIcon className="text-gray-400 w-5 h-5" />
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full outline-none p-2 pl-8 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
