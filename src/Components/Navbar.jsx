import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { BiHomeAlt2, BiUser, BiCodeAlt, BiBriefcase, BiFolder, BiEnvelope } from 'react-icons/bi';
import { useState, useEffect } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'home', label: 'Home', offset: -100, icon: BiHomeAlt2 },
    { to: 'about', label: 'About', offset: -100, icon: BiUser },
    { to: 'Technologies', label: 'Technologies', offset: -100, icon: BiCodeAlt },
    { to: 'Experience', label: 'Experience', offset: -100, icon: BiBriefcase },
    { to: 'Project', label: 'Project', offset: -100, icon: BiFolder },
    { to: 'content', label: 'Contact', offset: -100, icon: BiEnvelope },
  ];

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'backdrop-blur-md bg-neutral-950/80 shadow-lg' : ''}`}
    >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
       <div  className=" flex  justify-between items-center flex-wrap w-full  h-auto">
        <Link 
          to="home" 
          spy={true} 
          smooth={true} 
          offset={0} 
          duration={500} 
          className="text-2xl font-bold bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent cursor-pointer h-14 flex items-center"
        >
          AMMAR
        </Link>

        <ul className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative group"
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                onSetActive={() => setActiveSection(link.to)}
                onSetInactive={() => setActiveSection('')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer
                  ${activeSection === link.to 
                    ? 'text-white bg-sky-600/30' 
                    : 'text-neutral-300 hover:text-white hover:bg-sky-700/20'}`}
                activeClass="!text-white !bg-sky-600/30"
                spyThrottle={100}
              >
                <link.icon className={`w-4 h-4 transition-transform duration-300 ${activeSection === link.to ? 'scale-110' : 'group-hover:scale-110'}`} />
                <span>{link.label}</span>
                {activeSection === link.to && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-700/30 to-blue-700/30 rounded-lg"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="navbar-center text-white lg:hidden">
          <div className="dropdown">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-ghost btn-circle hover:bg-sky-700/20 transition-colors text-neutral-200 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'none' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
              className="absolute right-0 mt-3 w-56 rounded-xl bg-neutral-900/70 backdrop-blur-lg shadow-xl border border-white/10 overflow-hidden py-2 z-50 transition-all duration-300"
              style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
            >
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={link.offset}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                    onSetActive={() => setActiveSection(link.to)}
                    className={`flex items-center gap-3 px-4 py-3 transition-all duration-300
                      ${activeSection === link.to 
                        ? 'text-white bg-sky-600/30' 
                        : 'text-neutral-300 hover:text-white hover:bg-sky-700/20'}`}
                  >
                    <link.icon className={`w-5 h-5 transition-transform duration-300 ${activeSection === link.to ? 'scale-110' : ''}`} />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

      </div>
    </div>
    </motion.div>
  );
}

export default Navbar;
