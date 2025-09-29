"use client";

import React, { useState } from 'react';

interface TopNavProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const TopNav = ({ currentPage, onPageChange }: TopNavProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'workHistory', label: 'Work History' },
    { id: 'skills', label: 'Professional Skills'},
    { id: 'education', label: 'Education & Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' }
  ];

  const handleNavClick = (page: string) => {
    onPageChange(page);
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  return (
    <nav className="shadow-sm bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors whitespace-nowrap ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-900 text-white hover:text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex justify-between items-center h-16">
            <div className="text-white font-medium">Menu</div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="pb-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-3 rounded-md text-sm font-medium transition-colors text-left ${
                      currentPage === item.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-white hover:text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
