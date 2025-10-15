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
    featured: false
    // description will be fetched from GitHub's description.md
  },
  {
    name: "query-cache",
    repo: "sutton-dev/query-cache",
    url: "https://github.com/sutton-dev/query-cache",
    technologies: ["Apex", "Salesforce", "SOQL", "SOQL Query Optimizer"],
    featured: false
  }
];

export default projectsData;