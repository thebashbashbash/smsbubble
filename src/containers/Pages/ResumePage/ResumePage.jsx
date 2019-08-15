/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import ReactGA from 'react-ga';

import ReactJson from 'react-json-view';
import Headroom from 'react-headroom';

import HighlightIcon from '@material-ui/icons/Highlight';
import HighlightOutlinedIcon from '@material-ui/icons/HighlightOutlined';

import CodeIcon from '@material-ui/icons/Code';

import TextSMSIcon from '@material-ui/icons/ChatBubble';
import TextSMSOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';

import DescriptionIcon from '@material-ui/icons/Description';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

import {
  decamelize, propName, isDayTime, combineClasses,
} from '../../../helpers/helpers';
import Aux from '../../../helpers/aux';
import ToggleIconButton from '../../IconButton/ToggleIconButton';

import DynamicResumeInJson from '../../../assets/resumeInJson';

import classes from './ResumePage.module.css';

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export const ModeType = {
  NerdResumeMode: 'nerdResumeMode',
  TraditionalResumeMode: 'traditionalResumeMode',
  FunResumeMode: 'funResumeMode',
};

const greenColor = '#029c63';


class ResumePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: ModeType.TraditionalResumeMode,
      lightTheme: isDayTime(),
    };
  }

  componentDidMount() {
    document.body.style.background = greenColor;
  }

  render() {
    const { mode, lightTheme } = this.state;

    const traditionalResume = (
      <div className={lightTheme ? classes.ContainerTraditionalResumeDay : classes.ContainerTraditionalResumeNight}>
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
              <a href="mailto:contact@basharmengana.com">{DynamicResumeInJson.aboutMe.email}</a>
            </li>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.phoneNumber))}</b>
    :
              {' '}
              <a href="tel://0046703794381">
00
                {DynamicResumeInJson.aboutMe.phoneNumber}

              </a>
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
              <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.elevatorPitch))}</b>
    :
              {' '}
              {DynamicResumeInJson.aboutMe.elevatorPitch}
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
            <h3>{decamelize(propName(() => DynamicResumeInJson.workExperience.fullStackDeveloper))}</h3>
            <ul style={{ listStyleType: 'none', padding: '0px 5px', marginTop: '0px' }}>
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
            <h3>{decamelize(propName(() => DynamicResumeInJson.workExperience.serviceDesigner))}</h3>
            <ul style={{ listStyleType: 'none', padding: '0px 5px', marginTop: '0px' }}>
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
            <h3>{decamelize(propName(() => DynamicResumeInJson.workExperience.productOwner))}</h3>
            <ul style={{ listStyleType: 'none', padding: '0px 5px', marginTop: '0px' }}>
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
            <h3>{decamelize(propName(() => DynamicResumeInJson.workExperience.trainee))}</h3>
            <ul style={{ listStyleType: 'none', padding: '0px 5px', marginTop: '0px' }}>
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

    const nerdyResume = (
      <div className={classes.ContainerJsonView}>
        <ReactJson
          iconStyle="triangle"
          theme={{
            base00: lightTheme ? 'rgb(245, 245, 245)' : '#212529', // Default Background
            base01: '#ddd', // Lighter Background (Used for status bars)
            base02: lightTheme ? '#ddd' : '#37404a', // Selection Background
            base03: '#444', // Comments, Invisible, Line Highlighting
            base04: '#444', // Dark Foreground (Used for status bars)
            base05: '#444', // Default Foreground, Caret, Delimiters, Operators
            base06: '#444', // Light Foreground (Not often used)
            base07: lightTheme ? 'rgb(15,15,15)' : '#7c868f', // Light Background (Not often used)
            base08: '#444', // Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
            base09: lightTheme ? 'rgb(15,15,15)' : '#939ca3', // Integers, Boolean, Constants, XML Attributes, Markup Link Url
            base0A: '#444', // Classes, Markup Bold, Search Text Background
            base0B: '#575757', // Strings, Inherited Class, Markup Code, Diff Inserted
            base0C: '#5c646b', // Support, Regular Expressions, Escape Characters, Markup Quotes
            base0D: lightTheme ? 'rgb(115,115,115)' : '#394047', // Functions, Methods, Attribute IDs, Headings
            base0E: lightTheme ? 'rgb(155,155,155)' : '#515961', // Keywords, Storage, Selector, Markup Italic, Diff Changed
            base0F: '#575757', // Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
          }}
          displayDataTypes={false}
          displayObjectSize={false}
          collapsed={2}
          enableClipboard={false}
          src={DynamicResumeInJson}
        />
      </div>
    );

    const floatingHeader = (
      <Headroom className={combineClasses(classes.headroom, classes.pinned)}>
        <div style={{
          display: 'flex',
          backgroundColor: lightTheme ? 'rgb(245, 245, 245)' : '#212529',
          justifyContent: 'space-between',
          padding: '10px',
        }}
        >
          <div>
            <ToggleIconButton
              iconUntoggled={<DescriptionOutlinedIcon />}
              iconToggled={<DescriptionIcon />}
              label="Switch-theme"
              iconColor={greenColor}
              toggled={mode === ModeType.TraditionalResumeMode}
              onClick={() => {
                this.setState({ mode: ModeType.TraditionalResumeMode, lightTheme });
              }}
            />
            <ToggleIconButton
              iconUntoggled={<CodeIcon />}
              iconToggled={<CodeIcon />}
              label="Switch-theme"
              iconColor={greenColor}
              toggled={mode === ModeType.NerdResumeMode}
              onClick={() => {
                this.setState({ mode: ModeType.NerdResumeMode, lightTheme });
              }}
            />
            <ToggleIconButton
              iconUntoggled={<TextSMSOutlinedIcon />}
              iconToggled={<TextSMSIcon />}
              label="Switch-theme"
              iconColor="#0085D1"
              toggled={mode === ModeType.FunResumeMode}
              href="/smsresume"
              color="primary"
              onClick={() => {
                this.setState({ mode: ModeType.FunResumeMode, lightTheme: true });
              }}
            />

          </div>

          <ToggleIconButton
            iconUntoggled={<HighlightOutlinedIcon />}
            iconToggled={<HighlightIcon />}
            label="Switch-theme"
            iconColor={greenColor}
            toggled={lightTheme}
            onClick={() => {
              this.setState({ mode, lightTheme: !lightTheme });
            }}
          />
        </div>
      </Headroom>
    );

    if (mode === ModeType.FunResumeMode) {
      document.body.style.background = 'white';
    }

    return (
      <Aux>
        {floatingHeader}
        <div>
          {mode === ModeType.TraditionalResumeMode ? traditionalResume : mode === ModeType.NerdResumeMode ? nerdyResume : <div />}
        </div>
      </Aux>
    );
  }
}

export default ResumePage;
