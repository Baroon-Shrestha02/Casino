import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      href: "/courses/web-development",
      description:
        "European & American versions • Ball spinning • Inside & outside bets • Fast payouts",
      image: "uploads/courses/roulette.jpg",
      fullDescription:
        "Master the art of Roulette dealing with our comprehensive training program covering both European and American versions.",
    },
    {
      name: "Blackjack",
      href: "/courses/data-science",
      description:
        "3:2 & 6:5 Blackjack • Insurance bets • Splits & doubles • Game protection",
      image: "uploads/courses/jack.jpeg",
      fullDescription:
        "Learn professional Blackjack dealing techniques, game protection, and all betting variations in this intensive course.",
    },
    {
      name: "Poker (All Variants)",
      href: "/courses/mobile-development",
      description:
        "Texas Hold'em, Omaha, 7-Card Stud • Pot management • Tournament dealing",
      image: "uploads/courses/poker.jpg",
      fullDescription:
        "Comprehensive poker dealing program covering all major variants and tournament management skills.",
    },
    {
      name: "Baccarat",
      href: "/courses/ui-ux-design",
      description:
        "Punto Banco style • Banker/Player/Tie payouts • 3rd card rule",
      image: "uploads/courses/baccarat.jpg",
      fullDescription:
        "Professional Baccarat dealing certification with focus on Punto Banco style and advanced card handling techniques.",
    },
    {
      name: "Indian Flush (Teen Patti)",
      href: "/courses/ui-ux-design",
      description:
        "Punto Banco style • Banker/Player/Tie payouts • 3rd card rule",
      image: "uploads/courses/teen.jpg",
      fullDescription:
        "Professional Baccarat dealing certification with focus on Punto Banco style and advanced card handling techniques.",
    },
    {
      name: "Casino War",
      href: "/courses/ui-ux-design",
      description: "High-card game • War & surrender handling",
      image: "uploads/courses/war.jpg",
      fullDescription:
        "Professional Baccarat dealing certification with focus on Punto Banco style and advanced card handling techniques.",
    },
    {
      name: "Andar Bahar",
      href: "/courses/ui-ux-design",
      description: "Fast-paced dealing • Andar vs Bahar payouts",
      image: "uploads/courses/bahar.jpg",
      fullDescription:
        "Professional Baccarat dealing certification with focus on Punto Banco style and advanced card handling techniques.",
    },
    {
      name: "Marriage (Rummy Style)",
      href: "/courses/ui-ux-design",
      description: "21-card dealing • Pot splits & payouts",
      image: "uploads/courses/marriage.jpeg",
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
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Background Blur Overlay */}
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
        {/* Top section with centered logo */}
        <div className="w-full bg-[#131313] py-4">
          <div className="flex justify-center">
            <Link
              to="/"
              className="text-3xl font-bold text-[#f9f8f0] transition-colors"
            >
              Casino Academy
            </Link>
          </div>
        </div>

        {/* Bottom section with navigation */}
        <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Left side - Main navigation */}
              <div className="hidden lg:flex items-center gap-x-8">
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
                                    className="block p-3 rounded-lg hover:bg-red-50 transition-colors group"
                                    onMouseEnter={() => setHoveredCourse(index)}
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="flex items-start space-x-3">
                                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                                      <div>
                                        <h4 className="font-medium text-gray-800 group-hover:text-red-600">
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
                            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-6 text-white">
                              <div className="space-y-4">
                                <motion.img
                                  key={hoveredCourse}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3 }}
                                  src={
                                    coursesDropdownItems[hoveredCourse].image
                                  }
                                  alt={coursesDropdownItems[hoveredCourse].name}
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
                                    transition={{ duration: 0.3, delay: 0.15 }}
                                    className="text-red-100 text-sm mt-1"
                                  >
                                    {
                                      coursesDropdownItems[hoveredCourse]
                                        .fullDescription
                                    }
                                  </motion.p>
                                  <div className="flex items-center justify-between mt-4">
                                    <span className="text-sm">8 weeks</span>
                                    <Link
                                      to={
                                        coursesDropdownItems[hoveredCourse].href
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
              </div>

              {/* Right side - Careers and Contact */}
              <div className="hidden lg:flex items-center gap-x-6">
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

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1 text-amber-500"
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

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="lg:hidden"
              >
                <div className="bg-white mx-6 mb-4 rounded-xl p-6 shadow-lg border border-gray-100 max-h-[80vh] overflow-y-auto">
                  <div className="flex flex-col space-y-4">
                    <Link
                      to="/"
                      className="text-gray-700 hover:text-red-600 transition-colors py-2 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>

                    <Link
                      to="/about"
                      className="text-gray-700 hover:text-red-600 transition-colors py-2 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>

                    {/* Mobile Our Courses */}
                    <div>
                      <div className="font-semibold text-red-800 py-2 border-b border-gray-200 sticky top-0 bg-white">
                        Our Courses
                      </div>
                      <div className="pl-4 mt-3 space-y-2 max-h-[30vh] overflow-y-auto">
                        {coursesDropdownItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.href}
                            className="block text-sm text-gray-600 hover:text-red-600 transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Mobile Careers */}
                    <Link
                      to="/careers"
                      className="text-gray-700 hover:text-red-600 transition-colors py-2 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Careers
                    </Link>

                    <Link
                      to="/contact"
                      className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
