'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, ExternalLink } from 'lucide-react';

export default function Invitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Handle opening doors & starting audio
  const handleOpen = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => console.log('Audio autoplay blocked:', err));
    }
  };

  // Toggle background music
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FDF8EE] text-[#4A2E12] font-serif overflow-x-hidden flex justify-center">
      {/* Background Audio */}
      <audio ref={audioRef} src="/music.mp3" loop />

      {/* Main Container - Mobile First Frame */}
      <div className="w-full max-w-md min-h-screen relative flex flex-col items-center shadow-2xl bg-[#FFFDF7]">
        
        {/* ========================================================== */}
        {/* DOOR OVERLAY / COVER SCREEN (Screen 1) */}
        {/* ========================================================== */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center max-w-md mx-auto overflow-hidden pointer-events-auto"
              exit={{ opacity: 0, transition: { delay: 1, duration: 0.5 } }}
            >
              {/* Left Door Panel */}
              <motion.div
                className="absolute top-0 left-0 w-1/2 h-full bg-[#E5B869] border-r-2 border-[#B8860B] flex items-center justify-end"
                animate={isOpen ? { x: '-100%' } : { x: '0%' }}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              >
                <div className="w-full h-full opacity-20 bg-[radial-gradient(#8B4513_1px,transparent_1px)] [background-size:16px_16px]" />
              </motion.div>

              {/* Right Door Panel */}
              <motion.div
                className="absolute top-0 right-0 w-1/2 h-full bg-[#E5B869] border-l-2 border-[#B8860B] flex items-center justify-start"
                animate={isOpen ? { x: '100%' } : { x: '0%' }}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              >
                <div className="w-full h-full opacity-20 bg-[radial-gradient(#8B4513_1px,transparent_1px)] [background-size:16px_16px]" />
              </motion.div>

              {/* Center Lock / Open Button */}
              <motion.button
                onClick={handleOpen}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="z-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#E6C280] via-[#C9963B] to-[#8C5E1A] shadow-2xl border-4 border-[#FFF8DC] flex flex-col items-center justify-center text-center p-2 cursor-pointer active:scale-95 transition-transform"
              >
                <span className="text-xl font-bold text-[#3D1E03] mb-1">
                  गणपती नमः
                </span>
                <span className="text-[10px] tracking-widest text-[#5C3A0A] uppercase font-sans">
                  Tap to Open
                </span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================== */}
        {/* MAIN INVITATION CONTENT (Screens 2 - 5) */}
        {/* ========================================================== */}
        <div className="w-full flex-1 flex flex-col items-center px-6 py-8 relative">
          
          {/* Audio Floating Toggle Button */}
          <button
            onClick={toggleAudio}
            className="fixed top-4 right-4 z-40 bg-[#8C5E1A] text-white p-3 rounded-full shadow-lg border-2 border-[#E6C280] active:scale-90 transition"
          >
            {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>

          {/* Section 1: Hero Header & Idol (Screen 2) */}
          <section className="w-full flex flex-col items-center text-center mt-4">
            <span className="text-sm font-semibold text-[#8C5E1A] tracking-wider mb-2">
              ॥ श्री गणेशाय नमः ॥
            </span>
            <h1 className="text-4xl font-extrabold text-[#59260B] leading-tight mb-2">
              बाप्पाचे आगमन
            </h1>
            <p className="text-sm text-[#7A4B19] mb-6">
              आपणास सस्नेह निमंत्रण !
            </p>

            {/* Ganesha Frame */}
            <div className="relative w-64 h-80 rounded-t-full border-4 border-[#C9963B] p-2 bg-[#FFFDF7] shadow-xl overflow-hidden flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1567591374605-4f40f28e219f?q=80&w=800&auto=format&fit=crop" 
                alt="Lord Ganesha"
                className="w-full h-full object-cover rounded-t-full"
              />
            </div>
          </section>

          <hr className="w-full border-t border-[#E6C280] my-8" />

          {/* Section 2: Host Invitation Details (Screen 3) */}
          <section className="w-full bg-[#FFF8EA] rounded-2xl p-6 text-center border border-[#E6C280] shadow-sm mb-8">
            <span className="text-xs font-semibold text-[#8C5E1A]">
              ॥ सप्रेम निमंत्रक ॥
            </span>
            <h2 className="text-2xl font-bold text-[#59260B] my-2">
              देशपांडे परिवार
            </h2>
            <p className="text-sm text-[#7A4B19] leading-relaxed">
              आपण व आपल्या परिवारास सस्नेह निमंत्रण !
            </p>
          </section>

          {/* Section 3: Venue & Map (Screen 4) */}
          <section className="w-full bg-[#4A2B11] text-[#FFF8EA] rounded-2xl p-6 text-center shadow-lg mb-8">
            <h3 className="text-xl font-bold mb-4 text-[#E6C280]">
              कार्यक्रम स्थळ
            </h3>
            
            {/* Embedded Google Map */}
            <div className="w-full h-44 rounded-lg overflow-hidden border border-[#8C5E1A] mb-4">
              <iframe
                title="Venue Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15131.782061957446!2d73.8474245!3d18.5308225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0883858f0dd%3A0x23a1a9e99c15330e!2sShivajinagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <p className="font-semibold text-lg text-white mb-1">
              देशपांडे निवास
            </p>
            <p className="text-xs text-[#E6C280] leading-relaxed mb-4">
              फ्लॅट नं. ४०२, श्री गणेशा अपार्टमेंट्स, शिवाजीनगर,<br />
              पुणे - ४११००५
            </p>

            <a
              href="https://maps.google.com/?q=Shivajinagar,Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E6C280] text-[#3D1E03] px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-[#D4A755] transition"
            >
              <span>Open Maps</span>
              <ExternalLink size={16} />
            </a>
          </section>

          {/* Section 4: Blessings Footer (Screen 5) */}
          <section className="w-full text-center py-6 border-t border-[#E6C280]">
            <p className="text-base font-semibold text-[#59260B] leading-relaxed mb-4">
              आपली उपस्थिती हेच आमच्यासाठी बाप्पाचे खरे आशीर्वाद आहेत.
            </p>
            <span className="text-xs text-[#8C5E1A] italic">
              — देशपांडे परिवार
            </span>
          </section>

        </div>
      </div>
    </div>
  );
}
