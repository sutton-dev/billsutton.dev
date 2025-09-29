'use client';

import { projectsData, Project } from '../data/projects';
import { useState, useEffect } from 'react';

async function fetchProjectDescription(repo: string): Promise<string> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${repo}/contents/description.md`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      return 'No description available.';
    }

    const data = await response.json();
    const content = atob(data.content);
    return content;
  } catch (error) {
    console.error(`Failed to fetch description for ${repo}:`, error);
    return 'No description available.';
  }
}

function ProjectCard({ project }: { project: Project }) {
  const [description, setDescription] = useState<string>(
    project.description || 'Loading description...'
  );

  useEffect(() => {
    // Only fetch if no manual description is provided
    if (!project.description) {
      fetchProjectDescription(project.repo).then(setDescription);
    }
  }, [project.repo, project.description]);

  return (
    <div className="border border-gray-700 rounded-lg p-4 md:p-6 hover:shadow-lg hover:shadow-gray-800/50 transition-shadow bg-gray-900">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg md:text-xl font-semibold">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            {project.name}
          </a>
        </h3>
        {project.featured && (
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Featured
          </span>
        )}
      </div>

      <div className="text-gray-300 mb-4">
        <p className="text-sm whitespace-pre-wrap">{description}</p>
      </div>

      {project.technologies && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <p className="text-sm text-gray-400">
        Repository: {project.repo}
      </p>
    </div>
  );
}

export default function Projects() {
  // Separate featured and regular projects
  const featuredProjects = projectsData.filter(project => project.featured);
  const regularProjects = projectsData.filter(project => !project.featured);

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">

      {featuredProjects.length > 0 && (
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">Featured Projects</h2>
          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={`featured-${index}`} project={project} />
            ))}
          </div>
        </div>
      )}

      {regularProjects.length > 0 && (
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">All Projects</h2>
          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularProjects.map((project, index) => (
              <ProjectCard key={`regular-${index}`} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
