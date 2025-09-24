import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

export default function CareerCV() {
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

  const uploadFileToCloud = async (file) => {
    setIsUploading(true);
    try {
      // Create a reference in Firebase Storage
      const storageRef = ref(storage, `uploads/${Date.now()}_${file.name}`);

      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);

      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);

      setUploadedFileUrl(downloadURL);
      setIsUploading(false);
      return downloadURL;
    } catch (error) {
      setIsUploading(false);
      console.error("Firebase upload error:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let fileUrl = "No file attached";

    // Upload file to cloud if file is selected
    if (formData.file) {
      try {
        fileUrl = await uploadFileToCloud(formData.file);
      } catch (error) {
        alert("Failed to upload file. Please try again.");
        return;
      }
    }

    // WhatsApp number (use your own WhatsApp business/number here)
    const whatsappNumber = "9779818739823"; // Replace with real number

    // Message body with file link
    const message = `
🎓 New File Submission

👤 Name: ${formData.name}
📚 Course: ${formData.course}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📎 File: ${
      formData.file
        ? `${formData.file.name}\n🔗 Download Link: ${fileUrl}`
        : "No file attached"
    }

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
                backgroundImage: "url('/uploads/contact/form2.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex flex-col justify-center items-center text-center p-8 text-white w-full">
              <h2 className="text-4xl font-bold mb-6">Send Us Your CV</h2>
              <p className="text-lg leading-relaxed max-w-md">
                Upload your project files easily and our team will connect with
                you for the next steps.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white shadow-lg rounded-xl p-8 min-h-[600px] flex flex-col">
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

              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2">
                  Choose File
                </label>
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-red-600 file:text-white hover:file:bg-red-700 cursor-pointer transition"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip"
                />
                {formData.file && (
                  <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      📄 Selected:{" "}
                      <span className="font-medium">{formData.file.name}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Size: {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                )}
                {uploadedFileUrl && (
                  <div className="mt-2 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-green-600">
                      ✅ File uploaded successfully!
                    </p>
                    <a
                      href={uploadedFileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline mt-1 block"
                    >
                      🔗 Preview uploaded file
                    </a>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isUploading}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 mt-auto ${
                  isUploading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 text-white"
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
