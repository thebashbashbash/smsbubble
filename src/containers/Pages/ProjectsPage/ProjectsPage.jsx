/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import ReactGA from 'react-ga';

import Headroom from 'react-headroom';

import HighlightIcon from '@material-ui/icons/Highlight';
import HighlightOutlinedIcon from '@material-ui/icons/HighlightOutlined';

import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/KeyboardArrowLeftOutlined';

import PlantStand from '../../../assets/plantstand.jpg';

import { isDayTime, combineClasses } from '../../../helpers/helpers';
import Aux from '../../../helpers/aux';
import ToggleIconButton from '../../IconButton/ToggleIconButton';

import classes from './ProjectsPage.module.css';

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const greenColor = '#029c63';

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
          <h2>Projects</h2>
          <div>
            <h3>Plant stand</h3>
            <ul style={{ listStyleType: 'none', padding: '0px 0px', marginTop: '0px' }}>
              <li>
                <b>Built</b>
                : 2018
              </li>
              <li>
                <b>
                  Short description
                </b>
                : PLANT STAND, PS12. Birch hexagonal tray with resin lining suitable for planting; attached adjustable ambient lamp for cozy atmosphere.
                <img
                  style={{
                    display: 'block',
                    height: '70%',
                    width: '70%',
                    margin: 'px',
                    paddingTop: '10px',
                    borderRadius: '5%',
                  }}
                  src={PlantStand}
                  alt="Plant stand"
                />
              </li>
            </ul>
          </div>
        </div>


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
          <IconButton
            href="https://basharmengana.com/resume"
            style={{
              color: greenColor,
              height: 'fit-content',
              width: 'fit-content',
              alignSelf: 'flex-end',
            }}
            aria-label="back_arrow"
          >
            <ArrowBack />
          </IconButton>

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

    return (
      <Aux>
        {floatingHeader}
        <div>
          {traditionalResume}
        </div>
      </Aux>
    );
  }
}

export default ProjectsPage;
