import { Injectable } from '@angular/core';
import { Certification, Education, Experience, SkillGroup } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly experiences: Experience[] = [
    {
      squad: 'Analytics Tribe',
      description: 'Started with modernizing the core PMS, rebuilding and migrating screens in Angular, TypeScript, and SCSS. Got deep into component architecture and understanding the product at its foundation.',
      tags: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      squad: 'EGA Squad',
      description: 'Worked on a cross-functional referral system spanning the full stack — Angular on the frontend, .NET and SQL/MySQL on the backend, with Azure, Argo, and Octopus Deploy handling infra and deployments.',
      tags: ['Angular', '.NET', 'SQL', 'MySQL', 'Azure', 'Argo', 'Octopus Deploy']
    },
    {
      squad: 'Referral Module',
      description: 'Independently designed and built a referral module as a standalone micro frontend. Learned MFE architecture from scratch, integrated it with the existing monolith, and owned its deployment pipeline end to end.',
      tags: ['Micro Frontends', 'Angular', '.NET', 'MFE Architecture'],
      badge: 'solo'
    },
    {
      squad: 'Claims & Insurance',
      description: 'Worked on the eligibility section, gaining exposure to insurance workflows and backend data handling — a domain with its own complexity and compliance considerations.',
      tags: ['Insurance Eligibility', '.NET', 'SQL']
    },
    {
      squad: 'IDP System',
      description: 'Contributed to the identity provider system with a plugin architecture for supporting third-party OAuth 2.0 login integrations — touching auth flows, security, and extensibility design.',
      tags: ['OAuth 2.0', 'Identity Provider', 'Plugin Architecture', 'C#']
    },
    {
      squad: 'Ortho Squad',
      description: 'Currently contributing to ortho-specific practice management features — working on domain-specific workflows for orthodontic practices built on top of CareStack\'s core platform.',
      tags: ['Angular', '.NET', 'PMS'],
      badge: 'current'
    }
  ];

  readonly skillGroups: SkillGroup[] = [
    { category: 'Frontend',        icon: 'code',     skills: ['Angular', 'TypeScript', 'JavaScript', 'SCSS', 'Micro Frontends (MFE)'] },
    { category: 'Backend',         icon: 'monitor',  skills: ['.NET', 'C#', 'REST APIs'] },
    { category: 'Database',        icon: 'database', skills: ['SQL', 'MySQL', 'Azure Blob Storage'] },
    { category: 'Cloud & DevOps',  icon: 'cloud',    skills: ['Azure', 'Argo', 'Octopus Deploy', 'Git', 'Microservices', 'Deployments'] },
    { category: 'Auth & Security', icon: 'lock',     skills: ['OAuth 2.0', 'Information Security', 'Cloud Technology'] }
  ];

  readonly education: Education = {
    degree: 'B.Tech — Cloud Technology and Information Security',
    institution: 'Jain (Deemed-to-be University)',
    year: '2019 – 2023'
  };

  readonly certifications: Certification[] = [
    { name: 'TypeScript Essential Training', issuer: 'LinkedIn Learning', date: 'Apr 2025' }
  ];

  readonly currentYear: number = new Date().getFullYear();
}
