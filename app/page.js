'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, ExternalLink, Calendar, MapPin, Sparkles, Heart } from 'lucide-react';

export default function Invitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => console.log('Audio autoplay blocked:', err));
    }
  };

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
    <div className="relative min-h-screen bg-[#120703] text-[#4A2E12] font-serif overflow-x-hidden flex justify-center items-center">
      {/* Background Audio */}
      <audio ref={audioRef} src="/music.mp3" loop />

      {/* Main Container */}
      <div className="w-full max-w-md min-h-screen relative flex flex-col items-center bg-[#FAF3E0] shadow-[0_0_60px_rgba(212,175,55,0.3)] border-x border-[#D4AF37]/40 overflow-hidden">
        
        {/* Decorative Top Toran / Arch Overlay Accent */}
        <div className="w-full h-3 bg-gradient-to-r from-[#8C5E1A] via-[#FFD700] to-[#8C5E1A] shadow-sm z-20" />

        {/* Floating Audio Button */}
        <button
          onClick={toggleAudio}
          className="fixed top-5 right-5 z-40 bg-gradient-to-tr from-[#59260B] to-[#8C5E1A] text-[#FFD700] p-3 rounded-full shadow-2xl border-2 border-[#D4AF37] active:scale-90 transition-transform"
        >
          {isPlaying ? <Volume2 size={20} className="animate-pulse" /> : <VolumeX size={20} />}
        </button>

        {/* ========================================================== */}
        {/* TEMPLE DOOR SLIDING OVERLAY */}
        {/* ========================================================== */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center max-w-md mx-auto overflow-hidden pointer-events-auto"
              exit={{ opacity: 0, transition: { delay: 1, duration: 0.6 } }}
            >
              {/* Left Door */}
              <motion.div
                className="absolute top-0 left-0 w-1/2 h-full bg-[#1F0E05] border-r-2 border-[#D4AF37] flex items-center justify-end shadow-2xl"
                animate={isOpen ? { x: '-100%' } : { x: '0%' }}
                transition={{ duration: 1.3, ease: [0.77, 0, 0.175, 1] }}
              >
                <div className="w-full h-full opacity-30 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="absolute right-3 top-0 bottom-0 w-[1px] bg-[#D4AF37]/50" />
              </motion.div>

              {/* Right Door */}
              <motion.div
                className="absolute top-0 right-0 w-1/2 h-full bg-[#1F0E05] border-l-2 border-[#D4AF37] flex items-center justify-start shadow-2xl"
                animate={isOpen ? { x: '100%' } : { x: '0%' }}
                transition={{ duration: 1.3, ease: [0.77, 0, 0.175, 1] }}
              >
                <div className="w-full h-full opacity-30 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-[#D4AF37]/50" />
              </motion.div>

              {/* Center Medallion Button */}
              <motion.button
                onClick={handleOpen}
                exit={{ scale: 0, rotate: 180, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="z-10 w-44 h-44 rounded-full bg-gradient-to-tr from-[#3D1E0B] via-[#8C5E1A] to-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.7)] border-4 border-[#FFF8DC] flex flex-col items-center justify-center text-center p-3 cursor-pointer active:scale-95 transition-transform"
              >
                <Sparkles className="w-5 h-5 text-[#FFD700] mb-1 animate-pulse" />
                <span className="text-2xl font-bold text-[#FFF8DC] drop-shadow-md">
                  गणपती नमः
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#FFE8A3] uppercase font-sans mt-1">
                  Tap To Open
                </span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================== */}
        {/* MAIN INVITATION BODY */}
        {/* ========================================================== */}
        <div className="w-full flex-1 flex flex-col items-center px-6 py-8 relative">
          
          {/* Header Title */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full flex flex-col items-center text-center mt-2"
          >
            <span className="text-xs font-bold text-[#8C5E1A] tracking-widest uppercase mb-1">
              ॥ श्री गणेशाय नमः ॥
            </span>
            <h1 className="text-4xl font-extrabold text-[#59260B] drop-shadow-sm mb-1">
              बाप्पाचे आगमन
            </h1>
            <p className="text-sm font-semibold text-[#7A4B19] mb-6">
              आपणास सस्नेह निमंत्रण !
            </p>

            {/* Temple Idol Arch Frame */}
            <div className="relative w-72 h-96 rounded-t-full border-4 border-[#D4AF37] p-3 bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EC] to-[#FCEECB] shadow-[0_12px_30px_rgba(140,94,26,0.2)] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:14px_14px] opacity-15" />
              <img 
                src="/ganpati.png" 
                alt="Lord Ganesha"
                className="w-full h-full object-contain relative z-10 drop-shadow-xl"
              />
            </div>
          </motion.section>

          {/* Golden Divider */}
          <div className="w-full flex items-center justify-center gap-3 my-8">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <span className="text-[#D4AF37] text-sm">𑁍</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </div>

          {/* Host & Date Card */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full bg-[#FFFDF8] rounded-3xl p-6 text-center border-2 border-[#E6C280] shadow-[0_8px_20px_rgba(0,0,0,0.05)] mb-8"
          >
            <span className="text-xs font-bold text-[#8C5E1A] tracking-widest uppercase">
              ॥ सप्रेम निमंत्रक ॥
            </span>
            <h2 className="text-3xl font-extrabold text-[#59260B] my-2">
              शिंदे परिवार
            </h2>
            <p className="text-sm text-[#7A4B19] leading-relaxed mb-5 font-medium">
              गणरायाचे आगमन व दर्शनासाठी आपण व आपल्या परिवारास सस्नेह निमंत्रण !
            </p>

            <div className="inline-flex items-center gap-2 bg-[#FDF0D5] border border-[#D4AF37] px-5 py-2.5 rounded-full text-xs font-bold text-[#59260B] shadow-sm">
              <Calendar size={16} className="text-[#8C5E1A]" />
              <span>१४ सप्टेंबर ते २० सप्टेंबर २०२६</span>
            </div>
          </motion.section>

          {/* Venue Card */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-full bg-gradient-to-b from-[#3D1E0B] to-[#251004] text-[#FFF8EA] rounded-3xl p-6 text-center shadow-2xl mb-8 border border-[#D4AF37]/50"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="text-[#FFD700]" size={20} />
              <h3 className="text-xl font-bold text-[#FFD700]">
                कार्यक्रम स्थळ
              </h3>
            </div>

            <p className="font-bold text-lg text-white mb-2">
              शिंदे निवास
            </p>
            <p className="text-xs sm:text-sm text-[#FFE8A3] leading-relaxed mb-6 font-sans opacity-95">
              फ्लॅट - १७/१८, अनिल अपार्टमेंट्स,<br />
              जगदुशा नगर, घाटकोपर (पश्चिम),<br />
              मुंबई - ४०००८४
            </p>

            {/* Embedded Google Map */}
            <div className="w-full h-44 rounded-2xl overflow-hidden border border-[#D4AF37]/40 mb-6 shadow-inner">
              <iframe
                title="Ghatkopar Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.185791209355!2d72.9098!3d19.0888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c622416f40b3%3A0x2897aa0e43df3cb4!2sJagdusha%20Nagar%2C%20Ghatkopar%20West%2C%20Mumbai%2C%20Maharashtra%20400084!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <a
              href="https://maps.app.goo.gl/MW8A4ruQRUiptPXs6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD700] via-[#E6C280] to-[#FFD700] text-[#3D1E03] px-7 py-3 rounded-full font-bold text-sm shadow-md hover:brightness-110 transition active:scale-95"
            >
              <span>Open Google Maps</span>
              <ExternalLink size={16} />
            </a>
          </motion.section>

          {/* Blessing Footer */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-full text-center py-6 border-t border-[#D4AF37]/40 flex flex-col items-center"
          >
            <Heart size={18} className="text-[#8C5E1A] mb-2 fill-[#8C5E1A]/20" />
            <p className="text-base font-bold text-[#59260B] leading-relaxed mb-2">
              आपली उपस्थिती हेच आमच्यासाठी बाप्पाचे खरे आशीर्वाद आहेत.
            </p>
            <span className="text-xs text-[#8C5E1A] font-semibold">
              — शिंदे परिवार
            </span>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
