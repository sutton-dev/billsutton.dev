'use client';

import { useState, useEffect } from 'react';

export default function ScrollIndicator() {
  const [showIndicator, setShowIndicator] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const checkScrollPosition = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // More content exists if document height is greater than what's currently visible
      const totalViewableHeight = scrollTop + windowHeight;
      const hasMoreContent = totalViewableHeight < documentHeight - 50; // Reduced threshold


      setShowIndicator(hasMoreContent);

      // Show scrolling state
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    // Delayed initial check to ensure DOM is fully rendered
    const initialCheck = () => {
      setTimeout(checkScrollPosition, 100);
    };

    // Initial check after component mounts
    initialCheck();

    // Add event listeners
    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    window.addEventListener('resize', checkScrollPosition);

    // Also check when DOM content changes (for tab switching)
    const observer = new MutationObserver(() => {
      setTimeout(checkScrollPosition, 100);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
      observer.disconnect();
      clearTimeout(scrollTimeout);
    };
  }, []);

  if (!showIndicator) return null;

  return (
    <div
      className={`fixed bottom-8 right-[35%] z-50 transition-all duration-300 ${
        isScrolling ? 'opacity-100 scale-110' : 'opacity-70 scale-100'
      }`}
    >
      <div className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap">
          More content below
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </div>
  );
}