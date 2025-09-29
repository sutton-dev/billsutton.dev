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
    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-semibold">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
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

      <div className="text-gray-600 mb-4">
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

      <p className="text-sm text-gray-500">
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
    <div className="container mx-auto px-4 py-8">

      {featuredProjects.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={`featured-${index}`} project={project} />
            ))}
          </div>
        </div>
      )}

      {regularProjects.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">All Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularProjects.map((project, index) => (
              <ProjectCard key={`regular-${index}`} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
