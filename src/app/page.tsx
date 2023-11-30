import Link from "next/link";

const Home = () => {
  return (
    <main>
      <div className="pt-8">
        <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
          <span>Hello, I&apos;m </span>
          <br></br>
          variananora
        </h1>
      </div>
      <div>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I&apos;m a software engineer based in Jakarta, Indonesia.
        </p>
      </div>
      <div>
        <div>
          <Link href="/about">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              About Me
            </button>
          </Link>
          <Link href="/about#contact">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
