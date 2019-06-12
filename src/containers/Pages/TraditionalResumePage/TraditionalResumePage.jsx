import React from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const traditionalResumePage = () => <div>Bashar mengana TraditionalResumePage</div>;
export default traditionalResumePage;
