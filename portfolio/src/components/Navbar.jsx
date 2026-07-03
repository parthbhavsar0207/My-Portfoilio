

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-xl font-bold text-indigo-600">
              Parth Bhavsar
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="#about" className="text-slate-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
            <a href="#skills" className="text-slate-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-slate-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-slate-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
