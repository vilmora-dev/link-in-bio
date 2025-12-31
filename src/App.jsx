import React, { useState, useRef, useEffect } from "react";
import coverImage from "./assets/Cover.jpg";
import InstagramIcon from "./components/InstagramIcon";
import TiktokIcon from "./components/TiktokIcon";

const media = [
  { 
    label: "Instagram", 
    icon: InstagramIcon,
    href: "https://instagram.com/nimbus.wandering" 
  },
  { 
    label: "TikTok", 
    icon: TiktokIcon,
    href: "https://www.tiktok.com/@nimbuswandering?_r=1&_t=ZP-92fyMXqK8b8" 
  },
];

const links = [
  {
    label: "Product 1",
    href: "#1",
  },
  {
    label: "Product 2",
    href: "#2",
  },
  {
    label: "Product 3",
    href: "#3",
  },
  {
    label: "Product 4",
    href: "#4",
  },
];

function App() {
  const [scrollY, setScrollY] = useState(0);
  const scrollContainerRef = useRef(null);
  const textColor = '5,91,166';
  const [privacyModal, setPrivacyModal] = useState(false);

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
      style={{ backgroundColor: '#3c576e', color: `rgb(${textColor})` }}
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
              
              {/* Media */}
              <div className="flex justify-center items-center gap-6 pb-6">
                {media.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl p-3 rounded-xl bg-black/10 backdrop-blur-sm hover:bg-white/10 hover:scale-110 transition-all duration-200 border border-white/10 shadow-sm"
                    style={{ color: `rgb(${textColor})` }}
                    aria-label={item.icon}
                  >
                    <item.icon />
                  </a>
                ))}
              </div>

              {/* Links */}
              <div className="mt-8 w-full flex flex-col gap-6 px-4 pb-20">
                {links.map((link) => (
                  <div 
                    key={link.href} 
                    className="grid grid-cols-12 items-center gap-4 p-4 rounded-3xl border border-white/10 bg-black/10 backdrop-blur-sm hover:bg-white/10 hover:shadow-lg transition-all duration-200"
                  >
                    {/* Icon - 15% (2/12 columns) */}
                    <div className="col-span-2 w-12 h-12 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/10">
                      {link.image ? (
                        <img 
                          src={link.image} 
                          alt={link.label}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <span className="text-xl">🌐</span>
                      )}
                    </div>
                    
                    {/* Label - 70% (8/12 columns) */}
                    <div className="col-span-8 text-left">
                      <a 
                        className="text-sm font-semibold tracking-wide block cursor-default"
                        style={{ color: `rgba(${textColor}, .6)` }}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {link.label}
                      </a>
                    </div>
                    
                    {/* Share - 15% (2/12 columns) */}
                    <div className="col-span-2 flex justify-end">
                      <button 
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/10 flex items-center justify-center transition-all duration-200 hover:scale-105 border border-white/10"
                        style={{ color: `rgb(${textColor})` }}
                        onClick={() => {console.log('Sharing', link.label)}}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Footer / handle */}
              <div className="flex items-center justify-center gap-3 text-xs mt-8 pb-8"
                style={{ color: `rgba(${textColor}, .7)` }}
              >
                <p>@nimbus.wandering</p>
                <span>•</span>
                <button 
                  onClick={() => setPrivacyModal(true)}
                  className="hover:underline transition-all"
                  style={{ color: `rgba(${textColor}, .7)` }}
                >
                  Privacy Policy
                </button>
              </div>
            </div>  
          </div>

          {/* Privacy Policy Modal */}
          {privacyModal && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setPrivacyModal(false)}
              />
              
              {/* Modal */}
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                <div className="w-full max-w-xl pointer-events-auto">
                  <div 
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[80vh] flex flex-col"
                    style={{ backgroundColor: 'rgba(197, 227, 253, 0.98)' }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 pb-4 border-b border-white/10">
                      <h2 className="text-xl font-bold" style={{ color: `rgb(${textColor})` }}>
                        Privacy Policy
                      </h2>
                      <button 
                        onClick={() => setPrivacyModal(false)}
                        className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200"
                        style={{ color: `rgb(${textColor})` }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 overflow-y-auto" style={{ color: `rgba(${textColor}, .8)` }}>
                      <div className="space-y-4 text-sm">
                        <p>
                          This website ("Nimbus Wandering") is a personal link-sharing page operated by the owner of the Instagram account @nimbus.wandering.
                        </p>
                        
                        <h3 className="font-semibold text-base mt-4" style={{ color: `rgb(${textColor})` }}>
                          Information We Collect
                        </h3>
                        <p>
                          We do not collect, store, or process any personal information from visitors. This site does not use cookies, analytics, or tracking tools.
                        </p>

                        <h3 className="font-semibold text-base mt-4" style={{ color: `rgb(${textColor})` }}>
                          External Links
                        </h3>
                        <p>
                          This website contains affiliate links to Amazon and other third-party websites. When you click on these links, you will be redirected to external sites that have their own privacy policies. We are not responsible for the privacy practices of these external sites.
                        </p>

                        <h3 className="font-semibold text-base mt-4" style={{ color: `rgb(${textColor})` }}>
                          Affiliate Disclosure
                        </h3>
                        <p>
                          Some links on this website are affiliate links. This means we may earn a small commission if you make a purchase through these links, at no additional cost to you. These commissions help support our content.
                        </p>

                        <h3 className="font-semibold text-base mt-4" style={{ color: `rgb(${textColor})` }}>
                          Contact
                        </h3>
                        <p>
                          If you have any questions about this Privacy Policy, you can contact us through our Instagram account @nimbus.wandering.
                        </p>

                        <p className="text-xs mt-6" style={{ color: `rgba(${textColor}, .6)` }}>
                          Last updated: {new Date().toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;