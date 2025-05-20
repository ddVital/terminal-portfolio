import toolzzLogo from '../../../assets/images/companies/toolzz.webp'
import sliceLogo from '../../../assets/images/companies/slice.webp'
import nomadLogo from '../../../assets/images/companies/nomad.webp'

export type JobType = {
  id: number;
  companyLogo: string;
  companyName: string;
  jobTitle: string;
  jobDescription: string;
  startDate: string;
  endDate: string | null;
  techstack: string[];
};

export const jobs: JobType[] = [
  {
    id: 1,
    companyLogo: toolzzLogo,
    companyName: 'Toolzz',
    jobTitle: 'jobs.toolzz.role',
    jobDescription: 'jobs.toolzz.description',
    startDate: '2024-10',
    endDate: null, // Present
    techstack: ['Ruby', 'Ruby on Rails', 'Tailwind', 'Vue.js', 'Sidekiq', 'Redis', 'PostgreSQL', 'Docker', 'AWS', 'Kubernetes', 'Terraform', 'Sentry'],
  },
  {
    id: 2,
    companyLogo: sliceLogo,
    companyName: 'slice',
    jobTitle: 'jobs.slice.role',
    jobDescription: 'jobs.slice.description',
    startDate: '2022-05',
    endDate: '2024-07',
    techstack: ['React.js', 'Typescript', 'Node.js', 'Django', 'PostgreSQL', 'Docker', 'Kubernetes', 'Jest', 'Playwright', 'AWS', 'Jira', 'Sentry'],
  },
  {
    id: 3,
    companyLogo: nomadLogo,
    companyName: 'Nomad',
    jobTitle: 'jobs.nomad.role',
    jobDescription: 'jobs.nomad.description',
    startDate: '2021-02',
    endDate: '2022-05',
    techstack: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Aurora RDS', 'AWS', 'Serverless', 'ECS', 'EKS', 'CI/CD', 'Agile Methodologies'],
  },
]