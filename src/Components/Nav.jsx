import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = ({ tabs, handleChangeTabs, currentElement}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border border-zinc-300 z-50">
      <div className="container lg:w-[80%] lg:max-w-[1128px] mx-auto flex justify-between items-center pt-1 px-4 lg:px-0">
        <strong
          className="text-3xl font-bold cursor-pointer "
        onClick={()=>handleChangeTabs(0)}
        >
          Mina<span className="text-emerald-400">Folio</span>
        </strong>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {tabs.map((item, index) => {
            if (index === 0) return null;
            return (
              <li className={`transition-all duration-300 ease-in p-3 ${currentElement===index?'border-b-2 border-emerald-400 text-emerald-400':''}`} onClick={()=>handleChangeTabs(index)} key={index}>
                <a href="#" className="hover:text-emerald-400">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg p-6 md:hidden"
          >
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>
            <ul className="space-y-6 text-lg">
            {tabs.map((item, index) => {
            if (index === 0) return null;
            return (
              <li className={`transition-all duration-300 ease-in ${currentElement === index ? 'border-b-2 border-emerald-400 text-emerald-400' : ''}`} onClick={() => {
                handleChangeTabs(index)
                setIsOpen(false)
              }} key={index}>
                <a href="#" className=" block hover:text-emerald-400">
                  {item}
                </a>
              </li>
            );
          })}
              
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Nav;
