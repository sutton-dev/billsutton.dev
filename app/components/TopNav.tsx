"use client";

import React from 'react';

interface TopNavProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const TopNav = ({ currentPage, onPageChange }: TopNavProps) => {
  const navItems = [
    { id: 'workHistory', label: 'Work History' },
    { id: 'skills', label: 'Professional Skills'},
    { id: 'education', label: 'Education & Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' }
  ];

  return (
    <nav className="shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
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
      </div>
    </nav>
  );
};

export default TopNav;
