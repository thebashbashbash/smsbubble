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
  education: 'KTH',
  workExperience: 'Scania',
  skills: 'Coding',
  interests: '',
};

const traditionalResumePage = () => (
  <div>
    <ReactJson
      iconStyle="triangle"
      theme="grayscale:inverted"
      displayDataTypes={false}
      displayObjectSize={false}
      collapsed={2}
      src={JSONresume}
    />
  </div>
);
export default traditionalResumePage;
