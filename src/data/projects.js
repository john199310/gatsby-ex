import Insights from './../assets/images/insights.png';
import LazyFields from './../assets/images/lazy-fields.png';
import HealthCheck from './../assets/images/health-check.png';
import ComingSoon from './../assets/images/coming-soon.png';
import Yeoman from './../assets/images/yeoman.png';

const projects =  [
  {
    title: 'Insights',
    website: 'https://github.com/snurby7/insights',
    chips: ['React', 'TypeScript', 'OvernightJS', 'MongoDB'],
    description: `
      I use YNAB for all my budgetting needs, but I was missing some data I wanted to get to easier. Using their API I was able to grab all the data they have and do my own processing on it.
    `,
    image: Insights,
    imageTag: 'insights',
  },
  {
    title: 'Coffee Rates',
    website: 'https://github.com/snurby7/coffee-rates',
    chips: ['React', 'TypeScript', 'OvernightJs', 'Jest'],
    description: `
      I love coffee! Which means I buy a new bag about once a week. This lead me to realize a problem, I had no way of knowing - without digging around my budget - where my favorite coffee was from.
      This lead me to starting this project. I thought there could be an 'untappd' style application for coffee and I'd love to create one.
    `,
    image: ComingSoon,
    imageTag: 'comingSoon',
  },
  {
    title: 'Yo Nwps - Internal Tool',
    chips: ['yeoman'],
    description: `
      'yo nwps' was my attempt at bringing the Angular CLI to a project that had not been upgraded yet. With this project I was hoping to alleviate a lot of my own pain points.
      it's like building a car with no engine, it looks good on the surface, but when it gets fire it up it's not moving or making a sound! Cue frustration!
      The future for this project is a set on Angular CLI Schematics!
    `,
    image: Yeoman,
    imageTag: 'yeoman',
  },
  {
    title: 'Health Check - Internal Tool',
    chips: ['Angular', 'TFS API'],
    description: `
      between a scheduled TFS build process that wasn't always the most clear. So, with the help of a few co-workers, we developed an Angular CLI project (who doesn't love live reloads)
      to help us address the problem. The site evolved into a few rows of cards display key metrics at a glance to show the associated builds for Development and for QA testing.
      Now, this site can be found bookmarked across the team and even occasionally displayed on a TV or two around the office!
    `,
    image: HealthCheck,
    imageTag: 'healthCheck',
  },
  {
    title: 'Lazy Fields - Internal Tool',
    chips: ['Angular', 'VSTS'],
    description: `
      Lazy Fields, as the name implies, it's to help a lazy developer - we're all lazy, we just don't want to admit it - create fields.
      All I had to do was fill out a form and I was able to go from some SQL to a field and spit that out and just copy and paste that into my file and I was on my way.
      This was helpful in covering the last mile that 'yo nwps' just couldn't cover for me.
    `,
    image: LazyFields,
    imageTag: 'lazyFields',
  },
  {
    title: 'Tool Box - Internal Tool',
    website: '',
    chips: ['Electron', 'Angular'],
    description: `
      This one is an ongoing project for me. I noticed a theme across the tools that are marked 'Internal Tool', they're all separate projects!
      People aren't a fan of having to update seperate projects. So, I'm currently in the stages of bringing all of these tools into one Electron Application.
      I also have the ability to put more tools in the project and then everyone can have them from one application instead of many!
    `,
    image: ComingSoon,
    imageTag: 'comingSoon',
  },
];

export default projects;
