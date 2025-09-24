import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    email: "",
    phone: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // WhatsApp number (use your own WhatsApp business/number here)
    const whatsappNumber = "9779818739823"; // Replace with real number

    // Message body with file link
    const message = `
New File Submission

Name: ${formData.name}
Course: ${formData.course}
Email: ${formData.email}
Phone: ${formData.phone}


Please review the submission and contact the student for next steps.
    `;

    // Encode message
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset form
    setFormData({
      name: "",
      course: "",
      email: "",
      phone: "",
      file: null,
    });
    setUploadedFileUrl(null);
  };

  const courseOptions = [
    "Roulette",
    "Blackjack",
    "Poker (All Variants)",
    "Baccarat",
    "Andar Bahar",
    "Marriage (Rummy Style)",
    "Indian Flush (Teen Patti)",
    "Casino War",
    "Other",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Side - Image */}
          <div className="relative rounded-xl overflow-hidden min-h-[600px] flex">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/uploads/contact/form1.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex flex-col justify-center items-center text-center p-8 text-white w-full">
              <h2 className="text-4xl font-bold mb-6">Submit Your File</h2>
              <p className="text-lg leading-relaxed max-w-md">
                Upload your project files easily and our team will connect with
                you for the next steps.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white shadow-lg rounded-xl p-8 min-h-[600px] flex flex-col">
            {/* Warning Message */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> Please provide valid data, so
                    that we can contact you later.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Fill the form
            </h3>
            <div className="space-y-5 flex-1 flex flex-col">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Course Taken
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-white"
                >
                  <option value="">Select a course</option>
                  {courseOptions.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                  placeholder="Enter your phone number"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isUploading}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 mt-auto ${
                  isUploading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary text-white"
                }`}
              >
                {isUploading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Uploading File...
                  </div>
                ) : (
                  "Send to WhatsApp"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
