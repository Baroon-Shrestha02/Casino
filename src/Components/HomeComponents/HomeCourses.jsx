import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Users,
  Star,
  Play,
} from "lucide-react";

export default function HomeCourses() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const courses = [
    {
      id: 1,
      title: "Professional Roulette Dealing",
      subtitle: "Master the European & American wheel",
      description:
        "Learn professional roulette dealing techniques including ball spinning, inside & outside bets, and fast payouts.",
      image:
        "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=500&h=300&fit=crop",
      duration: "8 weeks",
      students: "2.4k",
      rating: "4.9",
      category: "Table Games",
      color: "from-red-500 to-red-600",
    },
    {
      id: 2,
      title: "Blackjack Mastery Course",
      subtitle: "3:2 & 6:5 variations included",
      description:
        "Comprehensive blackjack dealing program covering insurance bets, splits, doubles, and advanced game protection.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      duration: "6 weeks",
      students: "3.1k",
      rating: "4.8",
      category: "Card Games",
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Poker Tournament Dealing",
      subtitle: "All variants & pot management",
      description:
        "Master Texas Hold'em, Omaha, 7-Card Stud dealing with professional pot management and tournament skills.",
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop",
      duration: "10 weeks",
      students: "1.8k",
      rating: "4.9",
      category: "Tournaments",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 4,
      title: "Baccarat Excellence",
      subtitle: "Punto Banco mastery",
      description:
        "Professional Baccarat dealing certification focusing on Punto Banco style and 3rd card rules.",
      image:
        "https://images.unsplash.com/photo-1553982073-2d8d3772513c?w=500&h=300&fit=crop",
      duration: "5 weeks",
      students: "1.2k",
      rating: "4.7",
      category: "Table Games",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 5,
      title: "Indian Flush (Teen Patti)",
      subtitle: "Traditional card game dealing",
      description:
        "Learn the art of dealing Teen Patti with proper hand rankings, side bets, and cultural etiquette.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Casino War & Quick Games",
      subtitle: "Fast-paced game management",
      description:
        "Master high-speed casino games including Casino War, Andar Bahar, and other quick-play formats.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=300&fit=crop",
    },
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 400;
    const newScrollLeft =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  return (
    <section className="mx-3 md:mx-6  rounded-3xl py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-start flex-col">
            <div className="text-4xl md:text-6xl font-bold text-white mb-4">
              Learn What Matters
            </div>
            <div className="max-w-3xl text-xl text-slate-300 leading-relaxed">
              Master professional casino dealing with our comprehensive training
              programs. From classic table games to modern variants, build your
              expertise with industry professionals.
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                canScrollLeft
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-white/5 text-slate-500 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                canScrollRight
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-white/5 text-slate-500 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitScrollbar: { display: "none" },
            }}
          >
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="flex-none w-[380px] group cursor-pointer"
              >
                <div className=" backdrop-blur-sm rounded-3xl p-1 transition-all duration-500 hover:scale-[1.02]">
                  <div className="relative overflow-hidden rounded-3xl">
                    {/* Course Image */}
                    <div className="relative h-84 overflow-hidden rounded-3xl">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                      />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                          <Play size={24} className="text-slate-800 ml-1" />
                        </div>
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className=" p-3">
                      <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-amber-400 transition-colors duration-300">
                        {course.title}
                      </h3>

                      <p className="text-slate-300 leading-relaxed mb-6 line-clamp-3">
                        {course.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8 lg:hidden">
            {courses.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
              />
            ))}
          </div>

          {/* Explore All Button */}
          <div className="text-center mt-6">
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-2xl transition-all duration-300 border border-white/20 hover:border-white/40">
              Explore All Courses
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
