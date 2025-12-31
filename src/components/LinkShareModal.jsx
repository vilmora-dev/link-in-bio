import React, { useEffect, useRef } from 'react';

const LinkShareModal = ({ isOpen, onClose, linkUrl, linkLabel, linkImage }) => {
  
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

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
      
      {/* Modal Container - matches max-w-lg from main app */}
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
                {/* Link Card Button */}
                <a 
                  href={linkUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mx-2 p-4 shadow-lg rounded-2xl bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:shadow-xl transition-all duration-200 flex flex-col items-center group hover:scale-[1.02] border border-white/30"
                >
                  {/* Image */}
                  <div 
                    className="w-fit h-fit max-w-40 rounded-xl flex items-center justify-center flex-shrink-0 mb-2 bg-white/30 backdrop-blur-sm border border-white/40"
                  >
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

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkShareModal;