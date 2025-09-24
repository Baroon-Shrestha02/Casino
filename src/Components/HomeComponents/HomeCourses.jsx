import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Users,
  Star,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeCourses() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const courses = [
    {
      id: 1,
      title: "Professional Roulette Dealing",
      subtitle:
        "European & American versions • Ball spinning • Inside & outside bets • Fast payouts",
      description:
        "Learn professional roulette dealing techniques including ball spinning, inside & outside bets, and fast payouts.",
      image: "/uploads/home/roulette.jpg",
      href: "/courses/roulette",
    },
    {
      id: 2,
      title: "Blackjack Mastery Course",
      subtitle:
        "3:2 & 6:5 Blackjack • Insurance bets • Splits & doubles • Game protection",
      description:
        "Comprehensive blackjack dealing program covering insurance bets, splits, doubles, and advanced game protection.",
      image: "/uploads/home/blackjack.jpg",
      href: "/courses/blackjack",
    },
    {
      id: 3,
      title: "Poker (All Variants)",
      subtitle:
        "Texas Hold'em, Omaha, 7-Card Stud • Pot management • Tournament dealing",
      description:
        "Master Texas Hold'em, Omaha, 7-Card Stud dealing with professional pot management and tournament skills.",
      image: "/uploads/home/poker.jpg",
      href: "/courses/poker",
    },
    {
      id: 4,
      title: "Baccarat",
      subtitle: "Punto Banco style • Banker/Player/Tie payouts • 3rd card rule",
      description:
        "Professional Baccarat dealing certification focusing on Punto Banco style and 3rd card rules.",
      image: "/uploads/home/baccarat.jpg",
      href: "/courses/baccarat",
    },
    {
      id: 5,
      title: "Indian Flush (Teen Patti)",
      subtitle: "Boot & chaal bets • Blind vs seen play • Pot management",
      description:
        "Learn the art of dealing Teen Patti with proper hand rankings, side bets, and cultural etiquette.",
      image: "/uploads/home/teen.png",
      href: "/courses/teen-patti",
    },
    {
      id: 6,
      title: "Casino War",
      subtitle: "High-card game • War & surrender handling",
      description:
        "Master high-speed casino games including Casino War, Andar Bahar, and other quick-play formats.",
      image: "/uploads/home/war.jpg",
      href: "/courses/casino-war",
    },
    {
      id: 7,
      title: "Andar Bahar",
      subtitle: "Fast-paced dealing • Andar vs Bahar payouts",
      description:
        "Master high-speed casino games including Casino War, Andar Bahar, and other quick-play formats.",
      image: "/uploads/home/andar.avif",
      href: "/courses/andar-bahar",
    },
    {
      id: 8,
      title: "Marriage (Rummy Style)",
      subtitle: "21-card dealing • Pot splits & payouts",
      description:
        "Master high-speed casino games including Casino War, Andar Bahar, and other quick-play formats.",
      image: "/uploads/home/rummy.jpeg",
      href: "/courses/marriage",
    },
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 200; // how far to scroll
    const duration = 200; // ms → higher = slower
    const start = container.scrollLeft;
    const end =
      direction === "left" ? start - scrollAmount : start + scrollAmount;

    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-in-out
      const ease = 0.5 - 0.5 * Math.cos(progress * Math.PI);

      container.scrollLeft = start + (end - start) * ease;

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
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
    <section className="mx-3 md:mx-6  rounded-3xl py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="max-w-6xl mx-auto">
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
                  ? "bg-[#F6F6F6] hover:bg-white/20 text-slate-900"
                  : "bg-[#f6f6f6]/10 text-slate-400 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                canScrollRight
                  ? "bg-[#F6F6F6] hover:bg-white/20 text-slate-900"
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
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex-none w-[380px] group cursor-pointer"
              >
                <div className=" backdrop-blur-sm rounded-3xl p-1 transition-all duration-500 hover:scale-[1.02]">
                  <Link to={course.href}>
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
                      </div>

                      {/* Course Content */}
                      <div className=" p-3">
                        <h3 className="text-2xl font-bold text-primary transition-colors duration-300">
                          {course.title}
                        </h3>

                        {/* <p className="text-white text-sm leading-relaxed mb-3 line-clamp-3">
                        {course.subtitle}
                      </p> */}
                        <p className="text-slate-200 texl leading-relaxed  line-clamp-3">
                          {course.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-4 lg:hidden">
            {courses.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
              />
            ))}
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
