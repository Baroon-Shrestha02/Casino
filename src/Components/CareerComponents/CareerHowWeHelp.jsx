import React from "react";
import { FaFileAlt, FaUserCheck, FaHandshake, FaRoute } from "react-icons/fa";

export default function CareerHowWeHelp() {
  const steps = [
    {
      id: 1,
      title: "Professional CV Creation",
      description:
        "We craft a polished, casino-ready CV that highlights your skills, experience, and training to stand out with recruiters.",
      icon: <FaFileAlt className="text-white" />,
    },
    {
      id: 2,
      title: "Screening & Mock Interviews",
      description:
        "We assess your table etiquette, math speed, and communication. Then we prepare you with realistic mock interviews.",
      icon: <FaUserCheck className="text-white" />,
    },
    {
      id: 3,
      title: "Referrals to Partner Casinos",
      description:
        "Gain direct referrals to our partner casinos across Nepal with prioritized interview slots for our graduates.",
      icon: <FaHandshake className="text-white" />,
    },
    {
      id: 4,
      title: "Placement & Onboarding Support",
      description:
        "We guide you through offers, documentation, and onboarding so you start strong on day one.",
      icon: <FaRoute className="text-white" />,
    },
  ];

  const whatsappNumber = "9779818739823"; // update if needed

  const onContact = () => {
    const message = `Hello! I'm interested in your career support (CV, screening, referrals). Please share details.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">
            How We Help You Get Hired
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            End-to-end career support—from profile building to referrals and
            placement.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col"
            >
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed flex-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <p className="text-gray-600 text-sm">
            Fast-track your casino career with expert guidance.
          </p>
          <button
            onClick={onContact}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-primary text-white transition-colors duration-200"
          >
            Talk to a Career Advisor
          </button>
        </div>
      </div>
    </section>
  );
}
