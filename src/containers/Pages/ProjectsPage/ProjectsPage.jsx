/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */

import React from "react";
import ReactGA from "react-ga";

import { withRouter } from "react-router-dom";

import Headroom from "react-headroom";

import HighlightIcon from "@material-ui/icons/Highlight";
import HighlightOutlinedIcon from "@material-ui/icons/HighlightOutlined";

import PlantStand from "../../../assets/plantstand.jpg";
import GardenBarrel from "../../../assets/garden.jpg";
import Lamp from "../../../assets/lamp.jpg";
import MossBarell from "../../../assets/mossbarrel.jpg";
import PlantWall from "../../../assets/plantwall.jpg";
import FlowerBed from "../../../assets/FlowerBed.jpg";

import { isDayTime, combineClasses } from "../../../helpers/helpers";
import Aux from "../../../helpers/aux";
import ToggleIconButton from "../../IconButton/ToggleIconButton";

import classes from "./ProjectsPage.module.css";

ReactGA.initialize("UA-139986234-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const greenColor = "#029c63";

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

    const projects = (
      <div className={classes.ContainerTraditionalResume}>
        <div className={lightTheme ? classes.LightTheme : classes.DarkTheme}>
          <div>
            <h2>Projects</h2>
            <p>
              The following projects are designed and built by myself as a way
              to express creativity and to get to work with both wood and iron.
            </p>
            <div>
              <h3>Memory Cove</h3>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0px 0px",
                  marginTop: "0px",
                }}
              >
                <li>
                  <b>Built</b>: 2019
                </li>
                <li>
                  <b>Short description</b>: <i>MEMORYCOVE, MEMC1.</i> An art
                  installment about letting go of memories.
                  <img
                    style={{
                      display: "block",
                      height: "70%",
                      width: "70%",
                      margin: "10px 0px",
                      borderRadius: "6%",
                    }}
                    src={MossBarell}
                    alt="Plant stand"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h3>Aragog</h3>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0px 0px",
                  marginTop: "0px",
                }}
              >
                <li>
                  <b>Built</b>: 2019
                </li>
                <li>
                  <b>Short description</b>: <i>ARAGOG, AGOG1.</i> This ceiling
                  lamp is made out of eight desktop lamps. Each lamp is
                  connected to a steel circular armature that is attached to the
                  roof via an adjustable beam. The lamps are flexible in four
                  pivot points, with an RGB color spectrum ranging between 0-255
                  (which is controlled via WiFi). AGOG1 is suitable for creating
                  all kind of light installments - from arctic aurora to
                  savannah sunset.
                  <img
                    style={{
                      display: "block",
                      height: "70%",
                      width: "70%",
                      margin: "10px 0px",
                      borderRadius: "6%",
                    }}
                    src={Lamp}
                    alt="Lamp"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h3>Flower power</h3>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0px 0px",
                  marginTop: "0px",
                }}
              >
                <li>
                  <b>Built</b>: 2018
                </li>
                <li>
                  <b>Short description</b>: <i>FLOWERPOWER, FPOW3.</i> Flower
                  bed suitable for growing wild summer flowers indoors, in
                  wintertime. To promote good growth all year round, the flower
                  bed has its own 55W full spectrum 3500 K grow light, and a
                  drainage system.
                  <img
                    style={{
                      display: "block",
                      height: "70%",
                      width: "70%",
                      margin: "10px 0px",
                      borderRadius: "6%",
                    }}
                    src={FlowerBed}
                    alt="Plant stand"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h3>Plant stand</h3>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0px 0px",
                  marginTop: "0px",
                }}
              >
                <li>
                  <b>Built</b>: 2018
                </li>
                <li>
                  <b>Short description</b>: <i>PLANTSTAND, PS12.</i> Birch
                  hexagonal tray with resin lining suitable for planting;
                  attached adjustable ambient lamp for cozy atmosphere.
                  <img
                    style={{
                      display: "block",
                      height: "70%",
                      width: "70%",
                      margin: "10px 0px",
                      borderRadius: "6%",
                    }}
                    src={PlantStand}
                    alt="Plant stand"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h3>Plant wall</h3>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0px 0px",
                  marginTop: "0px",
                }}
              >
                <li>
                  <b>Built</b>: 2016
                </li>
                <li>
                  <b>Short description</b>: <i>PLANTWALL, PW07</i> Glass flasks
                  encased in black electrical tape, and connected to a black
                  fence using normal birchwood pegs. PW07 is suitable for
                  growing a wall garden, and for casting eerie shadows in the
                  evening to create a scary atmosphere.
                  <img
                    style={{
                      display: "block",
                      height: "70%",
                      width: "70%",
                      margin: "10px 0px",
                      borderRadius: "6%",
                    }}
                    src={PlantWall}
                    alt="Plant stand"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h3>Garden</h3>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0px 0px",
                  marginTop: "0px",
                }}
              >
                <li>
                  <b>Built</b>: 2016
                </li>
                <li>
                  <b>Short description</b>: <i>GARDEN, GDEN8.</i> Indoor garden
                  suitable for growing tomatoes, lettuce, onions and kale
                  indoor. To promote good growth all year round the garden has
                  its own 55W full spectrum 3500 K grow light, and a drainage
                  system.
                  <img
                    style={{
                      display: "block",
                      height: "70%",
                      width: "70%",
                      margin: "10px 0px",
                      borderRadius: "6%",
                    }}
                    src={GardenBarrel}
                    alt="Plant stand"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );

    const floatingHeader = (
      <Headroom className={combineClasses(classes.headroom, classes.pinned)}>
        <div
          style={{
            display: "flex",
            backgroundColor: lightTheme ? "rgb(245, 245, 245)" : "#212529",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          {/* <IconButton
            href="/resume"
            style={{
              color: greenColor,
              height: 'fit-content',
              width: 'fit-content',
              alignSelf: 'flex-end',
            }}
            aria-label="back_arrow"
          >
            <ArrowBack />
          </IconButton> */}

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
        <div>{projects}</div>
      </Aux>
    );
  }
}

export default withRouter(ProjectsPage);
