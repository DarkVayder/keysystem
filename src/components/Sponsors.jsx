import React from 'react';
import { motion } from 'framer-motion';
import sponsor1 from "../assets/sponsor1.png"; 
import sponsor2 from "../assets/sponsor2.png";
import sponsor3 from "../assets/sponsor3.png";
import sponsor4 from "../assets/sponsor4.png";
import sponsor5 from "../assets/sponsor5.png";
import sponsor6 from "../assets/sponsor6.png";
import sponsor7 from "../assets/sponsor7.png";

const Sponsors = () => {
  return (
    <div className="relative bg-[#050617] py-10 overflow-hidden">
      {/* Sponsor Scrolling Animation */}
      <motion.div
        className="flex justify-start space-x-12"
        animate={{
          x: ["100%", "-100%"]  // Move from right (100%) to left (-100%)
        }}
        transition={{
          duration: 60,  
          repeat: Infinity,  
          ease: "linear",  
        }}
      >
        {/* Sponsor Images */}
        <img src={sponsor1} alt="Sponsor 1" className="w-32 h-auto object-contain" />
        <img src={sponsor2} alt="Sponsor 2" className="w-32 h-auto object-contain" />
        <img src={sponsor3} alt="Sponsor 3" className="w-32 h-auto object-contain" />
        <img src={sponsor4} alt="Sponsor 4" className="w-32 h-auto object-contain" />
        <img src={sponsor5} alt="Sponsor 5" className="w-32 h-auto object-contain" />
        <img src={sponsor6} alt="Sponsor 6" className="w-32 h-auto object-contain" />
        <img src={sponsor7} alt="Sponsor 7" className="w-32 h-auto object-contain" />
      </motion.div>
    </div>
  );
};

export default Sponsors;
