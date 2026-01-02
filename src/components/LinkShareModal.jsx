import React, { useEffect, useRef } from 'react';

const LinkShareModal = ({ isOpen, onClose, linkUrl, linkLabel, linkImage, socialMedia = null }) => {

  const getShareMessage = (linkItemElement, linkUrl) => {
    // Special handling for site share with social media links
    if (socialMedia && socialMedia.length > 0) {
      let message = `Cat happiness unlocked! 🐾 Follow Nimbus for daily dose of joy. 🐱✨\n\n`;
      socialMedia.forEach(item => {
        message += `${item.label}: ${item.href}\n`;
      });
      return encodeURIComponent(message);
    }
    
    // Regular product share message
    const templates = [
      `Hey! Check out this ${linkItemElement} from Nimbus's picks! 😻`,
      `Purr-fect find! "${linkItemElement}" from Nimbus's cat collection 🐾`,
      `Meow! Loving this ${linkItemElement} from Nimbus's faves ✨`,
      `Cat-tastic! ${linkItemElement} handpicked by Nimbus 😺`
    ];
    const message = templates[Math.floor(Math.random() * templates.length)] + ` ${linkUrl}`;
    return encodeURIComponent(message);
  };

  const shareOptions = [
    // Facebook
    {
        id: 'facebook',
        icon: (
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        ),
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(linkUrl)}&quote=${getShareMessage(linkLabel, linkUrl)}`,
        bg: 'bg-blue-600/90 hover:bg-blue-700/90',
        label: 'Facebook'
    },
    // X (Twitter)
    {
        id: 'twitter',
        icon: (
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        ),
        href: `https://twitter.com/intent/tweet?text=${getShareMessage(linkLabel, linkUrl)}`,
        bg: 'bg-black/90 hover:bg-gray-900/90',
        label: 'X'
    },
    // Messenger
    {
        id: 'messenger',
        icon: (
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 512 512">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z" />
        </svg>
        ),
        href: `https://m.me/?text=${getShareMessage(linkLabel, linkUrl)}`,
        bg: 'bg-blue-500/90 hover:bg-blue-600/90',
        label: 'Messenger'
    },
    // Whatsapp
    {
        id: 'whatsapp',
        icon: (
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 512 512">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
        ),
        href: `https://wa.me/?text=${getShareMessage(linkLabel, linkUrl)}`,
        bg: 'bg-green-500/90 hover:bg-green-600/90',
        label: 'WhatsApp'
    },
    // Email
    {
        id: 'email',
        icon: (
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
        ),
        href: `mailto:?subject=${encodeURIComponent(`Check out ${linkLabel}`)}&body=${getShareMessage(linkLabel, linkUrl)}`,
        bg: 'bg-red-500/90 hover:bg-red-600/90',
        label: 'Email'
    },
    // Copy to Clipboard
    {
        id: 'clipboard',
        icon: (
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
        </svg>
        ),
        onClick: () => navigator.clipboard.writeText(linkUrl),
        bg: 'bg-slate-600/90 hover:bg-slate-700/90',
        label: 'Copy Link'
    },
    // Share Natively (device options)
    {
        id: 'native',
        label: 'More',
        icon: (
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
        </svg>
        ),
        onClick: () => navigator.share({ title: linkLabel, url: linkUrl, text: getShareMessage(linkLabel, linkUrl) }),
        bg: 'bg-purple-500/90 hover:bg-purple-600/90',
    }
  ];
  
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose, socialMedia]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 backdrop-blur-sm z-40"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
        onClick={onClose}
      />
      
      {/* Modal Container - matches max-w-xl from main app */}
      <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none">
        <div className="w-full max-w-xl pointer-events-auto">
          <div
            ref={modalRef}
            className={`border border-[#75a6d1] rounded-t-3xl shadow-2xl overflow-hidden transition-all duration-300 ease-out ${
              isOpen 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-full opacity-0'
            }`}
            style={{ backgroundColor: 'rgb(117, 166, 209)' }}
          >
            <div className="p-6 flex flex-col max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/30">
                <div className="flex-1 flex justify-center">
                  <h2 className="text-sm font-bold text-white">Share link</h2>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200 -m-2 flex-shrink-0 text-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-6 px-2">
                {/* Conditional rendering based on socialMedia */}
                {socialMedia && socialMedia.length > 0 ? (
                  // Site share display card (not clickable)
                  <div className="mx-2 p-4 shadow-lg rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30">
                    {/* Image */}
                    <div className="w-fit h-fit max-w-40 mx-auto rounded-xl flex items-center justify-center flex-shrink-0 mb-3 bg-white/30 backdrop-blur-sm border border-white/40">
                      {linkImage ? (
                        <img 
                          src={linkImage} 
                          alt={linkLabel}
                          className="w-full h-full max-h-40 object-cover bg-center rounded-xl" 
                        />
                      ) : (
                        <span className="text-xl">🐱</span>
                      )}
                    </div>
                    
                    {/* Text */}
                    <div className="w-full text-center mb-4">
                      <div className="font-semibold text-base text-white mb-2">
                        {linkLabel}
                      </div>
                      <div className="text-xs text-white/90">Share → Watch → Adore!</div>
                    </div>

                    {/* Social media links */}
                    <div className="space-y-2">
                      {socialMedia.map((item) => (
                        <div key={item.href} className="flex items-center justify-between text-sm text-white/80 bg-white/10 rounded-lg px-3 py-2">
                          <span className="font-medium">{item.label}:</span>
                          <a 
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-cyan-300 hover:text-cyan-200 underline truncate max-w-[200px]"
                          >
                            {item.href.replace('https://', '').replace('www.', '')}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Product share link card (clickable)
                  <a 
                    href={linkUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mx-2 p-4 shadow-lg rounded-2xl bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:shadow-xl transition-all duration-200 flex flex-col items-center group hover:scale-[1.02] border border-white/30"
                  >
                    {/* Image */}
                    <div className="w-fit h-fit max-w-40 rounded-xl flex items-center justify-center flex-shrink-0 mb-2 bg-white/30 backdrop-blur-sm border border-white/40">
                      {linkImage ? (
                        <img 
                          src={linkImage} 
                          alt={linkLabel}
                          className="w-full h-full max-h-40 object-cover bg-center rounded-xl" 
                        />
                      ) : (
                        <span className="text-xl">🌐</span>
                      )}
                    </div>
                    
                    {/* Text */}
                    <div className="w-full text-center">
                      <div className="font-semibold text-base text-white">
                        {linkLabel}
                      </div>
                      <div className="text-xs text-white/70 mt-1">{linkUrl}</div>
                    </div>
                  </a>
                )}

                {/* Share via */}
                <div className="flex gap-4 sm:gap-7 overflow-x-auto pb-4 px-2 -mx-2">
                  {shareOptions.map(({ id, label, icon, href, onClick, bg }) => (
                    <div key={id} className="flex flex-col items-center gap-2 flex-shrink-0">
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className={`w-14 h-14 rounded-2xl ${bg} transition-all flex items-center justify-center shadow-lg hover:shadow-xl group`}
                        >
                          {icon}
                        </a>
                      ) : (
                        <button
                          onClick={onClick}
                          className={`w-14 h-14 rounded-2xl ${bg} transition-all flex items-center justify-center shadow-lg hover:shadow-xl group`}
                        >
                          {icon}
                        </button>
                      )}
                      <span className="text-xs text-white text-center leading-tight whitespace-nowrap">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkShareModal;