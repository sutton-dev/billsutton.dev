"use client";

import { educationData } from "../data/education";
import { useState } from "react";

const Education = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications'>('education');

  const navItems = [
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tab Navigation using TopNav component */}
      <div className="mb-8">
        <nav className="shadow-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center items-center h-16">
              <div className="flex items-center space-x-8">
                <div className="flex space-x-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as 'education' | 'certifications')}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === item.id
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
      </div>

      {/* Education Tab */}
      {activeTab === 'education' && (
        <div className="space-y-6">
          {educationData.education.map((edu, index) => (
            <div key={index} className="border border-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors text-white">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <p className="text-lg text-blue-400 font-medium">{edu.institution}</p>
                <p className="text-sm text-gray-300">{edu.type}</p>
              </div>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Certifications Tab */}
      {activeTab === 'certifications' && (
        <div className="space-y-6">
          {educationData.certifications.map((cert, index) => (
            <div key={index} className="border border-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors text-white">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                <p className="text-lg text-blue-400 font-medium">{cert.issuer}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                    cert.status.includes('Previously Held')
                      ? 'bg-gray-900 text-white'
                      : 'bg-green-600 text-white'
                  }`}>
                    {cert.status}
                  </span>
                  <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full font-medium">
                    {cert.category}
                  </span>
                </div>
              </div>
              <p className="text-gray-300">{cert.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Education;
