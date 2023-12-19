import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// eslint-disable-next-line import/no-named-as-default
import SMSResumePage from "./containers/Pages/SMSResumePage/SMSResumePage";
// import ResumePage from './containers/Pages/ResumePage/ResumePage';
import ProjectsPage from "./containers/Pages/ProjectsPage/ProjectsPage";
// import ILoveYou from './containers/Pages/Funny/ILoveYou/ILoveYou';
import ErrorPage from "./containers/Pages/ErrorPage/ErrorPage";

const main = () => <BrowserRouter>
    <Switch>
        <Route path="/" exact component={SMSResumePage} />
        {/* <Route path="/resume" exact component={ResumePage} /> */}
        {/* <Route path="/smsresume" exact component={SMSResumePage} /> */}
        <Route path="/projects" exact component={ProjectsPage} />
        <Route path="/iloveyou" exact component={ILoveYou} /> 
        <Route component={ErrorPage} />
    </Switch>
</BrowserRouter>;

export default main;

