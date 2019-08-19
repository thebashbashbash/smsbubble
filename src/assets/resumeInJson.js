import { elapsedYearsBetweenTwoDates, splitDateRangeToArray } from '../helpers/helpers';

const dynamicResumeInJson = {
  aboutMe: {
    fullName: 'Bashar Mengana',
    age: Number(31),
    email: 'contact@basharmengana.com',
    home: 'Stockholm, Sweden',
    phoneNumber: Number('0046703794381'),
    address: 'Ringvägen 151A, 11631 Stockholm, Sweden',
    drivingLicense: true,
    birthday: Number('19880126'),
    totalWorkExperienceInYears: elapsedYearsBetweenTwoDates(
      ...splitDateRangeToArray('2013/07 - Now'),
    ),
    elevatorPitch: 'A truly full stack web developer with a great team sprit and an unsaturated'
    + ' hunger for service design, dev ops, team development and AI.',
    spokenLanguages: ['🇸🇪(swedish)', '🇺🇸(english)', '🇮🇶(arabic)', '🇩🇪(german)'],
  },
  interests: ['coding', 'plants', 'travelling', 'architecture', 'landscapes', 'diy', 'AI', 'gym'],
  education: {
    school: {
      englishName: 'Royal Institute of Technology',
      swedishName: 'Kungliga Tekniska Högskolan',
    },
    degree: { englishName: 'Master of Science', swedishName: 'Civilingenjör' },
    city: 'Stockholm',
    educationCompleted: true,
    timePeriod: '2008/07 - 2013/07',
    totalEducationInYears: elapsedYearsBetweenTwoDates(
      ...splitDateRangeToArray('2008/07 - 2013/07'),
    ),
  },
  workExperience: {
    fullStackWebDeveloper: {
      company: 'Scania',
      timePeriod: '2017/06 - Now',
      totalWorkExperienceInYears: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2017/06 - Now'),
      ),
      shortDescription:
        'Full stack web developer in a small team of five, with  additional responsibilities in user research and devops.'
        + ' The team creates a service that aims to 1) improve driving behavior of truck drivers,'
        + ' 2) reduce wear and tear of vehicles, by engaging drivers in improving their driving style'
        + ' through gamification. We use methods from the lean startup theory'
        + ' (e.g. build-measure-learn loop, MVP,  hypothesis-driven development).',
      keywords: {
        frontEnd: ['react.js', 'typescript', 'react-redux', 'javascript/html', 'css/sass'],
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
      timePeriod: '2016/08 - 2017/06',
      totalWorkExperienceInYears: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2016/06 - 2017/06'),
      ),
      shortDescription:
        'Researched and helped improve the onboarding process of a fleet management tool. I conducted interviews with'
        + ' our users and salesmen; designed user stories, empathy maps, territory maps and personas in a team of four service designers.'
        + " We also studied how the fleet management tool was sold to find pain points and opportunities, and did lightweight MVP's"
        + " to evaluate concepts quickly - and we weren't afraid to throw ideas in the bin if they didn't fly.",
      keywords: [
        'personas',
        'userStories',
        'empathyMaps',
        'territoryMaps',
        'doubleDiamondProcess',
        'storytelling',
        'businessModelCanvas(bmc)',
        'mvp(minimum viable product)',
        'journeyMapping',
        'userShadowing',
        'userDiaries/probes',
        'serviceBlueprint',
        'prototyping',
      ],
    },
    productOwner: {
      company: 'Scania',
      timePeriod: '2014/12 - 2016/08',
      totalWorkExperienceInYears: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2014/09 - 2016/06'),
      ),
      shortDescription:
        'Responsible for the product backlog of a fleet management - iOS and Android - app, and the team’s vision and mission.'
        + ' I worked closely with other product owners to help define the future of our product portfolio. My scrum master and I made'
        + ' sure the team was healthy by working in areas such as team happiness, resilience, and growth.',
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
        'certifiedScrumaster',
        'scrumOfScrum',
        'productOwnerForum',
        'benchmarking',
        'competitorAnalysis',
        'gdpr',
      ],
    },
    trainee: {
      company: 'Scania',
      timePeriod: '2013/07 - 2014/11',
      totalWorkExperienceInYears: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2013/07 - 2014/09'),
      ),
      shortDescription:
        'The trainee program gave me a comprehensive view of the operations of a big corporation.'
        + " During my trainee year, I spent time in Scania's sales organization, at a distributor in Switzerland and Scania's R&D organization."
        + ' I learned about the logistics business and the future of autonomous trucks.',
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
};

export default dynamicResumeInJson;
