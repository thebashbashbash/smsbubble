/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReactGA from 'react-ga';

import ReactJson from 'react-json-view';

import { elapsedYearsBetweenTwoDates, splitDateRangeToArray } from './helper';

import classes from './TraditionalResumePage.module.css';

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const JSONresume = {
  me: {
    fullName: 'Bashar Mengana',
    age: Number(31),
    email: 'contact@basharmengana.com',
    phoneNumber: Number('0046703794381'),
    address: 'Ringvägen 151A, 11631 Stockholm, Sweden',
    hasDrivingLicense: true,
    birtday: Number('19880126'),
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
      description:
        'Lead developer for both front and back end in a team of 5 (2 developers).'
        + ' We design a service that aims to 1) improve the driving behavior of truck drivers,'
        + ' 2) reduce wear and tear of vehicles, by encouraging them to improve their driving'
        + ' style with gamification. The team uses methods from the lean startup theory'
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
        automation: ['gitlab-ci', 'serverless framework', 'aws cloudformation', 'spring'],
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
      description:
        ' Researched and helped improve the onboarding process of a fleet management tool. I conducted interviews with'
        + ' uour users and salesmen; designed user stories, empathy maps, territory maps and personas in a team of four service designers.'
        + ' The team also studied how the fleet management tool was sold to find pain points and opportunities - both backstage and front stage - to '
        + " improve the sales process. The team did lightweight MVPs to evaluate concepts quickly and were not afraid to throw them in the bin if the idea didn't fly,",
    },
    productOwner: {
      company: 'Scania',
      position: 'Product owner',
      timePeriod: '2014/12 - 2016/08',
      totalWorkExperienceInYears: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2014/09 - 2016/06'),
      ),
      description:
        'Responsible for the product backlog of a fleet management iOS and Android app, and the team’s vision and mission. '
        + ' I worked closely with other product owners to help define the future of our product portfolio. My scrum master and I made'
        + ' sure the team was strong and healthy; and working with areas such as team happiness, resilience, and growth.',
    },
    trainee: {
      company: 'Scania',
      position: 'Trainee',
      timePeriod: '2013/07 - 2014/11',
      totalWorkExperienceInYears: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2013/07 - 2014/09'),
      ),
      description:
        'The trainee program gave me a comprehensive helicopter view of the operations of a big corporation. During my trainee year, '
        + "During my trainee year, I spent time in Scania's sales organization, at a distributor in Switzerland and Scania's R&D organization."
        + 'I learned about the logistics business, heavy-duty vehicles and the future of autonomous trucks.',
    },
  },

  skills: [],
  interests: [],
};

const traditionalResumePage = () => (
  <div className={classes.Container}>
    <ReactJson
      iconStyle="triangle"
      theme={{
        base00: 'rgb(245, 245, 245)', // Default Background
        base01: '#ddd', // Lighter Background (Used for status bars)
        base02: '#ddd', // Selection Background
        base03: '#444', // Comments, Invisibles, Line Highlighting
        base04: '#444', // Dark Foreground (Used for status bars)
        base05: '#444', // Default Foreground, Caret, Delimiters, Operators
        base06: '#444', // Light Foreground (Not often used)
        base07: 'rgb(15,15,15)', // Light Background (Not often used)
        base08: '#444', // Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
        base09: 'rgb(110,110,110)', // Integers, Boolean, Constants, XML Attributes, Markup Link Url
        base0A: '#444', // Classes, Markup Bold, Search Text Background
        base0B: 'rgb(0,168,107)', // Strings, Inherited Class, Markup Code, Diff Inserted
        base0C: '#444', // Support, Regular Expressions, Escape Characters, Markup Quotes
        base0D: 'rgb(110,110,110)', // Functions, Methods, Attribute IDs, Headings
        base0E: 'rgb(155,155,155)', // Keywords, Storage, Selector, Markup Italic, Diff Changed
        base0F: 'rgb(0,168,107)', // Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
      }}
      displayDataTypes={false}
      displayObjectSize={false}
      shouldCollapse={(field) => {
        // console.log(field);
        // return false;
        if (field.name === 'root') {
          return false;
        }
        if (field.name === 'me') {
          return false;
        }
        return true;
      }}
      enableClipboard={false}
      src={JSONresume}
    />
  </div>
);

export default traditionalResumePage;
