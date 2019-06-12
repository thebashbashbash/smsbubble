import React from 'react';
import ReactGA from 'react-ga';

import ReactJson from 'react-json-view';

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const JSONresume = {
  Me: {
    fullName: 'Bashar Mengana',
    age: Number(31),
    email: 'contact@basharmengana.com',
    phoneNumber: Number('0046703794381'),
    address: 'Ringvägen 151A, 11631 Stockholm, Sweden',
    hasDrivingLicense: true,
    birtday: Number('19880126'),
    spokenLanguages: ['swedish', 'english', 'arabic', 'german'],
  },
  education: {
    school_eng: 'Royal Institute of Technology',
    school_swe: 'Kungliga Tekniska Högskolan',
    degree_eng: 'Master of science',
    degree_swe: 'Civilingenjör',
    city: 'Stockholm',
    durationInYears: Number(5),
    completed: true,
  },
  workExperience: {
    fullStackDeveloper: {
      employer: 'Scania',
      title: 'Full stack developer',
      fromTo: '2017/10 - Now',
      details: 'bla bla bla',
    },
    serviceDesigner: {
      employer: 'Scania',
      title: 'Service designer',
      fromTo: '2016/11 - 2017/07',
      details: 'bla bla bla',
    },
    productOwner: {
      employer: 'Scania',
      title: 'Product owner',
      fromTo: '2015/01 - 2016/11',
      details: 'bla bla bla',
    },
    trainee: {
      employer: 'Scania',
      title: 'Trainee',
      fromTo: '2013/08 - 2014/12',
      details: 'bla bla bla',
    },
  },

  skills: 'Coding',
  interests: '',
};

const traditionalResumePage = () => (
  <div>
    <ReactJson
      iconStyle="triangle"
      theme="summerfruit:inverted"
      displayDataTypes={false}
      displayObjectSize={false}
      collapsed={2}
      src={JSONresume}
    />
  </div>
);
export default traditionalResumePage;
