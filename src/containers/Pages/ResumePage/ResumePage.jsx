/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';


import ReactJson from 'react-json-view';
import Headroom from 'react-headroom';

import HighlightIcon from '@material-ui/icons/Highlight';
import HighlightOutlinedIcon from '@material-ui/icons/HighlightOutlined';

import CodeIcon from '@material-ui/icons/Code';

import TextSMSIcon from '@material-ui/icons/ChatBubble';
import TextSMSOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';

import DescriptionIcon from '@material-ui/icons/Description';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';

import ToggleIconButton from '../../IconButton/ToggleIconButton';

import ResumePDF from '../../../assets/bashar_mengana_resume.pdf';

import {
  decamelize, propName, isDayTime, combineClasses,
} from '../../../helpers/helpers';
import Aux from '../../../helpers/aux';

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
              <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.home))}</b>
    :
              {' '}
              {DynamicResumeInJson.aboutMe.home}
            </li>
            <li>
              <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.email))}</b>
    :
              {' '}
              <a href="mailto:contact@basharmengana.com">{DynamicResumeInJson.aboutMe.email}</a>
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
                {decamelize(propName(() => DynamicResumeInJson.aboutMe.totalWorkExperience))}
              </b>
              :
              {' '}
              {DynamicResumeInJson.aboutMe.totalWorkExperience}
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
          <h2>{decamelize(propName(() => DynamicResumeInJson.interests))}</h2>
          <ul style={{ listStyleType: 'none', padding: '0px' }}>
            <li>
              {DynamicResumeInJson.interests.map(interest => decamelize(interest)).join(', ')}
            </li>
            <li>
              <font size="4">
                <i>
              Have a look at my
                  {' '}
                  <a href="/projects">building projects portfolio</a>
                  {' '}
