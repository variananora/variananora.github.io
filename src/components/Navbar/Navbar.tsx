import Link from "next/link";

export default function Navbar() {
  const navItems = [
    {
      key: "home",
      name: "Home",
      path: "/",
    },
    {
      key: "projects",
      name: "Projects",
      path: "/projects",
    },
    {
      key: "blogs",
      name: "Blogs",
      path: "/blogs",
    },
    {
      key: "about",
      name: "About",
      path: "/about",
    },
  ];

  return (
    <nav className="fixed top-0 z-[40] w-full h-[100px] items-center px-10 md:px-20 bg-[#121212] bg-opacity-100">
      <div className="flex flex-row gap-3 items-center justify-between">
        <Link href="/">
          <p className="text-xl md:text-xl text-white font-semibold">
            variananora
          </p>
        </Link>
        <div className="flex flex-row gap-5 mb-2">
          {navItems.map((item) => (
            <Link href={item.path} key={item.key}>
              <p className="p-8 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
