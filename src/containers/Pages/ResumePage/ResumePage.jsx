/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React from 'react';
import ReactGA from 'react-ga';

import ReactJson from 'react-json-view';
import Headroom from 'react-headroom';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import { decamelize, propName } from '../../../helpers/helpers';
import Aux from '../../../helpers/aux';

import DynamicResumeInJson from '../../../assets/resumeInJson';

import classes from './ResumePage.module.css';

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export const ModeType = {
  NerdResumeMode: 'nerdResumeMode',
  TraditionalMode: 'traditionalNightMode',
};

export const TraditionalResumeTheme = {
  Day: 'Day',
  Night: 'Night',
};

const nerdyResume = (
  <div className={classes.ContainerJsonView}>
    <ReactJson
      iconStyle="triangle"
      theme={{
        base00: 'rgb(245, 245, 245)', // Default Background
        base01: '#ddd', // Lighter Background (Used for status bars)
        base02: '#ddd', // Selection Background
        base03: '#444', // Comments, Invisible, Line Highlighting
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
        if (field.name === 'root') {
          return false;
        }
        if (field.name === 'aboutMe') {
          return false;
        }
        return true;
      }}
      enableClipboard={false}
      src={DynamicResumeInJson}
    />
  </div>
);

class NerdyResumePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: ModeType.TraditionalResumeDayMode,
      traditionalResumeTheme: TraditionalResumeTheme.Day,
    };
  }


  render() {
    const { mode, traditionalResumeTheme } = this.state;

    const traditionalResume = (
      <div className={traditionalResumeTheme === TraditionalResumeTheme.Day ? classes.ContainerTraditionalResumeDay : classes.ContainerTraditionalResumeNight}>
        <div>
          <h2>{decamelize(propName(() => DynamicResumeInJson.aboutMe))}</h2>
          <ul style={{ listStyleType: 'none', padding: '0px' }}>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.fullName))}</b>
    :
              {' '}
              {DynamicResumeInJson.aboutMe.fullName}
            </li>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.age))}</b>
    :
              {' '}
              {DynamicResumeInJson.aboutMe.age}
            </li>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.email))}</b>
    :
              {' '}
              {DynamicResumeInJson.aboutMe.email}
            </li>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.phoneNumber))}</b>
    : 00
              {DynamicResumeInJson.aboutMe.phoneNumber}
            </li>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.address))}</b>
    :
              {' '}
              {DynamicResumeInJson.aboutMe.address}
            </li>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.drivingLicense))}</b>
    :
              {' '}
              {DynamicResumeInJson.aboutMe.drivingLicense ? 'yes' : 'no'}
            </li>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.birthday))}</b>
    :
              {' '}
              {DynamicResumeInJson.aboutMe.birthday}
            </li>
            <li>
              <b>
                {decamelize(propName(() => DynamicResumeInJson.aboutMe.totalWorkExperienceInYears))}
              </b>
              :
              {' '}
              {DynamicResumeInJson.aboutMe.totalWorkExperienceInYears}
            </li>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.spokenLanguages))}</b>
    :
              {' '}
              {DynamicResumeInJson.aboutMe.spokenLanguages.join(', ')}
            </li>
          </ul>
        </div>
        <div>
          <h2>{decamelize(propName(() => DynamicResumeInJson.education))}</h2>
          <ul style={{ listStyleType: 'none', padding: '0px' }}>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.education.school))}</b>
    :
              {' '}
              {DynamicResumeInJson.education.school.englishName}
              {' '}
    /
              {' '}
              {DynamicResumeInJson.education.school.swedishName}
            </li>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.education.degree))}</b>
    :
              {' '}
              {DynamicResumeInJson.education.degree.englishName}
              {' '}
    /
              {' '}
              {DynamicResumeInJson.education.degree.swedishName}
            </li>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.education.city))}</b>
    :
              {' '}
              {DynamicResumeInJson.education.city}
            </li>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.education.educationCompleted))}</b>
    :
              {' '}
              {DynamicResumeInJson.education.educationCompleted ? 'yes' : 'no'}
            </li>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.education.timePeriod))}</b>
    :
              {' '}
              {DynamicResumeInJson.education.timePeriod}
            </li>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.education.totalEducationInYears))}</b>
    :
              {' '}
              {DynamicResumeInJson.education.totalEducationInYears}
            </li>
          </ul>
        </div>
        <div>
          <h2>{decamelize(propName(() => DynamicResumeInJson.workExperience))}</h2>
          <div>
            <h4>{decamelize(propName(() => DynamicResumeInJson.workExperience.fullStackDeveloper))}</h4>
            <ul style={{ listStyleType: 'none', padding: '0px' }}>
              <li>
                <b>
                  {decamelize(
                    propName(() => DynamicResumeInJson.workExperience.fullStackDeveloper.company),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.fullStackDeveloper.company}
              </li>
              <li>
                <b>
                  {decamelize(
                    propName(() => DynamicResumeInJson.workExperience.fullStackDeveloper.timePeriod),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.fullStackDeveloper.timePeriod}
              </li>
              <li>
                <b>
                  {decamelize(
                    propName(
                      () => DynamicResumeInJson.workExperience.fullStackDeveloper
                        .totalWorkExperienceInYears,
                    ),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.fullStackDeveloper.totalWorkExperienceInYears}
              </li>
              <li>
                <b>
                  <b>
                    {decamelize(
                      propName(
                        () => DynamicResumeInJson.workExperience.fullStackDeveloper.shortDescription,
                      ),
                    )}
                  </b>
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.fullStackDeveloper.shortDescription}
              </li>
              <li>
                <b>
                  {decamelize(
                    propName(() => DynamicResumeInJson.workExperience.fullStackDeveloper.keywords),
                  )}
                </b>
                :
                {' '}
                <ul style={{ listStyleType: 'none', padding: '10px', marginTop: '0px' }}>
                  <li style={{ marginTop: '0px' }}>
                    <b>
                      {decamelize(
                        propName(
                          () => DynamicResumeInJson.workExperience.fullStackDeveloper.keywords.frontEnd,
                        ),
                      )}
                    </b>
                    :
                    {' '}
                    {DynamicResumeInJson.workExperience.fullStackDeveloper.keywords.frontEnd
                      .map(keyword => decamelize(keyword))
                      .join(', ')}
                  </li>
                  <li style={{ marginTop: '0px' }}>
                    <b>
                      {decamelize(
                        propName(
                          () => DynamicResumeInJson.workExperience.fullStackDeveloper.keywords.backEnd,
                        ),
                      )}
                    </b>
                    :
                    {' '}
                    {DynamicResumeInJson.workExperience.fullStackDeveloper.keywords.backEnd
                      .map(keyword => decamelize(keyword))
                      .join(', ')}
                  </li>
                  <li style={{ marginTop: '0px' }}>
                    <b>
                      {decamelize(
                        propName(
                          () => DynamicResumeInJson.workExperience.fullStackDeveloper.keywords.automation,
                        ),
                      )}
                    </b>
                    :
                    {' '}
                    {DynamicResumeInJson.workExperience.fullStackDeveloper.keywords.automation
                      .map(keyword => decamelize(keyword))
                      .join(', ')}
                  </li>
                  <li style={{ marginTop: '0px' }}>
                    <b>
                      {decamelize(
                        propName(
                          () => DynamicResumeInJson.workExperience.fullStackDeveloper.keywords.wayOfWorking,
                        ),
                      )}
                    </b>
                    :
                    {' '}
                    {DynamicResumeInJson.workExperience.fullStackDeveloper.keywords.wayOfWorking
                      .map(keyword => decamelize(keyword))
                      .join(', ')}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h4>{decamelize(propName(() => DynamicResumeInJson.workExperience.serviceDesigner))}</h4>
            <ul style={{ listStyleType: 'none', padding: '0px' }}>
              <li>
                <b>
                  {decamelize(
                    propName(() => DynamicResumeInJson.workExperience.serviceDesigner.company),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.serviceDesigner.company}
              </li>
              <li>
                <b>
                  {decamelize(
                    propName(() => DynamicResumeInJson.workExperience.serviceDesigner.timePeriod),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.serviceDesigner.timePeriod}
              </li>
              <li>
                <b>
                  {decamelize(
                    propName(
                      () => DynamicResumeInJson.workExperience.serviceDesigner.totalWorkExperienceInYears,
                    ),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.serviceDesigner.totalWorkExperienceInYears}
              </li>
              <li>
                <b>
                  <b>
                    {decamelize(
                      propName(
                        () => DynamicResumeInJson.workExperience.serviceDesigner.shortDescription,
                      ),
                    )}
                  </b>
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.serviceDesigner.shortDescription}
              </li>
              <li style={{ marginTop: '0px' }}>
                <b>
                  {decamelize(
                    propName(() => DynamicResumeInJson.workExperience.serviceDesigner.keywords),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.serviceDesigner.keywords
                  .map(keyword => decamelize(keyword))
                  .join(', ')}
              </li>
            </ul>
          </div>
          <div>
            <h4>{decamelize(propName(() => DynamicResumeInJson.workExperience.productOwner))}</h4>
            <ul style={{ listStyleType: 'none', padding: '0px' }}>
              <li>
                <b>
                  {decamelize(propName(() => DynamicResumeInJson.workExperience.productOwner.company))}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.productOwner.company}
              </li>
              <li>
                <b>
                  {decamelize(
                    propName(() => DynamicResumeInJson.workExperience.productOwner.timePeriod),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.productOwner.timePeriod}
              </li>
              <li>
                <b>
                  {decamelize(
                    propName(
                      () => DynamicResumeInJson.workExperience.productOwner.totalWorkExperienceInYears,
                    ),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.productOwner.totalWorkExperienceInYears}
              </li>
              <li>
                <b>
                  <b>
                    {decamelize(
                      propName(() => DynamicResumeInJson.workExperience.productOwner.shortDescription),
                    )}
                  </b>
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.productOwner.shortDescription}
              </li>
              <li style={{ marginTop: '0px' }}>
                <b>
                  {decamelize(propName(() => DynamicResumeInJson.workExperience.productOwner.keywords))}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.productOwner.keywords
                  .map(keyword => decamelize(keyword))
                  .join(', ')}
              </li>
            </ul>
          </div>
          <div>
            <h4>{decamelize(propName(() => DynamicResumeInJson.workExperience.trainee))}</h4>
            <ul style={{ listStyleType: 'none', padding: '0px' }}>
              <li>
                <b>{decamelize(propName(() => DynamicResumeInJson.workExperience.trainee.company))}</b>
    :
                {' '}
                {DynamicResumeInJson.workExperience.trainee.company}
              </li>
              <li>
                <b>
                  {decamelize(propName(() => DynamicResumeInJson.workExperience.trainee.timePeriod))}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.trainee.timePeriod}
              </li>
              <li>
                <b>
                  {decamelize(
                    propName(
                      () => DynamicResumeInJson.workExperience.trainee.totalWorkExperienceInYears,
                    ),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.trainee.totalWorkExperienceInYears}
              </li>
              <li>
                <b>
                  <b>
                    {decamelize(
                      propName(() => DynamicResumeInJson.workExperience.trainee.shortDescription),
                    )}
                  </b>
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.trainee.shortDescription}
              </li>
              <li style={{ marginTop: '0px' }}>
                <b>{decamelize(propName(() => DynamicResumeInJson.workExperience.trainee.keywords))}</b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.trainee.keywords
                  .map(keyword => decamelize(keyword))
                  .join(', ')}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2>{decamelize(propName(() => DynamicResumeInJson.skills))}</h2>
          <ul style={{ listStyleType: 'none', padding: '0px' }}>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.skills))}</b>
    :
              {' '}
              {DynamicResumeInJson.skills.map(skill => decamelize(skill)).join(', ')}
            </li>
          </ul>
        </div>
        <div>
          <h2>{decamelize(propName(() => DynamicResumeInJson.interests))}</h2>
          <ul style={{ listStyleType: 'none', padding: '0px' }}>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.interests))}</b>
    :
              {' '}
              {DynamicResumeInJson.interests.map(interest => decamelize(interest)).join(', ')}
            </li>
          </ul>
        </div>
      </div>
    );


    return (
      <Aux>
        <Headroom>
          <div style={{
            display: 'flex', backgroundColor: mode === ModeType.NerdResumeMode ? 'rgb(245, 245, 245)' : traditionalResumeTheme === TraditionalResumeTheme.Day ? 'white' : '#212529', justifyContent: 'flex-end', padding: '10px',
          }}
          >
            <AwesomeButton
              style={{ margin: '5px' }}
              type="primary"
              onPress={() => {
                this.setState({ mode: ModeType.TraditionalMode, traditionalResumeTheme: TraditionalResumeTheme.Night });
              }}
            >
Night mode

            </AwesomeButton>
            <AwesomeButton
              style={{ margin: '5px' }}
              type="primary"
              // disabled={!(mode === ModeType.TraditionalMode && traditionalResumeTheme === TraditionalResumeTheme.Day)}
              onPress={() => {
                this.setState({ mode: ModeType.TraditionalDayMode, traditionalResumeTheme: TraditionalResumeTheme.Day });
              }}
            >
Day mode

            </AwesomeButton>
            <AwesomeButton
              style={{ margin: '5px' }}
              type="primary"
              onPress={() => {
                this.setState({ mode: ModeType.NerdResumeMode });
              }}
            >
Code mode

            </AwesomeButton>
          </div>
        </Headroom>
        <div>
          {mode === ModeType.NerdResumeMode ? nerdyResume
            : mode === ModeType.TraditionalResumeDayMode ? traditionalResume : traditionalResume}
        </div>
      </Aux>
    );
  }
}

export default NerdyResumePage;
