import React, { useState, useEffect, useRef } from "react";
import {
  FaBriefcase,
  FaClock,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaArrowRight,
  FaWhatsapp,
  FaTimes,
  FaUsers,
  FaStar,
  FaGraduationCap,
  FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CareerPosts() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [selectedJob, setSelectedJob] = useState(null);
  const observerRef = useRef(null);
  const whatsappNumber = "9779818739823";

  const jobs = [
    {
      id: 1,
      title: "Casino Dealer - Roulette & Blackjack ",
      location: "Kathmandu, Nepal",
      type: "Full-time",
      salary: "NPR 30,000 - 45,000",
      image: "uploads/career/hero.jpg",
      highlights: [
        "Hands-on training with senior mentors",
        "Guaranteed interview with partner casinos",
        "Growth to Pit Boss and beyond",
      ],
      description:
        "Join our comprehensive dealer training program and kickstart your career in the gaming industry. This entry-level position offers extensive training in card dealing, customer service, and casino operations.",
      requirements: [
        "High school diploma or equivalent",
        "Strong mathematical skills",
        "Excellent communication abilities",
        "Professional appearance and demeanor",
        "Willingness to work flexible hours including weekends",
      ],
      benefits: [
        "Comprehensive training program (6-8 weeks)",
        "Health insurance coverage",
        "Performance-based bonuses",
        "Career advancement opportunities",
        "Staff meals and transportation allowance",
      ],
      experience: "Entry Level",
      teamSize: "15-20 trainees per batch",
      startDate: "September 30, 2025",
    },
    {
      id: 2,
      title: "Poker Dealer (Tournament)",
      location: "Cruise Ship (Asia)",
      type: "Contract",
      salary: "NPR 40,000 - 60,000",
      image: "uploads/career/hero2.jpg",
      highlights: [
        "Professional environment and rotating shifts",
        "Exposure to international guests",
        "Performance-based bonuses",
      ],
      description:
        "Operate table games including Blackjack, Poker, Roulette, and Baccarat in our premium gaming facility. Provide exceptional customer service to local and international guests in a professional casino environment.",
      requirements: [
        "Previous dealer experience (minimum 1 year)",
        "Knowledge of multiple table games",
        "Fluency in English and Nepali",
        "Valid gaming license or ability to obtain one",
        "Strong customer service skills",
      ],
      benefits: [
        "Competitive salary with tips",
        "International work environment",
        "Health and life insurance",
        "Annual leave and sick days",
        "Training for advanced games",
      ],
      experience: "1-3 years",
      teamSize: "25-30 dealers",
      startDate: "Octomber 15, 2025",
    },
    {
      id: 3,
      title: "Trainee Dealer (Junior)",
      location: "Pokhara, Nepal",
      type: "Full-time",
      salary: "NPR 55,000 - 75,000",
      image: "uploads/career/post3.jpg",
      highlights: [
        "Lead tables and mentor new dealers",
        "Team management and reporting",
        "Career path to Operations Manager",
      ],
      description:
        "Supervise gaming floor operations, manage dealer schedules, and ensure compliance with gaming regulations. This leadership role involves training new staff and maintaining high service standards.",
      requirements: [
        "3+ years of casino dealing experience",
        "Previous supervisory experience preferred",
        "Strong leadership and communication skills",
        "Knowledge of gaming regulations",
        "Bachelor's degree preferred",
      ],
      benefits: [
        "Leadership development programs",
        "Higher base salary with bonuses",
        "Comprehensive health benefits",
        "Paid training and certifications",
        "Clear promotion pathway",
      ],
      experience: "Basic Knowledge",
      teamSize: "Supervise 15-20 dealers per shift",
      startDate: "Septemper 20, 2025",
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards((prev) => new Set([...prev, cardId]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const cards = document.querySelectorAll("[data-card-id]");
    cards.forEach((card) => observerRef.current?.observe(card));

    return () => observerRef.current?.disconnect();
  }, []);

  const onApply = (job) => {
    const message = `📩 Job Application

Position: ${job.title}
Location: ${job.location}
Type: ${job.type}
Expected Salary: ${job.salary}

Hello, I would like to apply for this role. Please share the next steps.`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const openModal = (job) => {
    setSelectedJob(job);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedJob(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/30 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/20 rounded-full translate-y-40 -translate-x-40"></div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              Career <span className="text-primary">Opportunities</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Join our team and build an exciting career in the gaming industry
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                data-card-id={job.id}
                className={`group cursor-pointer transform transition-all duration-500 ${
                  visibleCards.has(job.id)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: visibleCards.has(job.id)
                    ? `${index * 200}ms`
                    : "0ms",
                }}
                onClick={() => openModal(job)}
              >
                {/* Card Container */}
                <article className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={job.image}
                      alt={job.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-4 right-4">
                      <span className="bg-white/95 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {job.type}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-2xl font-bold mb-2 leading-tight">
                        {job.title}
                      </h3>
                      <div className="flex items-center text-white/90 text-sm">
                        <FaMapMarkerAlt className="mr-2" />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="space-y-3 mb-8 flex-1">
                      <h4 className="font-semibold text-gray-800 text-lg mb-4">
                        Key Benefits
                      </h4>
                      {job.highlights.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 hover:border-red-200 transition-colors duration-200"
                        >
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="text-red-600 flex items-start gap-3 md:gap-0 md:flex-col mb-3">
                      <div className="text-slate-700">
                        Application Deadline:
                      </div>
                      <div>{job.startDate}</div>
                    </div>

                    {/* Action Button */}
                    <div className="flex gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(job);
                        }}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        View Details
                        <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onApply(job);
                        }}
                        className="bg-primary text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <FaWhatsapp className="text-xl" />
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4 text-lg">
              Don't see the right position? We're always looking for talented
              individuals.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-all duration-200 text-lg">
                Get in touch{" "}
                <FaArrowRight className="transform hover:translate-x-1 transition-transform duration-200" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300">
            {/* Modal Header */}
            <div className="relative h-64 overflow-hidden rounded-t-3xl">
              <img
                src={selectedJob.image}
                alt={selectedJob.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 p-3 rounded-full transition-all duration-200"
              >
                <FaTimes className="text-xl" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-white text-3xl font-bold mb-2">
                  {selectedJob.title}
                </h2>
                <div className="flex items-center text-white/90 text-lg">
                  <FaMapMarkerAlt className="mr-2" />
                  {selectedJob.location}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Quick Info */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                {/* <div className="bg-green-50 p-4 rounded-xl text-center">
                  <FaMoneyBillWave className="text-green-600 text-2xl mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Salary</div>
                  <div className="font-bold text-gray-800">
                    {selectedJob.salary}
                  </div>
                </div> */}
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <FaGraduationCap className="text-blue-600 text-2xl mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Experience</div>
                  <div className="font-bold text-gray-800">
                    {selectedJob.experience}
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-xl text-center">
                  <FaCalendarAlt className="text-orange-600 text-2xl mx-auto mb-2" />
                  <div className="text-sm text-gray-600">
                    Application Deadline
                  </div>
                  <div className="font-bold text-gray-800">
                    {selectedJob.startDate}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Job Description
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {selectedJob.description}
                </p>
              </div>

              {/* Requirements and Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaStar className="text-red-600 mr-2" />
                    Requirements
                  </h3>
                  <ul className="space-y-3">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaBriefcase className="text-green-600 mr-2" />
                    Benefits
                  </h3>
                  <ul className="space-y-3">
                    {selectedJob.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Apply Button */}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={closeModal}
                  className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-all duration-300"
                >
                  Close
                </button>
                <button
                  onClick={() => onApply(selectedJob)}
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <FaWhatsapp className="text-xl" />
                  Apply Now via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
