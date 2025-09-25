import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

/* #322920 ligher shade
 #1D170F darker shade
 #E1C386 gold */

export default function Navbar2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredCourse, setHoveredCourse] = useState(0); // Track which course is hovered

  useEffect(() => {
    if (activeDropdown === "courses" || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeDropdown, isMobileMenuOpen]);

  const coursesDropdownItems = [
    {
      name: "Roulette",
      href: "/courses/roulette",
      description:
        "European & American versions • Ball spinning • Inside & outside bets • Fast payouts",
      image: "/uploads/courses/roulette.jpg",
      fullDescription:
        "Master the art of Roulette dealing with our comprehensive training program covering both European and American versions.",
    },
    {
      name: "Blackjack",
      href: "/courses/blackjack",
      description:
        "3:2 & 6:5 Blackjack • Insurance bets • Splits & doubles • Game protection",
      image: "/uploads/courses/jack.jpeg",
      fullDescription:
        "Learn professional Blackjack dealing techniques, game protection, and all betting variations in this intensive course.",
    },
    {
      name: "Poker (All Variants)",
      href: "/courses/poker",
      description:
        "Texas Hold'em, Omaha, 7-Card Stud • Pot management • Tournament dealing",
      image: "/uploads/courses/poker.jpg",
      fullDescription:
        "Comprehensive poker dealing program covering all major variants and tournament management skills.",
    },
    {
      name: "Baccarat",
      href: "/courses/baccarat",
      description:
        "Punto Banco style • Banker/Player/Tie payouts • 3rd card rule",
      image: "/uploads/courses/baccarat.jpg",
      fullDescription:
        "Professional Baccarat dealing certification with focus on Punto Banco style and advanced card handling techniques.",
    },
    {
      name: "Indian Flush (Teen Patti)",
      href: "/courses/teen-patti",
      description:
        "Punto Banco style • Banker/Player/Tie payouts • 3rd card rule",
      image: "/uploads/courses/teen.jpg",
      fullDescription:
        "Professional Baccarat dealing certification with focus on Punto Banco style and advanced card handling techniques.",
    },
    {
      name: "Casino War",
      href: "/courses/casino-war",
      description: "High-card game • War & surrender handling",
      image: "/uploads/courses/war.jpg",
      fullDescription:
        "Professional Baccarat dealing certification with focus on Punto Banco style and advanced card handling techniques.",
    },
    {
      name: "Andar Bahar",
      href: "/courses/andar-bahar",
      description: "Fast-paced dealing • Andar vs Bahar payouts",
      image: "/uploads/courses/bahar.jpg",
      fullDescription:
        "Professional Baccarat dealing certification with focus on Punto Banco style and advanced card handling techniques.",
    },
    {
      name: "Marriage (Rummy Style)",
      href: "/courses/marriage",
      description: "21-card dealing • Pot splits & payouts",
      image: "/uploads/courses/marriage.jpeg",
      fullDescription:
        "Professional Baccarat dealing certification with focus on Punto Banco style and advanced card handling techniques.",
    },
  ];

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Background Blur Overlay for Desktop Dropdown */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </AnimatePresence>

      <nav className="relative z-50 w-full">
        {/* Mobile Header - Only logo and hamburger */}
        <div className="w-full bg-[#131313] py-4 lg:hidden">
          <div className="flex items-center justify-between px-6">
            {/* Logo centered on mobile */}
            <div className="flex-1 flex justify-center">
              <Link
                to="/"
                className="text-3xl font-bold text-[#f9f8f0] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src="/uploads/main/logo2.png"
                      alt=""
                      className="h-14 w-14"
                    />
                  </div>
                  <div className="hidden sm:block">Casino Traning Nepal</div>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col items-center justify-center w-6 h-6 space-y-1 text-[#f9f8f0] z-50 relative"
              aria-label="Toggle mobile menu"
            >
              <motion.span
                className="w-6 h-0.5 bg-current"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-current"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-current"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>

        {/* Desktop Header - Full layout */}
        <div className="hidden lg:block">
          {/* Top section with centered logo */}
          <div className="w-full bg-[#131313] py-4">
            <div className="flex justify-center">
              <Link
                to="/"
                className="text-3xl font-bold text-[#f9f8f0] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src="/uploads/main/logo2.png"
                      alt=""
                      className="h-14 w-14"
                    />
                  </div>
                  <div>Casino Traning Nepal</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Bottom section with navigation */}
          <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="max-w-7xl mx-auto px-6 py-3">
              <div className="flex items-center justify-between">
                {/* Left side - Main navigation */}
                <div className="flex items-center gap-x-8">
                  <Link
                    to="/"
                    className="text-[#f9f8f0] transition-colors font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    className="text-[#f9f8f0] transition-colors font-medium"
                  >
                    About Us
                  </Link>

                  {/* Our Courses Dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown("courses")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="text-[#f9f8f0] transition-colors font-medium flex items-center gap-1">
                      Our Courses
                      <motion.svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        animate={{
                          rotate: activeDropdown === "courses" ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === "courses" && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute left-0 transform mt-3 w-[70vw] max-h-[80vh] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                          onMouseEnter={() => setActiveDropdown("courses")}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="p-6 max-h-[80vh] overflow-y-auto">
                            <div className="grid grid-cols-2 gap-6">
                              {/* Left side - Course list */}
                              <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 sticky top-0 bg-white z-10 pb-2">
                                  Available Courses
                                </h3>
                                <div className="space-y-2">
                                  {coursesDropdownItems.map((item, index) => (
                                    <Link
                                      key={index}
                                      to={item.href}
                                      className="block p-3 rounded-lg hover:bg-gray-100 transition-colors group"
                                      onMouseEnter={() =>
                                        setHoveredCourse(index)
                                      }
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                                        <div>
                                          <h4 className="font-medium text-gray-800 group-hover:text-slate-600">
                                            {item.name}
                                          </h4>
                                          <p className="text-sm text-gray-600 mt-1">
                                            {item.description}
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Right side - Dynamic featured course */}
                              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg p-6 text-white">
                                <div className="space-y-4">
                                  <motion.img
                                    key={hoveredCourse}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    src={
                                      coursesDropdownItems[hoveredCourse].image
                                    }
                                    alt={
                                      coursesDropdownItems[hoveredCourse].name
                                    }
                                    className="w-full h-55 object-cover rounded-lg"
                                  />
                                  <div>
                                    <motion.h4
                                      key={`title-${hoveredCourse}`}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.3, delay: 0.1 }}
                                      className="font-semibold"
                                    >
                                      {coursesDropdownItems[hoveredCourse].name}
                                    </motion.h4>
                                    <motion.p
                                      key={`desc-${hoveredCourse}`}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        duration: 0.3,
                                        delay: 0.15,
                                      }}
                                      className="text-red-100 text-sm mt-1"
                                    >
                                      {
                                        coursesDropdownItems[hoveredCourse]
                                          .fullDescription
                                      }
                                    </motion.p>
                                    <div className="flex items-center justify-between mt-4">
                                      <div className="text-sm">
                                        <div>Standard Course</div>
                                        <div>2-4 Weeks</div>
                                      </div>
                                      <div className="text-sm">
                                        <div>Fast track</div>
                                        <div>for experienced candidates</div>
                                      </div>
                                      <Link
                                        to={
                                          coursesDropdownItems[hoveredCourse]
                                            .href
                                        }
                                        className="bg-white text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        Learn More
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    to="/gallery"
                    className="text-[#f9f8f0] transition-colors font-medium"
                  >
                    Gallery
                  </Link>
                </div>

                {/* Right side - Careers and Contact */}
                <div className="flex items-center gap-x-6">
                  <Link
                    to="/careers"
                    className="text-[#f9f8f0] transition-colors font-medium"
                  >
                    Careers
                  </Link>

                  <Link
                    to="/contact"
                    className="bg-[#f9f8f0] text-[#131313] px-6 py-2 rounded-lg font-bold transition-colors font-medium shadow-sm"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Screen Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 bg-[#131313] z-40 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col min-h-full p-6 pt-20">
                <div className="flex flex-col space-y-6 flex-1 pb-6">
                  <Link
                    to="/"
                    className="text-[#f9f8f0] hover:text-[#E1C386] transition-colors py-3 text-xl font-medium border-b border-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    className="text-[#f9f8f0] hover:text-[#E1C386] transition-colors py-3 text-xl font-medium border-b border-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>

                  {/* Mobile Our Courses */}
                  <div>
                    <div className="text-[#E1C386] py-3 text-xl font-bold border-b border-gray-700">
                      Our Courses
                    </div>
                    <div className="relative">
                      <div className="pl-4 mt-4 space-y-3 max-h-[40vh] overflow-y-auto scroll-smooth">
                        {coursesDropdownItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.href}
                            className="block text-[#f9f8f0] hover:text-[#E1C386] transition-colors py-2 text-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>

                      {/* Scroll Down Animation */}
                      <motion.div
                        className="flex justify-center mt-2"
                        animate={{
                          y: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="flex flex-col items-center text-[#E1C386]">
                          <span className="text-xs mb-1">Scroll for more</span>
                          <motion.svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            animate={{
                              y: [0, 3, 0],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </motion.svg>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <Link
                    to="/gallery"
                    className="text-[#f9f8f0] hover:text-[#E1C386] transition-colors py-3 text-xl font-medium border-b border-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Gallery
                  </Link>

                  <Link
                    to="/careers"
                    className="text-[#f9f8f0] hover:text-[#E1C386] transition-colors py-3 text-xl font-medium border-b border-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Careers
                  </Link>

                  <Link
                    to="/contact"
                    className="bg-[#E1C386] text-[#131313] px-8 py-4 rounded-lg hover:bg-[#f9f8f0] transition-colors font-bold text-xl text-center mt-6"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
