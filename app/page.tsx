'use client';
import Skills from "./skills/skills"
import TopNav from "./components/TopNav";
import React, { useState } from "react";
import PreviousPositions from "./previousPositions/previousPositions";
import Education from "./education/education";
import Projects from "./projects/page";
import Image from "next/image";

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderMainContent = () => {
    return (
      <>
        <h1 className="text-4xl font-bold">Bill Sutton</h1>
        <Image src="/images/bill.jpg" alt="Bill Sutton" width={256} height={256} className="object-cover rounded-full mx-auto" />

        {/* Social Links */}
        <div className="flex gap-4 my-4">
          <a href="https://www.linkedin.com/in/bill-sutton/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://github.com/sutton-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
            </svg>
          </a>
          <a href="mailto:bill@billsutton.dev" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>

        <p className="text-xl font-bold text-center max-w-5xl mx-auto px-6 leading-loose mb-8">Senior Salesforce Developer with 12+ years of experience specializing in CI/CD pipeline optimization, developer productivity, and platform health. AI-enhanced development approach accelerates solution delivery while maintaining quality. Reduced deployment times by 90% and supported 50+ developers at scale through innovative DevOps solutions and automated testing frameworks.</p>
      </>
    );
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'workHistory':
        return <PreviousPositions />
      case 'skills':
        return <Skills />
      case 'education':
        return <Education />
      case 'projects':
        return <Projects />;
      case 'about':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                I&apos;m a Senior Salesforce Developer with over 12 years of experience specializing in CI/CD pipeline optimization, 
                developer productivity, and platform health. My career has been built on a foundation of technical excellence 
                and a passion for solving complex challenges at scale.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Most recently at Coinbase, I drove developer productivity and platform stability for 50+ Salesforce developers 
                managing 30-60 on-demand deployments weekly. I successfully reduced deployment times by 90% (from 2-3 hours 
                to 12-20 minutes) through innovative domain-based packaging strategies and automated CI/CD workflows.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                My journey spans from startup environments (Cloud62) through enterprise consulting (Huron Consulting Group) 
                to high-growth companies (ACV Auctions) and fintech (Coinbase). This diverse experience across Automotive, 
                Healthcare, Manufacturing, and eCommerce industries has given me unique insights into scaling Salesforce 
                solutions for different business models and compliance requirements.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                I&apos;m passionate about mentoring developers, building high-performing teams, and establishing enterprise-grade 
                practices that enable organizations to scale efficiently. My approach combines deep technical expertise with 
                strategic thinking to deliver solutions that drive real business value.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                When I&apos;m not architecting Salesforce solutions or optimizing deployment pipelines, I enjoy staying current 
                with emerging technologies and contributing to the developer community through knowledge sharing and best 
                practice development.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex flex-col items-center justify-center py-8 md:py-12 px-4">
        {renderMainContent()}
      </div>

      <TopNav currentPage={currentPage} onPageChange={setCurrentPage} />

      <div className="flex flex-col items-center justify-center py-8 md:py-12 px-4">
        {renderPageContent()}
      </div>
    </div>
  );
}