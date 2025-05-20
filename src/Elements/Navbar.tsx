import React, { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useDarkMode } from "@/hooks/Theme";

const navItems = [
  { name: "Home", link: "main" },
  { name: "About", link: "about" },
  { name: "Qualifications", link: "education" },
  { name: "Skills", link: "skills" },
  { name: "Projects", link: "projects" },
  { name: "Contact", link: "contact" }
];

interface NavbarProps {
  method: () => void;
  data: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ method, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useDarkMode();
  const [opacity, setOpacity] = useState(1);
  console.log(data);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0.5, 1 - scrollY / 300);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{ opacity }}
      className="fixed w-full top-0 shadow-md transition-all bg-white dark:bg-black dark:text-white z-50"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-blue-600 pl-10">Asish</div>

        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer hover:text-blue-500 transition duration-300 dark:text-white"
              onClick={() => handleNavigation(item.link)}
            >
              {item.name}
            </li>
          ))}
          <button onClick={toggleTheme} className="h-6 rounded-full transition ml-2">
            {theme === "dark" ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
          </button>
          
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow-sm px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-gray-600 font-medium">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="cursor-pointer hover:text-blue-500 transition duration-300"
                onClick={() => {
                  handleNavigation(item.link);
                  setIsOpen(false);
                }}
              >
                {item.name}
              </li>
            ))}
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              {theme === "dark" ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
            </button>
            <button onClick={method} className="mt-2 text-sm underline">
              Toggle BG
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
