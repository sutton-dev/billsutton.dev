"use client";

import React from 'react'
import Image from 'next/image'

const Experience = ({companyLogo, company, roles, isExpanded, onToggle}: 
    {companyLogo: string, company: string, roles: Array<{title: string, startYear: string, endYear: string, description: string, responsibilities: string, achievements: string}>, isExpanded: boolean, onToggle: () => void}) => {

  const currentRole = roles[0]; // Most recent role
  const totalYears = roles.length > 1 ? 
    `${roles[roles.length - 1].startYear} - ${currentRole.endYear}` : 
    `${currentRole.startYear} - ${currentRole.endYear}`;

  return (
    <div className="border border-gray-900 rounded-lg p-4 cursor-pointer hover:bg-gray-800 text-white" onClick={onToggle}>
      <div className="flex items-center gap-4">
        <Image src={companyLogo} alt={company} width={64} height={64} className="rounded-lg" />
        <div className="flex-1">
          <h1 className="text-xl font-bold">{company}</h1>
          <p className="text-sm text-gray-300">{totalYears}</p>
          <p className="text-sm font-medium">{currentRole.title}</p>
        </div>
        <span className="text-2xl">{isExpanded ? '−' : '+'}</span>
      </div>
      
      {isExpanded && (
        <div className="mt-4 space-y-4">
          {roles.map((role, index) => (
            <div key={index} className="border-l-2 border-gray-600 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-lg font-semibold">{role.title}</h2>
                <span className="text-sm text-gray-400">({role.startYear} - {role.endYear})</span>
              </div>
              <p className="text-gray-300 mb-2">{role.description}</p>
              <p className="text-sm text-gray-300"><strong>Responsibilities:</strong> {role.responsibilities}</p>
              <p className="text-sm text-gray-300"><strong>Achievements:</strong> {role.achievements}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Experience;