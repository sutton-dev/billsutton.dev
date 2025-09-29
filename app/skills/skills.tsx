"use client";
import React, { useState } from 'react'
import { skillsData } from '../data/skills'

interface Skill {
  name: string;
  description: string;
  level: string;
  years: string;
}

const Skills = () => {
  const [selectedTechnicalSkill, setSelectedTechnicalSkill] = useState<string | null>(null);
  const [selectedSoftSkill, setSelectedSoftSkill] = useState<string | null>(null);

  const { technicalSkills, softSkills } = skillsData;

  const handleTechnicalSkillClick = (skillName: string) => {
    setSelectedTechnicalSkill(selectedTechnicalSkill === skillName ? null : skillName);
    setSelectedSoftSkill(null); // Close soft skills modal if open
  };

  const handleSoftSkillClick = (skillName: string) => {
    setSelectedSoftSkill(selectedSoftSkill === skillName ? null : skillName);
    setSelectedTechnicalSkill(null); // Close technical skills modal if open
  };

  const renderSkillPills = (skills: Skill[], category: string, selectedSkill: string | null, onSkillClick: (skillName: string) => void) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">{category}</h2>
      {/* Modal for this section */}
      {selectedSkill && (
        <div className="mt-4 bg-gray-800 border border-gray-600 rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-white">{selectedSkill}</h3>
            <button 
              onClick={() => onSkillClick(selectedSkill)}
              className="text-gray-400 hover:text-white text-xl"
            >
              ×
            </button>
          </div>
          <p className="text-gray-300 mb-2">
            {skills.find(skill => skill.name === selectedSkill)?.description}
          </p>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">
              Level: <span className="text-white">
                {skills.find(skill => skill.name === selectedSkill)?.level}
              </span>
            </span>
            <span className="text-gray-400">
              Experience: <span className="text-white">
                {skills.find(skill => skill.name === selectedSkill)?.years}
              </span>
            </span>
          </div>
        </div>
      )}
      <br />
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill.name}
            className={`text-sm px-3 py-1 rounded-full cursor-pointer transition-colors ${
              selectedSkill === skill.name 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
            onClick={() => onSkillClick(skill.name)}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {renderSkillPills(technicalSkills, 'Technical Skills', selectedTechnicalSkill, handleTechnicalSkillClick)}
      {renderSkillPills(softSkills, 'Soft Skills', selectedSoftSkill, handleSoftSkillClick)}
    </div>
  )
}

export default Skills;