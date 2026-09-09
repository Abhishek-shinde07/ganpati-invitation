'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, ExternalLink, Calendar, MapPin, Sparkles, Heart } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: 'easeOut' } 
  }
};

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
    <div className="relative min-h-screen bg-[#120502] text-[#3D1E03] font-serif overflow-x-hidden flex justify-center items-center">
      {/* Background Audio */}
      <audio ref={audioRef} src="/music.mp3" loop />

      {/* Main Container with Custom Background Image */}
      <div 
        className="w-full max-w-md min-h-screen relative flex flex-col items-center bg-cover bg-center bg-no-repeat shadow-[0_0_60px_rgba(212,175,55,0.4)] border-4 border-[#D4AF37] overflow-hidden m-0 sm:m-2 rounded-none sm:rounded-3xl"
        style={{ backgroundImage: "url('/bg-pattern.png')" }}
      >
        {/* Soft Overlay for text readability */}
        <div className="absolute inset-0 bg-[#FFFDF8]/50 pointer-events-none z-0" />

        {/* Inner Gold Inset Frame Border */}
        <div className="absolute inset-2 border border-[#D4AF37]/50 rounded-none sm:rounded-2xl pointer-events-none z-20 flex flex-col justify-between p-2">
          <div className="flex justify-between text-xs text-[#D4AF37]">
            <span>☸</span>
            <span>☸</span>
          </div>
          <div className="flex justify-between text-xs text-[#D4AF37]">
            <span>☸</span>
            <span>☸</span>
          </div>
        </div>

        {/* Top Toran & Hanging Bells */}
        <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none flex justify-between items-start px-3 pt-2">
          <div className="flex flex-col items-center animate-swing">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px]">🌸</span>
              <div className="w-[2px] h-10 bg-gradient-to-b from-[#FFD700] via-[#FFF8DC] to-[#C9963B]" />
              <span className="text-xs">🪷</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-gradient-to-b from-[#FFD700] to-[#C9963B] border border-[#8C5E1A] shadow-lg flex items-center justify-center text-xs mt-1">
              🔔
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center pt-2 px-1">
            <div className="flex justify-center items-center gap-2 text-xs text-[#E85D04]">
              <span>🪷</span>
              <span className="text-sm">🌸</span>
              <span className="text-base text-[#D4AF37]">𑁍</span>
              <span className="text-sm">🌸</span>
              <span>🪷</span>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-1" />
          </div>

          <div className="flex flex-col items-center animate-swing" style={{ animationDelay: '1.2s' }}>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px]">🌸</span>
              <div className="w-[2px] h-10 bg-gradient-to-b from-[#FFD700] via-[#FFF8DC] to-[#C9963B]" />
              <span className="text-xs">🪷</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-gradient-to-b from-[#FFD700] to-[#C9963B] border border-[#8C5E1A] shadow-lg flex items-center justify-center text-xs mt-1">
              🔔
            </div>
          </div>
        </div>

        {/* Floating Audio Button */}
        <button
          onClick={toggleAudio}
          className="fixed top-5 right-5 z-40 bg-gradient-to-tr from-[#3D1E0B] via-[#8C5E1A] to-[#D4AF37] text-[#FFD700] p-3.5 rounded-full shadow-2xl border-2 border-[#FFF8DC] active:scale-90 transition-transform"
        >
          {isPlaying ? <Volume2 size={20} className="animate-pulse" /> : <VolumeX size={20} />}
        </button>

        {/* Sliding Doors Cover */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center max-w-md mx-auto overflow-hidden pointer-events-auto"
              exit={{ opacity: 0, transition: { delay: 1, duration: 0.6 } }}
            >
              {/* Left Door Panel */}
              <motion.div
                className="absolute top-0 left-0 w-1/2 h-full bg-[#2A0C1B] border-r-2 border-[#D4AF37] flex items-center justify-end shadow-2xl"
                animate={isOpen ? { x: '-100%' } : { x: '0%' }}
                transition={{ duration: 1.3, ease: [0.77, 0, 0.175, 1] }}
              >
                <div className="w-full h-full opacity-25 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="absolute top-8 left-0 text-5xl text-[#D4AF37]/30">☸</div>
              </motion.div>

              {/* Right Door Panel */}
              <motion.div
                className="absolute top-0 right-0 w-1/2 h-full bg-[#2A0C1B] border-l-2 border-[#D4AF37] flex items-center justify-start shadow-2xl"
                animate={isOpen ? { x: '100%' } : { x: '0%' }}
                transition={{ duration: 1.3, ease: [0.77, 0, 0.175, 1] }}
              >
                <div className="w-full h-full opacity-25 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="absolute top-8 right-0 text-5xl text-[#D4AF37]/30">☸</div>
              </motion.div>

              {/* Center Royal Medallion Button */}
              <motion.button
                onClick={handleOpen}
                exit={{ scale: 0, rotate: 180, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="z-10 w-44 h-44 rounded-full bg-gradient-to-br from-[#501229] via-[#8C5E1A] to-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.9)] border-4 border-[#FFF8DC] flex flex-col items-center justify-center text-center p-3 cursor-pointer active:scale-95 transition-transform"
              >
                <Sparkles className="w-5 h-5 text-[#FFD700] mb-1 animate-pulse" />
                <span className="text-xl font-bold text-[#FFF8DC] drop-shadow-md leading-snug">
                  श्री गणेशाय नमः
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#FFE8A3] uppercase font-sans mt-1">
                  Tap To Open
                </span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scrollable Content Body */}
        <div className="w-full flex-1 flex flex-col items-center px-6 pt-16 pb-12 relative z-10">
          
          <motion.section 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full flex flex-col items-center text-center mt-2 relative"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-2xl animate-float">🦚</span>
              <span className="text-xs font-bold text-[#8C5E1A] tracking-widest uppercase">
                ॥ श्री गणेशाय नमः ॥
              </span>
              <span className="text-2xl animate-float" style={{ animationDelay: '1.5s' }}>🦚</span>
            </div>

            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#701A33] via-[#B3261E] to-[#701A33] bg-clip-text text-transparent drop-shadow-sm mb-1">
              बाप्पाचे आगमन
            </h1>
            <p className="text-sm font-bold text-[#8C5E1A] mb-6">
              आपणास सस्नेह निमंत्रण !
            </p>

            {/* Jharokha Temple Arch Frame */}
            <div 
              className="relative w-60 h-80 rounded-t-full border-4 border-[#D4AF37] p-6 bg-cover bg-center bg-no-repeat shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden"
              style={{ backgroundImage: "url('/temple-bg.png')" }}
            >
              <div className="absolute inset-0 bg-[#120502]/65 pointer-events-none z-0" />
              <div className="absolute top-3 text-xl text-[#FFD700] opacity-80 z-20">𑁍</div>
              
              <img 
                src="/ganpati.png" 
                alt="Lord Ganesha"
                className="w-4/5 h-4/5 object-contain relative z-10 drop-shadow-[0_10px_20px_rgba(255,215,0,0.25)]"
              />
            </div>
          </motion.section>

          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full flex items-center justify-center gap-3 my-10"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C9963B] to-transparent" />
            <span className="text-[#B3261E] text-lg">🪷 𑁍 🪷</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C9963B] to-transparent" />
          </motion.div>

          <motion.section 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full bg-gradient-to-b from-[#FFFDF8] to-[#FFF0D4] rounded-3xl p-6 text-center border-2 border-[#D4AF37] shadow-[0_10px_25px_rgba(0,0,0,0.06)] mb-10 relative overflow-hidden"
          >
            <div className="absolute top-2 left-2 text-xs text-[#D4AF37]">☸</div>
            <div className="absolute top-2 right-2 text-xs text-[#D4AF37]">☸</div>

            <span className="text-xs font-bold text-[#8C5E1A] tracking-widest uppercase">
              ॥ सप्रेम निमंत्रक ॥
            </span>
            <h2 className="text-3xl font-extrabold text-[#701A33] my-2">
              शिंदे परिवार
            </h2>
            <p className="text-sm text-[#7A4B19] leading-relaxed mb-6 font-semibold">
              गणरायाचे आगमन व दर्शनासाठी आपण व आपल्या परिवारास सस्नेह निमंत्रण !
            </p>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FDE2E4] via-[#FFF0F2] to-[#FDE2E4] border border-[#B3261E] px-5 py-2.5 rounded-full text-xs font-bold text-[#701A33] shadow-sm">
              <Calendar size={16} className="text-[#B3261E]" />
              <span>१४ सप्टेंबर ते २० सप्टेंबर २०२६</span>
            </div>
          </motion.section>

          <motion.section 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full bg-gradient-to-b from-[#3B0A1A] via-[#2A0612] to-[#1A030A] text-[#FFF8EA] rounded-3xl p-6 text-center shadow-2xl mb-10 border-2 border-[#D4AF37] relative overflow-hidden"
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

            <div className="w-full h-44 rounded-2xl overflow-hidden border border-[#D4AF37]/60 mb-6 shadow-inner">
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD700] via-[#E6C280] to-[#FFD700] text-[#3D1E03] px-7 py-3 rounded-full font-bold text-sm shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:brightness-110 transition active:scale-95"
            >
              <span>Open Google Maps</span>
              <ExternalLink size={16} />
            </a>
          </motion.section>

          <motion.section 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full text-center py-6 border-t border-[#D4AF37]/50 flex flex-col items-center"
          >
            <div className="text-lg text-[#B3261E] mb-2">🪷</div>
            <p className="text-base font-bold text-[#701A33] leading-relaxed mb-2">
              आपली उपस्थिती हेच आमच्यासाठी बाप्पाचे खरे आशीर्वाद आहेत.
            </p>
            <span className="text-xs text-[#8C5E1A] font-bold">
              — शिंदे परिवार
            </span>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
