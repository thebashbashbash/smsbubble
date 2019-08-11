/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReactGA from 'react-ga';

import classes from './TraditionalResumePage.module.css';
import { decamelize, propName } from '../../../helpers/helpers';

import DynamicResumeInJson from '../../../assets/resumeInJson';

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const traditionalResumePage = () => (
  <div className={classes.Container}>
    <div>
      <h2>{decamelize(propName(() => DynamicResumeInJson.aboutMe))}</h2>
      <ul style={{ listStyleType: 'none', padding: '0px' }}>
        <li>
          <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.fullName))}</b>:{' '}
          {DynamicResumeInJson.aboutMe.fullName}
        </li>
        <li>
          <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.age))}</b>:{' '}
          {DynamicResumeInJson.aboutMe.age}
        </li>
        <li>
          <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.email))}</b>:{' '}
          {DynamicResumeInJson.aboutMe.email}
        </li>
        <li>
          <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.phoneNumber))}</b>: 00
          {DynamicResumeInJson.aboutMe.phoneNumber}
        </li>
        <li>
          <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.address))}</b>:{' '}
          {DynamicResumeInJson.aboutMe.address}
        </li>
        <li>
          <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.drivingLicense))}</b>:{' '}
          {DynamicResumeInJson.aboutMe.drivingLicense ? 'yes' : 'no'}
        </li>
        <li>
          <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.birthday))}</b>:{' '}
          {DynamicResumeInJson.aboutMe.birthday}
        </li>
        <li>
          <b>
            {decamelize(propName(() => DynamicResumeInJson.aboutMe.totalWorkExperienceInYears))}
          </b>
          : {DynamicResumeInJson.aboutMe.totalWorkExperienceInYears}
        </li>
        <li>
          <b>{decamelize(propName(() => DynamicResumeInJson.aboutMe.spokenLanguages))}</b>:{' '}
          {DynamicResumeInJson.aboutMe.spokenLanguages.join(', ')}
        </li>
      </ul>
    </div>
    <div>
      <h2>{decamelize(propName(() => DynamicResumeInJson.education))}</h2>
      <ul style={{ listStyleType: 'none', padding: '0px' }}>
        <li>
          <b>{decamelize(propName(() => DynamicResumeInJson.education.school))}</b>:{' '}
          {DynamicResumeInJson.education.school.englishName} /{' '}
          {DynamicResumeInJson.education.school.swedishName}
        </li>
        <li>
          <b>{decamelize(propName(() => DynamicResumeInJson.education.degree))}</b>:{' '}
          {DynamicResumeInJson.education.degree.englishName} /{' '}
          {DynamicResumeInJson.education.degree.swedishName}
        </li>
        <li>
          <b>{decamelize(propName(() => DynamicResumeInJson.education.city))}</b>:{' '}
          {DynamicResumeInJson.education.city}
        </li>
        <li>
          <b>{decamelize(propName(() => DynamicResumeInJson.education.educationCompleted))}</b>:{' '}
          {DynamicResumeInJson.education.educationCompleted ? 'yes' : 'no'}
        </li>
        <li>
          <b>{decamelize(propName(() => DynamicResumeInJson.education.timePeriod))}</b>:{' '}
          {DynamicResumeInJson.education.timePeriod}
        </li>
        <li>
          <b>{decamelize(propName(() => DynamicResumeInJson.education.totalEducationInYears))}</b>:{' '}
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
            : {DynamicResumeInJson.workExperience.fullStackDeveloper.company}
          </li>
          <li>
            <b>
              {decamelize(
                propName(() => DynamicResumeInJson.workExperience.fullStackDeveloper.timePeriod),
              )}
            </b>
            : {DynamicResumeInJson.workExperience.fullStackDeveloper.timePeriod}
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
            : {DynamicResumeInJson.workExperience.fullStackDeveloper.totalWorkExperienceInYears}
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
            : {DynamicResumeInJson.workExperience.fullStackDeveloper.shortDescription}
          </li>
          <li>
            <b>
              {decamelize(
                propName(() => DynamicResumeInJson.workExperience.fullStackDeveloper.keywords),
              )}
            </b>
            :{' '}
            <ul style={{ listStyleType: 'none', padding: '10px', marginTop: '0px' }}>
              <li style={{ marginTop: '0px' }}>
                <b>
                  {decamelize(
                    propName(
                      () => DynamicResumeInJson.workExperience.fullStackDeveloper.keywords.frontEnd,
                    ),
                  )}
                </b>
                :{' '}
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
                :{' '}
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
                :{' '}
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
                :{' '}
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
            : {DynamicResumeInJson.workExperience.serviceDesigner.company}
          </li>
          <li>
            <b>
              {decamelize(
                propName(() => DynamicResumeInJson.workExperience.serviceDesigner.timePeriod),
              )}
            </b>
            : {DynamicResumeInJson.workExperience.serviceDesigner.timePeriod}
          </li>
          <li>
            <b>
              {decamelize(
                propName(
                  () => DynamicResumeInJson.workExperience.serviceDesigner.totalWorkExperienceInYears,
                ),
              )}
            </b>
            : {DynamicResumeInJson.workExperience.serviceDesigner.totalWorkExperienceInYears}
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
            : {DynamicResumeInJson.workExperience.serviceDesigner.shortDescription}
          </li>
          <li style={{ marginTop: '0px' }}>
            <b>
              {decamelize(
                propName(() => DynamicResumeInJson.workExperience.serviceDesigner.keywords),
              )}
            </b>
            :{' '}
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
            : {DynamicResumeInJson.workExperience.productOwner.company}
          </li>
          <li>
            <b>
              {decamelize(
                propName(() => DynamicResumeInJson.workExperience.productOwner.timePeriod),
              )}
            </b>
            : {DynamicResumeInJson.workExperience.productOwner.timePeriod}
          </li>
          <li>
            <b>
              {decamelize(
                propName(
                  () => DynamicResumeInJson.workExperience.productOwner.totalWorkExperienceInYears,
                ),
              )}
            </b>
            : {DynamicResumeInJson.workExperience.productOwner.totalWorkExperienceInYears}
          </li>
          <li>
            <b>
              <b>
                {decamelize(
                  propName(() => DynamicResumeInJson.workExperience.productOwner.shortDescription),
                )}
              </b>
            </b>
            : {DynamicResumeInJson.workExperience.productOwner.shortDescription}
          </li>
          <li style={{ marginTop: '0px' }}>
            <b>
              {decamelize(
                propName(() => DynamicResumeInJson.workExperience.productOwner.keywords),
              )}
            </b>
            :{' '}
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
            <b>{decamelize(propName(() => DynamicResumeInJson.workExperience.trainee.company))}</b>:{' '}
            {DynamicResumeInJson.workExperience.trainee.company}
          </li>
          <li>
            <b>
              {decamelize(propName(() => DynamicResumeInJson.workExperience.trainee.timePeriod))}
            </b>
            : {DynamicResumeInJson.workExperience.trainee.timePeriod}
          </li>
          <li>
            <b>
              {decamelize(
                propName(
                  () => DynamicResumeInJson.workExperience.trainee.totalWorkExperienceInYears,
                ),
              )}
            </b>
            : {DynamicResumeInJson.workExperience.trainee.totalWorkExperienceInYears}
          </li>
          <li>
            <b>
              <b>
                {decamelize(
                  propName(() => DynamicResumeInJson.workExperience.trainee.shortDescription),
                )}
              </b>
            </b>
            : {DynamicResumeInJson.workExperience.trainee.shortDescription}
          </li>
          <li style={{ marginTop: '0px' }}>
            <b>
              {decamelize(
                propName(() => DynamicResumeInJson.workExperience.trainee.keywords),
              )}
            </b>
            :{' '}
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
          <b>{decamelize(propName(() => DynamicResumeInJson.skills))}</b>:{' '}
          {DynamicResumeInJson.skills.map(skill => decamelize(skill)).join(', ')}
        </li>
      </ul>
    </div>
    <div>
      <h2>{decamelize(propName(() => DynamicResumeInJson.interests))}</h2>
      <ul style={{ listStyleType: 'none', padding: '0px' }}>
        <li>
          <b>{decamelize(propName(() => DynamicResumeInJson.interests))}</b>:{' '}
          {DynamicResumeInJson.interests.map(interest => decamelize(interest)).join(', ')}
        </li>
      </ul>
    </div>
  </div>
);

export default traditionalResumePage;
