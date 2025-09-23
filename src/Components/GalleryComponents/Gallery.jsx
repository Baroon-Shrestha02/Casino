import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Eye, Heart, Share2, X } from "lucide-react";
import allImages from "./GalleryData";
import GalleryHero from "./GalleryHero";

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const observerRef = useRef(null);

  // Initialize with first 12 images
  useEffect(() => {
    setVisibleImages(allImages.slice(0, 12));
    setCurrentIndex(12);
  }, []);

  // Lazy loading observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.dataset.src;
            if (src && !loadedImages.has(src)) {
              img.src = src;
              img.classList.remove("opacity-0");
              img.classList.add("opacity-100");
              setLoadedImages((prev) => new Set(prev).add(src));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadedImages]);

  // Load more images function
  const loadMoreImages = () => {
    setLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      const nextBatch = allImages.slice(currentIndex, currentIndex + 6);
      setVisibleImages((prev) => [...prev, ...nextBatch]);
      setCurrentIndex((prev) => prev + 6);
      setLoading(false);
    }, 800);
  };

  // Check if there are more images to load
  const hasMoreImages = currentIndex < allImages.length;

  // Image ref callback for lazy loading
  const imageRef = (el) => {
    if (el && observerRef.current) {
      observerRef.current.observe(el);
    }
  };

  return (
    <div className="min-h-screen px-6">
      {/* Header */}
      <GalleryHero />

      {/* Masonry Grid */}
      <div className="max-w-4xl mx-auto text-center px-4 my-20">
        <h2 className="text-2xl md:text-5xl font-extrabold leading-tight">
          {" "}
          View our <span className="text-primary">Wonderful Moments</span> with
          Students 📸
        </h2>
      </div>

      <div className="max-w-7xl mx-auto ">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {visibleImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid relative group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]">
                <img
                  ref={imageRef}
                  data-src={image.url}
                  alt={image.title}
                  className={`w-full h-auto object-cover transition-opacity duration-700 ${
                    loadedImages.has(image.url) ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Loading placeholder */}
                {!loadedImages.has(image.url) && (
                  <div className="absolute inset-0 bg-slate-700 animate-pulse rounded-lg"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreImages && (
          <div className="text-center mt-16">
            <button
              onClick={loadMoreImages}
              disabled={loading}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-slate-900 font-bold px-8 py-4 rounded-lg hover:from-yellow-400 hover:to-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </>
              ) : (
                <>
                  Load More Images
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
            <p className="text-gray-400 mt-4 text-sm">
              Showing {visibleImages.length} of {allImages.length} images
            </p>
          </div>
        )}

        {/* End message */}
        {!hasMoreImages && (
          <div className="text-center my-12">
            <p className="text-gray-400 text-lg">
              You've seen all our amazing images! 🎉
            </p>
          </div>
        )}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl animate-scale-in"
              style={{
                maxWidth: "calc(100vw - 2rem)",
                maxHeight: "calc(100vh - 2rem)",
              }}
            />

            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