if you have the time

                </i>
                {' '}
              </font>
            </li>
          </ul>
        </div>
        <div>
          <h2>{decamelize(propName(() => DynamicResumeInJson.skills))}</h2>
          <ul style={{ listStyleType: 'none', padding: '0px' }}>
            <li style={{ marginTop: '0px' }}>
              <b>
                {decamelize(
                  propName(
                    () => DynamicResumeInJson.skills.frontEnd,
                  ),
                )}
              </b>
                    :
              {' '}
              {DynamicResumeInJson.skills.frontEnd
                .map(skill => decamelize(skill))
                .join(', ')}
            </li>
            <li style={{ marginTop: '0px' }}>
              <b>
                {decamelize(
                  propName(
                    () => DynamicResumeInJson.skills.backEnd,
                  ),
                )}
              </b>
                    :
              {' '}
              {DynamicResumeInJson.skills.backEnd
                .map(skill => decamelize(skill))
                .join(', ')}
            </li>
            <li style={{ marginTop: '0px' }}>
              <b>
                {decamelize(
                  propName(
                    () => DynamicResumeInJson.skills.devops,
                  ),
                )}
              </b>
                    :
              {' '}
              {DynamicResumeInJson.skills.devops
                .map(skill => decamelize(skill))
                .join(', ')}
            </li>
            <li style={{ marginTop: '0px' }}>
              <b>
                {decamelize(
                  propName(
                    () => DynamicResumeInJson.skills.serviceDesign,
                  ),
                )}
              </b>
                    :
              {' '}
              {DynamicResumeInJson.skills.serviceDesign
                .map(skill => decamelize(skill))
                .join(', ')}
            </li>
            <li style={{ marginTop: '0px' }}>
              <b>
                {decamelize(
                  propName(
                    () => DynamicResumeInJson.skills.wayOfWorking,
                  ),
                )}
              </b>
                    :
              {' '}
              {DynamicResumeInJson.skills.wayOfWorking
                .map(skill => decamelize(skill))
                .join(', ')}
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
              <b>{decamelize(propName(() => DynamicResumeInJson.education.totalEducation))}</b>
    :
              {' '}
              {DynamicResumeInJson.education.totalEducation}
            </li>
          </ul>
        </div>
        <div>
          <h2>{decamelize(propName(() => DynamicResumeInJson.workExperience))}</h2>
          <div>
            <h3>{decamelize(propName(() => DynamicResumeInJson.workExperience.fullStackWebDeveloper))}</h3>
            <ul style={{ listStyleType: 'none', padding: '0px 5px', marginTop: '0px' }}>
              <li>
                <b>
                  {decamelize(
                    propName(() => DynamicResumeInJson.workExperience.fullStackWebDeveloper.company),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.fullStackWebDeveloper.company}
              </li>
              <li>
                <b>
                  {decamelize(
                    propName(() => DynamicResumeInJson.workExperience.fullStackWebDeveloper.timePeriod),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.fullStackWebDeveloper.timePeriod}
              </li>
              <li>
                <b>
                  {decamelize(
                    propName(
                      () => DynamicResumeInJson.workExperience.fullStackWebDeveloper
                        .totalWorkExperience,
                    ),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.fullStackWebDeveloper.totalWorkExperience}
              </li>
              <li>
                <b>
                  <b>
                    {decamelize(
                      propName(
                        () => DynamicResumeInJson.workExperience.fullStackWebDeveloper.shortDescription,
                      ),
                    )}
                  </b>
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.fullStackWebDeveloper.shortDescription}
              </li>
              <li>
                <b>
                  {decamelize(
                    propName(() => DynamicResumeInJson.workExperience.fullStackWebDeveloper.stack),
                  )}
                </b>
                :
                {' '}
                <ul style={{ listStyleType: 'none', padding: '10px', marginTop: '0px' }}>
                  <li style={{ marginTop: '0px' }}>
                    <b>
                      {decamelize(
                        propName(
                          () => DynamicResumeInJson.workExperience.fullStackWebDeveloper.stack.frontEnd,
                        ),
                      )}
                    </b>
                    :
                    {' '}
                    {DynamicResumeInJson.workExperience.fullStackWebDeveloper.stack.frontEnd
                      .map(keyword => decamelize(keyword))
                      .join(', ')}
                  </li>
                  <li style={{ marginTop: '0px' }}>
                    <b>
                      {decamelize(
                        propName(
                          () => DynamicResumeInJson.workExperience.fullStackWebDeveloper.stack.backEnd,
                        ),
                      )}
                    </b>
                    :
                    {' '}
                    {DynamicResumeInJson.workExperience.fullStackWebDeveloper.stack.backEnd
                      .map(keyword => decamelize(keyword))
                      .join(', ')}
                  </li>
                  <li style={{ marginTop: '0px' }}>
                    <b>
                      {decamelize(
                        propName(
                          () => DynamicResumeInJson.workExperience.fullStackWebDeveloper.stack.devops,
                        ),
                      )}
                    </b>
                    :
                    {' '}
                    {DynamicResumeInJson.workExperience.fullStackWebDeveloper.stack.devops
                      .map(keyword => decamelize(keyword))
                      .join(', ')}
                  </li>
                  <li style={{ marginTop: '0px' }}>
                    <b>
                      {decamelize(
                        propName(
                          () => DynamicResumeInJson.workExperience.fullStackWebDeveloper.stack.wayOfWorking,
                        ),
                      )}
                    </b>
                    :
                    {' '}
                    {DynamicResumeInJson.workExperience.fullStackWebDeveloper.stack.wayOfWorking
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
                      () => DynamicResumeInJson.workExperience.serviceDesigner.totalWorkExperience,
                    ),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.serviceDesigner.totalWorkExperience}
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
                    propName(() => DynamicResumeInJson.workExperience.serviceDesigner.stack),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.serviceDesigner.stack
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
                      () => DynamicResumeInJson.workExperience.productOwner.totalWorkExperience,
                    ),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.productOwner.totalWorkExperience}
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
                  {decamelize(propName(() => DynamicResumeInJson.workExperience.productOwner.stack))}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.productOwner.stack
                  .map(keyword => decamelize(keyword))
                  .join(', ')}
              </li>
            </ul>
          </div>
          <div>
            <h3>{decamelize(propName(() => DynamicResumeInJson.workExperience.managementTrainee))}</h3>
            <ul style={{ listStyleType: 'none', padding: '0px 5px', marginTop: '0px' }}>
              <li>
                <b>{decamelize(propName(() => DynamicResumeInJson.workExperience.managementTrainee.company))}</b>
    :
                {' '}
                {DynamicResumeInJson.workExperience.managementTrainee.company}
              </li>
              <li>
                <b>
                  {decamelize(propName(() => DynamicResumeInJson.workExperience.managementTrainee.timePeriod))}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.managementTrainee.timePeriod}
              </li>
              <li>
                <b>
                  {decamelize(
                    propName(
                      () => DynamicResumeInJson.workExperience.managementTrainee.totalWorkExperience,
                    ),
                  )}
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.managementTrainee.totalWorkExperience}
              </li>
              <li>
                <b>
                  <b>
                    {decamelize(
                      propName(() => DynamicResumeInJson.workExperience.managementTrainee.shortDescription),
                    )}
                  </b>
                </b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.managementTrainee.shortDescription}
              </li>
              <li style={{ marginTop: '0px' }}>
                <b>{decamelize(propName(() => DynamicResumeInJson.workExperience.managementTrainee.stack))}</b>
                :
                {' '}
                {DynamicResumeInJson.workExperience.managementTrainee.stack
                  .map(keyword => decamelize(keyword))
                  .join(', ')}
              </li>
            </ul>
          </div>
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
            base0E: lightTheme ? 'rgb(155,155,155)' : '#515961', // stack, Storage, Selector, Markup Italic, Diff Changed
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
              iconUntoggled={<PrintOutlinedIcon />}
              iconToggled={<PrintOutlinedIcon />}
              label="Switch-theme"
              iconColor="gray"
              toggled={mode === ModeType.FunResumeMode}
              href={ResumePDF}
              color="default"
              onClick={() => {
                this.setState({ lightTheme: true });
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

export default withRouter(ResumePage);
