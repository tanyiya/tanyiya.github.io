/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Download, Mail, Github, ExternalLink, ChevronRight, Menu, X } from 'lucide-react';

type Section = 'home' | 'projects' | 'memories' | 'contact';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; id: Section }[] = [
    { label: '[Home]', id: 'home' },
    { label: '[Projects]', id: 'projects' },
    { label: '[Memories]', id: 'memories' },
    { label: '[Contact]', id: 'contact' },
  ];

  const handleNavClick = (id: Section) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 max-w-6xl mx-auto">
      {/* Navigation */}
      <nav className="relative flex justify-between md:justify-end items-center mb-12 md:mb-20 z-50">
        {/* Logo or Name for Mobile */}
        <div className="md:hidden font-bold text-lg">TYY.</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link text-sm md:text-base ${
                activeSection === item.id ? 'font-bold underline' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hand-border bg-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 bg-[#FDFDFD] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-2xl font-mono ${
                    activeSection === item.id ? 'font-bold underline' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && <Home key="home" />}
          {activeSection === 'projects' && <Projects key="projects" />}
          {activeSection === 'memories' && <Memories key="memories" />}
          {activeSection === 'contact' && <Contact key="contact" />}
        </AnimatePresence>
      </main>

      <footer className="mt-20 pt-8 border-t border-black/10 text-center text-xs opacity-50">
        © 2026 Tan Yi Ya • Built with React & Tailwind
      </footer>
    </div>
  );
}

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid md:grid-cols-2 gap-12 items-center md:-mt-15 ml-16"
    >
      {/* Left Column: Text */}
      <div className="space-y-6">
        {/* Highlight Label */}
        <div className="inline-block px-4 py-1 rounded-full border-2 border-black text-sm font-medium">
          Looking for Internship Programme
        </div>

        {/* Headline */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, <br className="md:hidden" />
            <span className="inline-block">I'm Tan Yi Ya</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-80">
            Bachelor of Data Engineering (Hons.) Student
          </p>
        </div>

        {/* Description */}
        <p className="text-lg leading-relaxed max-w-xl">
          I'm a Data Engineering student at University of Technology Malaysia
          with a strong foundation in database management. I aim to build
          efficient and scalable backend systems.
        </p>

        {/* Location & CV */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-3">
            <MapPin size={20} />
            <span>Based in Penang, Malaysia</span>
          </div>
          <a
            href="Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 hand-button px-4 py-2"
          >
            <Download size={20} />
            <span>Download CV</span>
          </a>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="relative flex justify-center">
        <div className="relative w-64 h-80 md:w-80 md:h-96">
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <img
              src="../animated picture.png"
              alt="Picture of me"
              className="w-full h-full object-contain filter grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}


function Projects() {
  const projects = [
    {
      period: "Year 1 Sem 2",
      title: "Course Registration System",
      description:
        "Web application design focusing on database structure and user management.",
      tech: ["HTML", "PHP", "CSS", "JSON", "SQL"],
      github: "https://github.com/tanyiya/crs",
    },
    {
      period: "Year 2 Sem 2",
      title: "Hospital Management System",
      description:
        "A comprehensive system built using object-oriented principles for medical records.",
      tech: ["Java", "OOP"],
      github: "https://github.com/tanyiya/HospitalAppointmentManagement",
    },
    {
      period: "Year 3 Sem 1",
      title: "Car Rental System",
      description:
        "Scalable rental platform with complex database relationships and queries.",
      tech: ["SQL", "MongoDB", "Database Programming"],
      github: "https://github.com/tanyiya/DP-Project",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Some of the Projects I've done...
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="hand-border p-6 flex flex-col h-full bg-white"
          >
            <div className="text-sm opacity-60 mb-2">
              {project.period}
            </div>

            <h3 className="text-xl font-bold mb-4 leading-tight">
              {project.title}
            </h3>

            <p className="text-sm mb-6 flex-grow">
              {project.description}
            </p>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 border border-black/20 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full hand-button text-sm flex items-center justify-center gap-2 hover:scale-105 transition"
                >
                  See More <ChevronRight size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Memories() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8 text-center py-20 md:-mt-17"
    >
      <h2 className="text-3xl font-bold italic">Memories</h2>
      <p className="max-w-md mx-auto opacity-70">
        Capturing moments from my journey as a student and developer. 
        Coming soon...
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-square hand-border bg-gray-50 flex items-center justify-center grayscale opacity-30">
            <span className="text-xs">Photo {i}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col items-center justify-center py-20 space-y-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold italic">Contact Me</h2>
      
      <div className="space-y-6 text-lg md:text-xl">
        <a 
          href="mailto:tanyiya04@gmail.com" 
          className="flex items-center gap-4 hover:underline decoration-2 underline-offset-8 group"
        >
          <div className="p-3 hand-border group-hover:bg-black group-hover:text-white transition-colors">
            <Mail size={24} />
          </div>
          <span>tanyiya04@gmail.com</span>
        </a>
        
        <a 
          href="https://github.com/tanyiya" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:underline decoration-2 underline-offset-8 group"
        >
          <div className="p-3 hand-border group-hover:bg-black group-hover:text-white transition-colors">
            <Github size={24} />
          </div>
          <span>tanyiya</span>
        </a>
      </div>

      <div className="pt-12">
        <div className="text-sm opacity-50 animate-pulse">
          Available for opportunities and collaborations
        </div>
      </div>
    </motion.div>
  );
}
