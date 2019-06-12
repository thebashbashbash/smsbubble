import React from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const errorPage = () => <div>404 error - the page you seek is out of reach!</div>;
export default errorPage;
