'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { Button } from '~/components/ui/button';

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white space-y-6">
      
      {/* Hello Message */}
      <div className="flex items-center space-x-2">
        <motion.h2 
          initial={{ y: -250 }}
          animate={{ y: 0 }} 
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-gray-400 text-lg"
        >
          Hello, I'm Aditya
        </motion.h2>
        <motion.span initial={{ y: -250 }}
          animate={{ y: 0 }} 
          transition={{ delay: 0.2, type: 'spring', stiffness: 150 }} 
          className="px-2 py-1 bg-pink-500 text-md rounded-full">3D-Art</motion.span>
      </div>

      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-5xl font-semibold md:text-6xl lg:text-8xl"
        >
          <span style={{ color: '#A78BFA' }}>DIGITAL</span> <br />
          <span style={{ color: '#FBBF24' }}>EXPERIENCE</span> <br />
          <span style={{ color: '#D1D5DB' }}>DESIGNER</span> &{' '}
          <span style={{ color: '#5EEAD4' }}>DEVELOPER</span>
        </motion.h1>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <motion.p 
          initial={{ y: -800 }} 
          animate={{ y: 0 }} 
          transition={{ delay: 0.2, type: 'spring', stiffness: 140 }}
          className="text-sm text-gray-400 text-center"
        >
          // 2D/3D & Full-Stack Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center space-x-4"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            whileDrag={{ scale: 0.9, rotate: 10 }}
            drag
          >
            <button className="px-8 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
            <div className="absolute -bottom-2 -right-2 bg-[#FBBF24] h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
            <span className="relative">
             Let&apos;s connect
            </span>
        </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-center text-lg text-gray-300 max-w-lg mt-6"
      >
        I create a digital experience that borders on <span className="text-purple-400">efficiency</span>,{' '}
        <span className="text-yellow-400">aesthetics</span>, and{' '}
        <span className="text-teal-400">functionality</span>.
      </motion.p>
    </div>
  );
};

export default Landing;
