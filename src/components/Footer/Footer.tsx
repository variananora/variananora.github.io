export default function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center items-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {year} variananora. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
