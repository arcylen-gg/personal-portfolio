export interface Project {
  title: string
  description: string
  tech: string[]
  url?: string
  github?: string
  duration?: string
  featured: boolean
  order: number
}

export const projects: Project[] = [
  {
    title: 'Inventory Management System with Multi-Warehouse Support',
    description: 'A custom inventory management platform supporting multiple warehouses, allowing businesses to track stock levels, manage product movement, and monitor inventory across locations.',
    tech: ['Laravel', 'Bootstrap', 'CSS', 'jQuery'],
    featured: false,
    order: 1,
  },
  {
    title: 'Property Listing Portal',
    description: 'A real estate portal similar to Lamudi where users can browse property listings and contact property owners directly.',
    tech: ['Laravel', 'Bootstrap', 'CSS', 'jQuery'],
    featured: false,
    order: 2,
  },
  {
    title: 'Ecommerce Frontend for POS System',
    description: 'Frontend ecommerce platform integrated with an existing POS system, allowing online product browsing and ordering.',
    tech: ['CodeIgniter', 'Bootstrap', 'CSS', 'jQuery'],
    url: 'http://www.palimexinc.com/',
    featured: true,
    order: 3,
  },
  {
    title: 'Ecommerce Platform with MLM Feature',
    description: 'An ecommerce platform integrated with multilevel marketing (MLM) for selling products and earning commissions through a referral network.',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
    featured: false,
    order: 4,
  },
  {
    title: 'Online Gambling Platform Maintenance',
    description: 'Maintenance and UI improvements for Europe-based gambling websites, including frontend updates and styling enhancements.',
    tech: ['Drupal', 'JavaScript ES6', 'CSS', 'Bootstrap'],
    featured: true,
    order: 5,
  },
  {
    title: 'Medical Research Website',
    description: 'A website for medical researchers to publish, share, and collaborate on research content.',
    tech: ['OctoberCMS', 'Bootstrap', 'SCSS', 'jQuery'],
    featured: false,
    order: 6,
  },
  {
    title: 'Academic Research Organization Website',
    description: 'Website serving scholars and professionals studying work and employment topics, including publications and resources.',
    tech: ['OctoberCMS', 'Bootstrap', 'SCSS', 'Stripe API'],
    featured: false,
    order: 7,
  },
  {
    title: 'Mental Health Monitoring Platform',
    description: 'Platform for healthcare professionals to monitor patient mood, activities, and location using mobile tracking and behavioral data.',
    tech: ['Vue.js', 'OctoberCMS', 'Vuetify', 'Bootstrap', 'Chart.js'],
    featured: false,
    order: 8,
  },
  {
    title: 'Fire Safety Audit Management System',
    description: 'Platform to record, manage, and track fire safety inspections and compliance audits.',
    tech: ['Vue.js', 'OctoberCMS', 'Quasar', 'SCSS'],
    featured: true,
    order: 9,
  },
  {
    title: 'Multilingual Patient Communication Tool',
    description: 'Platform to help healthcare staff communicate with non-English speaking patients using pre-translated phrases.',
    tech: ['Vue.js', 'WinterCMS', 'Vuetify'],
    featured: true,
    order: 10,
  },
  {
    title: 'Crypto Platform Account Management Tool',
    description: 'Frontend tool for users to manage their accounts and interact with services in a cryptocurrency platform.',
    tech: ['React.js', 'Bootstrap'],
    featured: true,
    order: 11,
  },
  {
    title: 'Charity Organization Website with Donations',
    description: 'Website for a charity organization featuring donation capabilities and content management.',
    tech: ['Bootstrap', 'SCSS', 'WordPress', 'Paypal API'],
    featured: false,
    order: 12,
  },
  {
    title: 'Steel Frames Company Website',
    description: 'Corporate website showcasing steel frame construction projects and company services.',
    tech: ['Bootstrap', 'SCSS', 'WordPress'],
    featured: false,
    order: 13,
  },
  {
    title: 'Industrial Engineering & Energy Systems Website',
    description: 'Corporate website presenting services and company information for an industrial engineering and energy systems firm.',
    tech: ['Bootstrap', 'SCSS', 'WordPress'],
    featured: false,
    order: 14,
  },
  {
    title: 'Spiritual Wellness & Personal Development Website',
    description: 'Website focused on spiritual wellness, personal growth, and educational resources.',
    tech: ['Bootstrap', 'SCSS', 'WinterCMS'],
    featured: false,
    order: 15,
  },
  {
    title: 'Industrial B2B CRM System',
    description: 'CRM for a packaging and processing machinery company that reads incoming emails, links them to the correct project or client, and calculates salesperson commissions.',
    tech: ['VtigerCRM', 'LESS'],
    featured: false,
    order: 16,
  },
  {
    title: 'Mobile App Backend for Anxiety Monitoring',
    description: 'Backend API that collects and stores user responses regarding anxiety levels for monitoring and analysis.',
    tech: ['WinterCMS', 'REST API'],
    featured: false,
    order: 17,
  },
  {
    title: 'Mobile App Backend for Trucking Company',
    description: 'Backend API supporting a mobile app used by a trucking company for construction services.',
    tech: ['WinterCMS', 'GraphQL'],
    featured: false,
    order: 18,
  },
  {
    title: 'Chicken Farm Monitoring Portal',
    description: 'Portal for monitoring operations and production data for a poultry farm business.',
    tech: ['Next.js', 'WinterCMS', 'TailwindCSS'],
    featured: false,
    order: 19,
  },
  {
    title: 'Property Listing Website with Third-Party API Integration',
    description: 'Property listing website fetching data from external APIs to provide up-to-date listings.',
    tech: ['WordPress', 'REST API'],
    featured: false,
    order: 20,
  },
  {
    title: 'Property Builders Corporate Website',
    description: 'Corporate website for a property development and construction company.',
    tech: ['Next.js', 'WordPress', 'TailwindCSS'],
    featured: false,
    order: 21,
  },
  {
    title: 'Tunnel Construction Company Website',
    description: 'Corporate website built with OctoberCMS including a custom plugin for pages with customizable sections, headers, and footers.',
    tech: ['OctoberCMS', 'Bootstrap', 'SCSS'],
    featured: false,
    order: 22,
  },
  {
    title: 'Industrial Safety Risk Assessment Platform',
    description: 'Platform for managing industrial safety risk assessments, including web portal, mobile APIs, and payment integration.',
    tech: ['OctoberCMS', 'REST API', 'Stripe API', 'SCSS', 'Bootstrap'],
    featured: true,
    order: 23,
  },
  {
    title: 'Custom Headless CMS',
    description: 'Custom CMS built for internal use, providing content management and API capabilities.',
    tech: ['Nuxt.js', 'Prisma', 'MySQL', 'TailwindCSS'],
    featured: false,
    order: 24,
  },
  {
    title: 'Third-Party API Integrations',
    description: 'Multiple tasks implementing third-party API integrations for various platforms and projects.',
    tech: ['REST API', 'GraphQL', 'JavaScript', 'PHP'],
    featured: false,
    order: 25,
  },
]

export const featuredProjects = projects.filter(p => p.featured)