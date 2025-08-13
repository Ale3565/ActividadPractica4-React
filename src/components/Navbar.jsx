const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Images Generator</div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
