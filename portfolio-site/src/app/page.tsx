"use client";

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Process from '@/components/Process';
import SocialLinks from '@/components/SocialLinks';

// Lazy load components that are below the fold
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false });
const Products = dynamic(() => import('@/components/Products'), { ssr: false });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  // Optimized smooth scrolling effect with throttling
  useEffect(() => {
    let rafId: number;
    
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.js-scroll');
      
      scrollElements.forEach((el) => {
        if (isElementInViewport(el)) {
          el.classList.add('scrolled');
        }
      });
    };
    
    const isElementInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
      );
    };
    
    const throttledScroll = () => {
      handleScroll();
      rafId = 0;
    };
    
    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(throttledScroll);
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main>
      <Header />
      <Hero />
        <Process />
    
       <About />
      <Products />
      <Projects />
      <Contact />
      <Footer />
      <SocialLinks />
    </main>
  );
}
