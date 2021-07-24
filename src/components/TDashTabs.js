// we reverted to routing after having used conditional rendering with MUI drawer & tab components
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Style/TDashTabs.css';

// import components and also import CSS 
import { ProgressTracker } from './SubComponents/ProgressTracker';
import { StudentProfiles } from './SubComponents/StudentProfiles';
import { HelpRequests } from './SubComponents/HelpRequests';
import { ProjectSubmissions } from './SubComponents/ProjectSubmissions';
import { ProjectLibrary } from './SubComponents/ProjectLibrary';


//* first conditional render - open and close dashboard functionality
//* followed by a second conditional render, loads the student dashboard page

export default function TDb_Tabs() {

  const [showAll, showIcons] = useState(false);

  const tabControl = () => {
    if (showAll === true) {
      showIcons(false);
    } else {
      showIcons(true);
    }
  }

  const [activeButton, setActiveButton] = useState("t1");

  const handleClick = (e) => {
    setActiveButton(e.target.value)
    console.log(activeButton)
  }

  var loadDisplay;
  if (activeButton === "t1") {
    loadDisplay = <ProgressTracker />
  } else if (activeButton === "t2") {
    loadDisplay = <StudentProfiles />
  } else if (activeButton === "t3") {
    loadDisplay = <HelpRequests />
  } else if (activeButton === "t4") {
    loadDisplay = <ProjectSubmissions />
  } else if (activeButton === "t5") {
    loadDisplay = <ProjectLibrary />
  }

  // "loadDisplay" this variable to load the display area
  // "tdb-tabs-area" container for the teacher dashboard tabs area
  // "tdb-display-area" container for the dashboard display area
  // "tdb-showIcons"  used to style and impove size dimensions for the shrunk "icon only tab area" 
  // "tdb-showAll"  used to style and impove size dimensions for the enlarged "whole tab area"
  // "tabControl"   controls the chevron open and close
  // further below this is the chevron close and open


  return (
    <div className="tdb-edge-wrap">
      <div className="tdb-display-area">

        <div className={showAll === false ? "tabs-showAll" : "active-reveal"}>

          <div className={showAll === true ? "tabs-showIcons" : "hide-reveal"}>
            {/* chevron on click */}
            <div className="avatar-onTabs"></div>
            <button value="t1" onClick={handleClick} className={activeButton === 't1' ? "active-select-tab1" : 'select-tab1'} />
            <button value="t2" onClick={handleClick} className={activeButton === 't2' ? "active-select-tab2" : 'select-tab2'} />
            <button value="t3" onClick={handleClick} className={activeButton === 't3' ? "active-select-tab3" : 'select-tab3'} />
            <button value="t4" onClick={handleClick} className={activeButton === 't4' ? "active-select-tab4" : 'select-tab4'} />
            <button value="t5" onClick={handleClick} className={activeButton === 't5' ? "active-select-tab5" : 'select-tab5'} />

            <div className={showAll === true ? "switch-chevronR" : "move-arrow"} onClick={tabControl}>
              <img src="iconopenright.png" />
            </div>
            <div className="tdb-tabs-tiny-links" >
              <Link className="link" to="/profilePage" >
                <img src="/icon_user.png" alt="" />
              </Link>
              <img src="/icon_settings.png" alt="" />
              <Link className="link" to="/" >
                <img src="/icon_sign_out.png" alt="" />
              </Link>
            </div>
          </div>

          {/* // what text and icons display on the teacher dashboard tabs area // */}
          <div className="avatar-area">
            <img src="mainavatar.png" />
          </div>
          <button value="t1"
            onClick={handleClick}
            className={activeButton === 't1' ? "active" : ''} style={{ fontSize: "10px" }}>
            <img src={activeButton === "t1" ? "progressdarksm.png" : "progresslightsm.png"} alt="" />
            PROGRESS TRACKER</button>

          <button value="t2"
            onClick={handleClick}
            className={activeButton === 't2' ? "active" : ''} style={{ fontSize: "10px" }}>
            <img src={activeButton === "t2" ? "graduatedark.png" : "graduatelite.png"} alt="" />
            STUDENT PROFILES</button>

          <button value="t3"
            onClick={handleClick}
            className={activeButton === 't3' ? "active" : ''} style={{ fontSize: "10px" }}>
            <img src={activeButton === "t3" ? "icondark.png" : "iconlight.png"} alt="" />
            HELP REQUESTS</button>

          <button value="t4"
            onClick={handleClick}
            className={activeButton === 't4' ? "active" : ''} style={{ fontSize: "10px" }}>
            <img src={activeButton === "t4" ? "submitprojdark.png" : "submitproj light.png"} alt="" />
            PROJECT SUBMISSION</button>

          <button value="t5"
            onClick={handleClick}
            className={activeButton === 't5' ? "active" : ''} style={{ fontSize: "10px" }}>
            <img src={activeButton === "t5" ? " " : "librarylight.png"} alt="" />
            PROJECT LIBRARY</button>


          <div className="tdb-tiny-links">
            <Link className="link" to="/profilePage" >
              <div className="left-bottom-card">
                <img src="/icon_user.png" alt="" />
                <div>Profile</div>
              </div></Link>
            <div className="left-bottom-card">
              <img src="/icon_settings.png" alt="" />
              <div>Settings</div>
            </div>
            <Link className="link" to="/" >
              <div className="left-bottom-card">
                <img src="/icon_sign_out.png" alt="" />
                <div>Logout</div>
              </div>
            </Link>

          </div>
        </div>

        {/* arrow to make it small */}
        <div className={showAll === true ? "move-arrow" : "switch-chevronL"} onClick={tabControl}>
          <img src="/opencaretleft.png" />
        </div>



        <div className="tdb-display">

          <div className="btn-group">
            <button className="take-btn">Take Screenshot</button>
            <button className="help-btn">Help Center</button>
            <button className="more-btn">More Projects</button>
          </div>
          {loadDisplay}
        </div>
      </div>


    </div>
  )
}
