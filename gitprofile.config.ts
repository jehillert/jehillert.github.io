// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jehillert', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   */
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['timelockr-archive'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Modicum Timelockr',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl: 'https://via.placeholder.com/250x250',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'johnhillert',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: 'jehillert',
    dev: '',
    stackoverflow: '8257006/jehillert',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'john.hillert@gmail.com',
  },
  resume: {
    fileUrl: '/resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'React Native',
    'React.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Redux.js',
    'MobX',
    'Bitrise',
    'Firebase',
    'Webpack',
    'Styled Components',
    'CSS/HTML',
    'Material UI',
    'Express.js',
    'Axios.js',
    'PostgreSQL',
    'git',
  ],
  experiences: [
    {
      company: 'Modicum Apps',
      position: 'Software Developer',
      from: 'June 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Divisions Maintenance Group',
      position: 'Mobile Engineer II',
      from: 'June 2021',
      to: 'April 2023',
      companyLink: 'https://divisionsmg.com/',
    },
    {
      company: 'Cognizant Technology Services',
      position: 'Associate (Software Development)',
      from: 'March 2020',
      to: 'May 2021',
      companyLink: 'https://www.cognizant.com/us/en',
    },
    {
      company: 'Headstorm',
      position: 'Software Consultant',
      from: 'Sept 2019',
      to: 'Jan 2020',
      companyLink: 'https://headstorm.com/',
    },
  ],
  certifications: [
    {
      name: 'Registered Patent Attorney',
      body: 'US Patent And Trademark Office',
      year: 'December 2009',
      link: 'https://oedci.uspto.gov/OEDCI/practitionerSearchEntry',
    },
    {
      name: 'Registered Patent Attorney',
      body: 'US Patent And Trademark Office',
      year: 'April 2009',
      link: 'https://oedci.uspto.gov/OEDCI/practitionerSearchEntry',
    },
  ],
  educations: [
    {
      institution: 'Colorado School of Mines',
      degree: 'B.S., Chemical Engineering',
      from: '1999',
      to: '2003',
    },
    {
      institution: 'Florida State University College of Law',
      degree: 'J.D., Law',
      from: '2006',
      to: '2009',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'jehillert.medium.com', // medium | dev
    username: 'jehillert', // to hide blog section, keep it empty
    limit: 10, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-KFVLFTVZYN', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord', // 'wireframe'

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'corporate',
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
