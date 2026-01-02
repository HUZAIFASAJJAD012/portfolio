"use client";

import Header from '@/components/Header';
import TeamSection from '../../components/TeamSection';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { TemplateContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function TeamPage() {
  return (
    <>
    {/* <main className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container-custom max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block py-1 px-3 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">Our Team</span>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">Meet the People Behind LogiNest</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">A small, focused team building thoughtful software products and custom solutions.</p>
        </motion.header>

        <section className="mt-8">
          <TeamSection />
        </section>
      </div>
    </main> */}
    <TeamSection></TeamSection>
    
    </>
  
  );
}
