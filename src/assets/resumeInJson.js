import { elapsedYearsBetweenTwoDates, splitDateRangeToArray } from '../helpers/helpers';

const dynamicResumeInJson = {
  me: {
    fullName: 'Bashar Mengana',
    age: Number(31),
    email: 'contact@basharmengana.com',
    phoneNumber: Number('0046703794381'),
    address: 'Ringvägen 151A, 11631 Stockholm, Sweden',
    hasDrivingLicense: true,
    birthday: Number('19880126'),
    totalWorkExperienceInYears: elapsedYearsBetweenTwoDates(
      ...splitDateRangeToArray('2013/07 - Now'),
    ),
    spokenLanguages: ['🇸🇪(swedish)', '🇺🇸(english)', '🇮🇶(arabic)', '🇩🇪(german)'],
  },
  education: {
    school: {
      englishName: 'Royal Institute of Technology',
      swedishName: 'Kungliga Tekniska Högskolan',
    },
    degree: { englishName: 'Master of Science', swedishName: 'Civilingenjör' },
    city: 'Stockholm',
    isEducationCompleted: true,
    timePeriod: '2008/07 - 2013/07',
    totalEducationInYears: elapsedYearsBetweenTwoDates(
      ...splitDateRangeToArray('2008/07 - 2013/07'),
    ),
  },
  workExperience: {
    fullStackDeveloper: {
      company: 'Scania',
      position: 'Full stack developer',
      timePeriod: '2017/06 - Now',
      totalWorkExperienceInYears: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2017/06 - Now'),
      ),
      shortDescription:
        'Full stack developer in a team of 5 (2 developers), with a keen interest in the devops bits.'
        + ' We design a service that aims to 1) improve the driving behavior of truck drivers,'
        + ' 2) reduce wear and tear of vehicles, by encouraging drivers to engage in improving their driving'
        + ' through gamification. The team uses methods from the lean startup theory'
        + ' (e.g. build-measure-learn loop, MVP,  hypothesis-driven development) as our way of working.',
      keywords: {
        frontEnd: ['react.js', 'react-flow', 'react-redux', 'javascript/html', 'CSS/SASS'],
        backEnd: [
          'python',
          'java',
          'aws lambda, step functions',
          'aws dyanmodb, sqs, kms',
          'aws sns',
          'aws secret store',
          'aws s3',
          'aws cloudfront',
          'aws cloudlog',
          'monitoring',
        ],
        automation: [
          'gitlab-ci',
          'serverless framework',
          'aws cloudformation',
          'spring',
          'aws cloudlog',
        ],
        wayOfWorking: [
          'mvp (minimum viable product) development process',
          'lean startup / build-measure-learn loop',
          'hypothesis/risk driven development',
          'jira/trello',
        ],
      },
    },
    serviceDesigner: {
      company: 'Scania',
      position: 'Service designer',
      timePeriod: '2016/08 - 2017/06',
      totalWorkExperienceInYears: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2016/06 - 2017/06'),
      ),
      shortDescription:
        'Researched and helped improve the onboarding process of a fleet management tool. I conducted interviews with'
        + ' our users and salesmen; designed user stories, empathy maps, territory maps and personas in a team of 4 service designers.'
        + ' The team also studied how the fleet management tool was sold to find pain points and opportunities - both backstage and front stage - to'
        + " improve the sales process. The team did lightweight MVP's to evaluate concepts quickly and were not afraid to throw them in the bin if the idea didn't fly,",
      keywords: [
        'personas',
        'userStories',
        'empathyMaps',
        'territoryMaps',
        'doubleDiamondProcess',
        'storytelling',
        'businessModelCanvas(BMC)',
        'MVP',
        'journeyMapping',
        'userShadowing',
        'userDiaries/probes',
        'serviceBlueprint',
        'prototyping',
      ],
    },
    productOwner: {
      company: 'Scania',
      position: 'Product owner',
      timePeriod: '2014/12 - 2016/08',
      totalWorkExperienceInYears: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2014/09 - 2016/06'),
      ),
      shortDescription:
        'Responsible for the product backlog of a fleet management iOS and Android app, and the team’s vision and mission.'
        + ' I worked closely with other product owners to help define the future of our product portfolio. My scrum master and I made'
        + ' sure the team was strong and healthy; and worked with areas such as team happiness, resilience, and growth.',
      keywords: [
        'productBacklog',
        'scrum',
        'sprints',
        'googleSprints',
        'retrospectives',
        'jira',
        'automatedTesting',
        'featureToggling',
        'migrationFromMonolith',
        'sprintPlanning',
        'certifiedProductOwner',
        'certifiedScrum<aster',
        'scrumOfScrum',
        'productOwnerForum',
        'benchmarking',
        'competitorAnalysis',
        'GDPR',
      ],
    },
    trainee: {
      company: 'Scania',
      position: 'Trainee',
      timePeriod: '2013/07 - 2014/11',
      totalWorkExperienceInYears: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2013/07 - 2014/09'),
      ),
      shortDescription:
        'The trainee program gave me a comprehensive helicopter view of the operations of a big corporation.'
        + " During my trainee year, I spent time in Scania's sales organization, at a distributor in Switzerland and Scania's R&D organization."
        + ' I learned about the logistics business, heavy-duty vehicles and the future of autonomous trucks.',
      keywords: [
        'sales',
        'productDevelopment',
        'autonomousVehicles',
        'environmentallyFriendly',
        'bioFuel',
        'logisticsBusiness',
        'transportOperations',
        'truckManufacturing',
      ],
    },
  },
  skills: [
    'frontend',
    'backend',
    'devops',
    'aws',
    'serviceDesign',
    'hypothesisDrivenDevelopment',
    'productOwner',
    'scrumMaster',
    'graphicalDesign',
  ],
  interests: ['coding', 'plants', 'travelling', 'architecture', 'building', 'gym'],
};

export default dynamicResumeInJson;
