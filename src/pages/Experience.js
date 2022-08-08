import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Shanghai Ocean University, Shanghai, China
          </h3>
          <p> Bachelor of Business Administration</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Northern Alberta Institute of Technology, Edmonton, Alberta
          </h3>

          {/* <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4> */}

          <p>Electrical Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Electrical Technician - Digi Canada Inc.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Calgary, Alberta
          </h4>
          <p>-Orginized and Conducted all technical related services to our Customers in all major Alverta citys for six years.</p>
          <p>-Measurement Canada Recognized Technician since 2020.</p>
          <p>-Gold STAR Employee of 2021.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Professional Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Calgary, Alberta
          </h4>
          <p>
            @2021 Lakehead University: Studied Computer Programming in C and Object Oriented Programming in Java, Data Structures in C, and Database Design and Management in MySQL.
          </p>
          <p>
            @2022 Mount Royal University: Built knowledge on cloud computing, and completed serverial related projects.
          </p>
          <p>
            @Current: Learning new technologies and building more solutions through projects.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
