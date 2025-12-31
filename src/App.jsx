import React, { useState, useRef, useEffect } from "react";
import coverImage from "./assets/Cover.jpg";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const scrollContainerRef = useRef(null);
  const textColor = '5,91,166';

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      setScrollY(scrollTop * 0.4);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const nameBioOpacity = Math.max(0, 1 - (scrollY / 200));

  return (
    <div 
      ref={scrollContainerRef}
      className="min-h-screen h-screen overflow-y-scroll flex justify-center relative" 
      style={{ backgroundColor: '#013d71ff', color: `rgb(${textColor})` }}
    >
      <div className="w-full max-w-xl">
        <div className="min-h-screen w-full shadow-2xl flex flex-col relative" style={{ backgroundColor: 'rgba(197, 227, 253, 0.95)' }}>
          
          {/* Fixed background image with parallax */}
          <div className="fixed inset-0 w-full max-w-xl mx-auto h-screen overflow-hidden pointer-events-none">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-parallax-bg"
              style={{
                backgroundImage: `url(${coverImage})`,
                transform: `translateY(-${scrollY}px)`
              }}
            />
            
            {/* Gradient overlay */}
            <div 
              className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent from-0% to-75%"
              style={{
                transform: `translateY(-${scrollY}px)`,
                backgroundImage: 'linear-gradient(to bottom, transparent 0%, rgba(197, 227, 253, 0.3) 40%, rgba(197, 227, 253, 0.7) 60%, rgb(197, 227, 253) 80%)'
              }}
            />
          </div>

          {/* Spacer for image area */}
          <div className="h-[75vh] flex-shrink-0 relative">
            
          </div>

          {/* Content area with gradient background */}
          <div className="relative flex-1">
            {/* Gradient background that blends with image and becomes more opaque with scroll */}
            <div 
              className="absolute inset-0" 
              style={{
                top: '-150px',
                opacity: Math.min(scrollY / 200, 1),
                backgroundImage: 'linear-gradient(to bottom, transparent, rgba(197, 227, 253, 0.8), rgb(197, 227, 253))'
              }}
            ></div>
            
            <div className="relative">
              {/* Name & bio */}
              <div 
                className="px-8 pb-6 flex flex-col items-center gap-3 text-center transition-opacity duration-200"
                style={{ opacity: nameBioOpacity }}
              >
                <h1 className="text-3xl font-bold tracking-tight"
                  style={{ color: `rgb(${textColor})` }}
                >
                  Nimbus Wandering
                </h1>
                <p className="text-sm max-w-md leading-relaxed"
                  style={{ color: `rgba(${textColor}, .9)` }}
                >
                  Welcome to our Adventure Page where we share all the gear and tips to help you get started on your adventure cat journey!
                </p>
              </div>
              
              {/* Content sample space */}
              <div className="h-[75vh] flex-shrink-0 relative">
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;