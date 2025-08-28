"use client";

import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Process from '@/components/Process';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  // For smooth scrolling effect
  useEffect(() => {
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
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <Header />
      <Hero />
        <Process />
    
  <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
