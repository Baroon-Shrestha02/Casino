import React, { useState } from "react";
import axios from "axios";

export default function CareerCV() {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    email: "",
    phone: "",
    file: null,
  });

  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileType, setFileType] = useState(null);

  const CLOUD_NAME = "dxo8kfpp0";
  const UPLOAD_PRESET = "resume_upload";

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
    if (files && files[0]) {
      setFileType(files[0].type);
    }
  };

  const uploadFileToCloudinary = async (file) => {
    setIsUploading(true);
    setUploadProgress(0);

    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", UPLOAD_PRESET);
    form.append("folder", "cv_uploads");

    try {
      // detect file type for upload endpoint
      const endpoint = file.type.includes("pdf") ? "auto" : "raw";

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${endpoint}/upload`,
        form,
        {
          headers: { "X-Requested-With": "XMLHttpRequest" },
          onUploadProgress: (progressEvent) => {
            if (!progressEvent.total) return;
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percent);
          },
        }
      );

      const result = response.data;
      const secureUrl = result?.secure_url;
      if (!secureUrl) throw new Error("Upload failed: No secure_url returned");

      setUploadedFileUrl(secureUrl);
      return secureUrl;
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let fileUrl = null;

    if (formData.file) {
      try {
        fileUrl = await uploadFileToCloudinary(formData.file);
      } catch {
        alert("Failed to upload file. Please try again.");
        return;
      }
    }

    const whatsappNumber = "9779818739823";

    const message = `
  🎓 New File Submission
  
  👤 Name: ${formData.name}
  📚 Course: ${formData.course}
  📧 Email: ${formData.email}
  📱 Phone: ${formData.phone}
  📎 File: ${
    fileUrl
      ? `${formData.file.name}\n🔗 Download Link: ${fileUrl}`
      : "No file attached"
  }
  
  Please review the submission and contact the student for next steps.
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      course: "",
      email: "",
      phone: "",
      file: null,
    });
    setUploadedFileUrl(null);
    setFileType(null);
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

  // Get the correct preview/download link depending on file type
  const getFileLink = () => {
    if (!uploadedFileUrl || !fileType) return uploadedFileUrl;

    if (fileType.includes("pdf")) {
      return uploadedFileUrl.replace("/upload/", "/upload/fl_inline/");
    }
    if (fileType.includes("msword") || fileType.includes("wordprocessingml")) {
      return uploadedFileUrl.replace("/upload/", "/upload/fl_attachment/");
    }
    return uploadedFileUrl; // images & others
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Side */}
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
                Upload your documents and our team will connect with you for the
                next steps.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white shadow-lg rounded-xl p-8 min-h-[600px] flex flex-col">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Fill the form
            </h3>
            <p className="text-sm text-red-600 mb-6">
              ⚠️ Please provide real information only — this will be used to
              contact you later.
            </p>
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

              {/* File Upload */}
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2">
                  Upload File{" "}
                  <span className="text-xs text-gray-500">
                    (Allowed: .doc, .docx, .jpg, .jpeg, .png)
                  </span>
                </label>
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-red-600 file:text-white hover:file:bg-red-700 cursor-pointer transition"
                  accept=".doc,.docx,.jpg,.jpeg,.png"
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
                      href={getFileLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline mt-1 block"
                    >
                      🔗{" "}
                      {fileType?.includes("image") ? "View Image" : "Open File"}
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
                    Uploading File
                    {uploadProgress ? ` ${uploadProgress}%` : "..."}
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
