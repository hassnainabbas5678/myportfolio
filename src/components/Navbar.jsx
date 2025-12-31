import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ scrolled }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Skills"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-slate-800 shadow-lg"
          : "bg-slate-950/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            
            <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
              <span className="text-white">Hasnain</span>
              <span className="text-blue-400"> Abbas</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  relative text-gray-300 font-medium text-sm lg:text-base
                  transition-all duration-300 ease-out
                  hover:text-white
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0
                  after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400
                  after:transition-all after:duration-300
                  hover:after:w-full
                  hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]
                "
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          mobileMenuIsOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuIsOpen(false)}
              className="
                block px-4 py-3 rounded-xl
                text-gray-300 font-medium text-sm
                transition-all duration-300
                hover:text-white hover:bg-white/5
                active:scale-95
              "
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
