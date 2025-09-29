export interface Role {
  title: string;
  startYear: string;
  endYear: string;
  description: string;
  responsibilities: string;
  achievements: string;
}

export interface Experience {
  companyLogo: string;
  company: string;
  roles: Role[];
}

export const experienceData: Experience[] = [
  {
    companyLogo: "/images/coinbase.png",
    company: "Coinbase Inc.",
    roles: [
      {
        title: "Senior Salesforce Developer",
        startYear: "2022",
        endYear: "2025",
        description: "Drove developer productivity and platform stability for 50+ Salesforce developers with 30-60 on-demand deployments weekly.",
        responsibilities: "CI/CD Pipeline Optimization, Release Management, System Health Monitoring, Platform Architecture, Compliance Implementation",
        achievements: "Reduced deployment times by 90% (from 2-3 hours to 12-20 minutes) through domain-based packaging strategy. Created GitHub Actions workflows for automated sensitive change detection. Built comprehensive monitoring infrastructure using Splunk and DataDog. Improved case object insertion performance by 125% through Flow refactoring to optimized Apex triggers. Engineered reusable package architecture using virtual base classes for multi-org support."
      }
    ]
  },
  {
    companyLogo: "/images/ACV.png",
    company: "ACV Auctions",
    roles: [
      {
        title: "Engineering Manager",
        startYear: "2021",
        endYear: "2022",
        description: "Led team of 3-4 developers focused on maturing release processes and establishing enterprise-grade deployment practices.",
        responsibilities: "Team Leadership, Release Process Maturation, Enterprise CI/CD Implementation, Developer Mentoring, Platform Health Monitoring",
        achievements: "Spearheaded evaluation and implementation of Copado as enterprise CI/CD solution. Established comprehensive testing frameworks using FFLIB patterns. Recruited, interviewed, and mentored junior developers and interns. Architected platform health monitoring and supported CDC Event Bus implementation for real-time data synchronization."
      },
      {
        title: "Lead Senior Salesforce Developer",
        startYear: "2018",
        endYear: "2021",
        description: "Technical lead responsible for all business application development and architectural decisions for high-growth automotive marketplace.",
        responsibilities: "Technical Leadership, Architecture Design, Code Reviews, Business Application Development",
        achievements: "Served as technical lead for 25 developers with 20-30 weekly deployments. Established development best practices and reduced bug rates by 50%. Built reusable test helper classes for uniform test data generation."
      }
    ]
  },
  {
    companyLogo: "/images/huron.jpg",
    company: "Huron Consulting Group",
    roles: [
      {
        title: "Senior Technical Consultant",
        startYear: "2015",
        endYear: "2018",
        description: "Delivered end-to-end Salesforce solutions as technical lead and architect across Automotive, Healthcare, Manufacturing, and eCommerce industries.",
        responsibilities: "Architectural Design, Technical Development, Business Analysis, Project Management, Client Relationship Management",
        achievements: "Led architectural design and technical development for multiple concurrent client projects. Served in versatile roles including Business Analyst, Project Manager, Technical Architect, and Senior Developer. Built integrations, custom applications, and platform extensions solving critical business challenges for enterprise clients. Collaborated with C-level executives and business stakeholders to define technical requirements and solution approaches."
      }
    ]
  },
  {
    companyLogo: "/images/cloud62.jpg",
    company: "Cloud62",
    roles: [
      {
        title: "Technical Consultant",
        startYear: "2013",
        endYear: "2015",
        description: "Delivered end-to-end Salesforce solutions as technical lead and architect across multiple industries, helping scale the company from startup to acquisition.",
        responsibilities: "Solution Architecture, Technical Implementation, Client Onboarding, Integration Development, Custom Application Development",
        achievements: "Started as the 20th employee and helped scale to 50 employees before acquisition by Huron Consulting Group in 2015. Assisted with migration from startup to corporate culture during acquisition. Delivered over 40 different implementation go-lives across various industries."
      }
    ]
  }
];

export default experienceData;