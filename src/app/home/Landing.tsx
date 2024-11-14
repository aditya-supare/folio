'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const Landing: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white space-y-6">
      
      <div className="absolute top-0 left-0 w-full h-full opacity-40 z-10" />
      
      <div className="relative z-20 flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-2">
          <motion.span
            initial={{ y: -450 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
            className="px-4 py-0.5 bg-[#FBBF24] text-lg rounded-full"
          >
            Ciao !
          </motion.span>
          <motion.h2
            initial={{ y: -450 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="text-gray-400 text-lg"
          >
            I'm Aditya Supare
          </motion.h2>
        </div>

        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.7 }}
            className="text-5xl font-semibold md:text-6xl lg:text-8xl"
          >
            <span style={{ color: '#a04fe7' }}>DIGITAL</span> <br />
            <span style={{ color: '#dcc258', marginLeft: '70px' }}>EXPERIENCE</span> <br />
            <span style={{ color: '#dcdbc8', marginRight: '150px' }}>DESIGNER</span> <br />
            <span style={{ color: '#dcdbc8', marginLeft: '60px' }}>&</span>{' '}
            <span style={{ color: '#58dcbe' }}>DEVELOPER</span>
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
          <Link href='/contact'>
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
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
                className="px-8 py-2 border border-black bg-transparent text-black dark:border-white relative group transition duration-200"
              >
                <div className="absolute -bottom-2 -right-2 bg-[#dbba39] h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
                <span className="relative">Let&apos;s Connect</span>
              </motion.button>
            </motion.div>
          </motion.div>
          </Link>
        </div>

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
    </div>
  );
};

export default Landing;
