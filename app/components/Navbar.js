const Navbar = () => {
    return (
      <nav className="w-full bg-gray-800 p-4 text-white flex justify-between">
        <div className="text-xl"><a href="/" className="px-4 font-bold tracking-wide text-2xl">Taxation</a></div>
        <div>
          <a href="/services" className="px-4">Our Services</a>
          <a href="/about-us" className="px-4">About Us</a>
          <a href="/contact" className="px-4">Contact Us</a>
          <a href="/dashboard" className="px-4 border bg-slate-50 text-black rounded-full py-2">Get Started</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  