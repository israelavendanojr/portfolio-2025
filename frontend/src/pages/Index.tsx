import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Research from '@/components/Research';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Research />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="section-container py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              © 2025 Israel Avendano Jr. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p>
              Seeking 2026 internships and new-grad opportunities in AI/ML and Software Engineering.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
