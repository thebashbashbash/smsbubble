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
        + ' We design a service that aims to 1) improve driving behavior of truck drivers,'
        + ' 2) reduce wear and tear of vehicles, by encouraging them to improve their'
        + ' driving style with gamification. The team uses methods from the lean startup'
        + ' theory (e.g. build-measure-learn loop, MVP, hypothesis driven development).',
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
        ...splitDateRangeToArray('2016/08 - 2017/06'),
      ),
      description:
        'Researched and helped improve the onboarding process of a fleet managment tool. I conduced interviews with'
        + ' users and salesmen; created user stories, terratory maps and personas in a team of 4 service designers. The team'
        + ' also studied how the fleet managment tool was sold in order to find pain points and oppertunities in a way that'
        + ' would help improve sales.',
    },
    productOwner: {
      company: 'Scania',
      position: 'Product owner',
      timePeriod: '2014/12 - 2016/08',
      totalWorkExperienceInYears: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2014/12 - 2016/08'),
      ),
      description:
        'Responsible for the backlog of a fleet managment iOS and Android app, and the team’s vision and mission.'
        + ' Worked closely with other product owners to help define the future of the product echosystem. Worked with scrum master'
        + ' to make sure team is strong and healthy – including capabilities, happiness, resilience and growth.',
    },
    trainee: {
      company: 'Scania',
      position: 'Trainee',
      timePeriod: '2013/07 - 2014/11',
      totalWorkExperienceInYears: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2013/07 - 2014/11'),
      ),
      description:
        'The programme aims to give you a comprehensive understanding across our diverse organisation. ',
    },
  },

  skills: 'Coding',
  interests: '',
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
