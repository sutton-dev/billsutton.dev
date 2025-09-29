export interface Project {
  name: string;
  repo: string;
  url: string;
  description?: string; // Manual override - if provided, GitHub fetch is skipped
  technologies?: string[];
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    name: "billsutton.dev",
    repo: "sutton-dev/billsutton.dev",
    url: "https://github.com/sutton-dev/billsutton.dev",
    technologies: ["TypeScript", "React", "Next.js"],
    featured: true
    // description will be fetched from GitHub's description.md
  }
];

export default projectsData;