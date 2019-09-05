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
    totalWorkExperience: elapsedYearsBetweenTwoDates(
      ...splitDateRangeToArray('2013/07 - Now'),
    ),
    elevatorPitch: 'A truly full stack web developer with a great team spirit and an unsaturated'
    + ' hunger for service design, devops, team development and AI.',
    spokenLanguages: ['🇸🇪(swedish)', '🇺🇸(english)', '🇮🇶(arabic)', '🇩🇪(german)'],
  },
  interests: ['coding', 'plants', 'travelling', 'architecture', 'art', 'landscapes', 'buildingThings', 'ai', 'gym'],
  skills: {
    frontEnd: ['html/javascript/css(bem)/typescript', 'scss', 'design systems(material-ui/semantic-ui)', 'build tools', 'react16+', 'angular', 'testing (jest/enzyme)'],
    backEnd: ['python', 'node.js/express', 'package manager', 'aws services', 'rest', 'authentication/authorization', 'nosql (dynamodb)', 'sql (postgresql)', 'unit/integration testing'],
    devops: ['gitlab-ci', 'serverless framework', 'terraform', 'cloudia.js', 'aws cloudformation', 'docker', 'kubernetes', '~linux', 'terminal', 'aws', '~heroku', 'infrastructure monitoring (datadog)'],
    serviceDesign: ['user journey', 'personas', 'double diamond process', 'serviceBlueprint', 'userResearch', 'empathy/territory maps'],
    wayOfWorking: ['build-measure-learn loop', 'lean startup', 'scrum/sprint', 'hypothesis-driven development', 'team development'],
  },
  education: {
    school: {
      englishName: 'Royal Institute of Technology',
      swedishName: 'Kungliga Tekniska Högskolan',
    },
    degree: { englishName: 'Master of Science', swedishName: 'Civilingenjör' },
    city: 'Stockholm',
    educationCompleted: true,
    timePeriod: '2008/07 - 2013/07',
    totalEducation: elapsedYearsBetweenTwoDates(
      ...splitDateRangeToArray('2008/07 - 2013/07'),
    ),
  },
  workExperience: {
    fullStackWebDeveloper: {
      company: 'Scania',
      timePeriod: '2017/03 - Now',
      totalWorkExperience: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2017/03 - Now'),
      ),
      shortDescription:
        'Full stack web developer in a small team of five, with  additional responsibilities in user research and devops.'
        + ' The team creates a service that aims to 1) improve driving behavior of truck drivers,'
        + ' 2) reduce wear and tear of vehicles, by engaging drivers in improving their driving style'
        + ' through gamification. We use methods from the lean startup theory'
        + ' (e.g. build-measure-learn loop, MVP,  hypothesis-driven development).',
      stack: {
        frontEnd: ['react16+', 'angular', 'typescript', 'react-redux', 'javascript/html/css(bem)', 'scss', 'jest/enzyme', 'material-ui'],
        backEnd: [
          'python',
          'java',
          'aws lambda, step functions',
          'aws dyanmodb, aws sqs, aws kms',
          'aws sns',
          'aws secret store',
          'aws s3',
          'aws cloudfront',
          'aws cloudlog',
          'monitoring',
          'node.js/express',
        ],
        devops: [
          'gitlab-ci',
          'serverless framework/terraform',
          'aws cloudformation',
          'cloudia.js',
          'datadog',
          'aws cloudlog',
        ],
        wayOfWorking: [
          'mvp (minimum viable product) development process',
          'lean startup / build-measure-learn loop',
          'hypothesis-driven development',
          'jira/trello/sprint',
        ],
      },
    },
    serviceDesigner: {
      company: 'Scania',
      timePeriod: '2016/04 - 2017/03',
      totalWorkExperience: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2016/04 - 2017/03'),
      ),
      shortDescription:
        'Researched and helped improve the onboarding process of a fleet management tool. I conducted interviews with'
        + ' our users and salesmen; designed user stories, empathy maps, territory maps and personas in a team of four service designers.'
        + " We also studied how the fleet management tool was sold to find pain points and opportunities, and did lightweight MVP's"
        + " to evaluate concepts quickly - and we weren't afraid to throw ideas in the bin if they didn't fly.",
      stack: [
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
      timePeriod: '2014/09 - 2016/04',
      totalWorkExperience: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2014/09 - 2016/04'),
      ),
      shortDescription:
        'Responsible for the product backlog of a fleet management - iOS and Android - app, and the team’s vision and mission.'
        + ' I worked closely with other product owners to help define the future of our product portfolio. My scrum master and I made'
        + ' sure the team was healthy by working in areas such as team happiness, resilience, and growth.',
      stack: [
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
    managementTrainee: {
      company: 'Scania',
      timePeriod: '2013/07 - 2014/09',
      totalWorkExperience: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2013/07 - 2014/09'),
      ),
      shortDescription:
        'The management trainee program gave me a comprehensive view of the operations of a big corporation.'
        + " During my trainee year, I spent time in Scania's sales organization, at a distributor in Switzerland and Scania's R&D organization."
        + ' I learned about the logistics business and the future of autonomous trucks.',
      stack: [
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
};

export default dynamicResumeInJson;
