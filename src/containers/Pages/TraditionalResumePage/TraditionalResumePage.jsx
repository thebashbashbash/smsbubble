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
        'Lead developer designing both front and back end in a team of 5 (2 developers).'
        + ' The team designs a service that aims to improve driving behavior of drivers'
        + ' and wear and tear of vehicles by encouraging drivers in improving their driving style'
        + ' through gamification. The team utilizes methods from the lean startup theory'
        + ' (e.g. build measure learn, MVP, hypothesis driven development).',
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
        automation: ['gitlab-ci', 'serverless framework', 'aws cloudformation'],
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
      description: 'bla bla bla',
    },
    productOwner: {
      company: 'Scania',
      position: 'Product owner',
      timePeriod: '2014/12 - 2016/08',
      totalWorkExperienceInYears: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2014/12 - 2016/08'),
      ),
      description: 'bla bla bla',
    },
    trainee: {
      company: 'Scania',
      position: 'Trainee',
      timePeriod: '2013/07 - 2014/11',
      totalWorkExperienceInYears: elapsedYearsBetweenTwoDates(
        ...splitDateRangeToArray('2013/07 - 2014/11'),
      ),
      description: 'bla bla bla',
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
        base07: 'rgb(20,20,20)', // Light Background (Not often used)
        base08: '#444', // Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
        base09: 'rgb(105,105,105)', // Integers, Boolean, Constants, XML Attributes, Markup Link Url
        base0A: '#444', // Classes, Markup Bold, Search Text Background
        base0B: 'rgb(4,165,246)', // Strings, Inherited Class, Markup Code, Diff Inserted
        base0C: '#444', // Support, Regular Expressions, Escape Characters, Markup Quotes
        base0D: 'rgb(120,120,120)', // Functions, Methods, Attribute IDs, Headings
        base0E: 'rgb(150,150,150)', // Keywords, Storage, Selector, Markup Italic, Diff Changed
        base0F: 'rgb(4,165,246)', // Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
      }}
      displayDataTypes={false}
      displayObjectSize={false}
      shouldCollapse={(field) => {
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
