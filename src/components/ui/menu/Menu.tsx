'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import './menu.css'

import { gsap } from 'gsap'

const menuLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

const Menu: React.FC = () => {
  const container = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Typing for GSAP timeline
  const tl = useRef<gsap.core.Timeline | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // GSAP animation setup
  useEffect(() => {
    if (!container.current) return

    // Initialize GSAP animations
    gsap.set('.menu-link-item-holder', { y: 750 })

    // Create the timeline
    tl.current = gsap
      .timeline({ paused: true })
      .to('.menu-overlay', {
        duration: 0.5,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'power4.inOut',
      })
      .to(
        '.menu-link-item-holder',
        {
          y: 0,
          duration: 0.2,
          stagger: 0.1,
          ease: 'power4.inOut',
          delay: -0.2,
        },
        '<'
      )
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play()
    } else {
      tl.current?.reverse()
    }
  }, [isMenuOpen])

  return (
    <div className='menu-container' ref={container}>
      <div className='menu-bar'>
        <div className='menu-logo'>
          <Link href='/'>Folio</Link>
        </div>
        <div className='menu-open' onClick={toggleMenu} aria-label='Open Menu' role='button'>
          <p>Menu</p>
        </div>
      </div>
      <div className='menu-overlay'>
        <div className='menu-overlay-bar'>
          <div className='menu-logo'>
            <Link href='/'>Folio</Link>
          </div>
          <div className='menu-close' onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>
        <div className='menu-close-icon'>
          <p>&#2715;</p>
        </div>
        <div className='menu-copy'>
          <div className='menu-links'>
            {menuLinks.map((link, index) => (
              <div className='menu-link-item' key={index}>
                <div className='menu-link-item-holder' onClick={toggleMenu}>
                  <Link href={link.path} className='menu-link'>
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className='menu-info'>
            <div className='menu-info-col'>
              <a href='#'>X &#8599;</a>
              <a href='#'>Instagram &#8599;</a>
              <a href='#'>LinkedIn &#8599;</a>
              <a href='#'>ArtStation &#8599;</a>
              <a href='#'>Dribble &#8599;</a>
            </div>
            <div className='menu-info-col'>
              <p>adityasupare2003@gmail.com</p>
              <p>2353 232 343</p>
            </div>
          </div>
        </div>
        <div className='menu-preview'>
          <p>View Showreel</p>
        </div>
      </div>
    </div>
  )
}

export default Menu
