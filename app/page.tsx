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
    <div>
      <div className="flex flex-col items-center justify-center py-12 px-4">
        {renderMainContent()}
      </div>
      
      <TopNav currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <div className="flex flex-col items-center justify-center py-12 px-4">
        {renderPageContent()}
      </div>
    </div>
  );
}