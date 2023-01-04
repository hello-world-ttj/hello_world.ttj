import React from "react";
import { Timeline } from "flowbite-react";
import SchoolIcon from "@mui/icons-material/School";
function Education() {
  return (
    <div className="sm:h-[75vh] animate__animated animate__slideInLeft">
      <Timeline className="m-8">
        <Timeline.Item>
          <Timeline.Point icon={SchoolIcon} />
          <Timeline.Content>
            <Timeline.Time>2021-2023</Timeline.Time>
            <Timeline.Title>Master of Computer Application</Timeline.Title>
            <Timeline.Body>
            Mar Athanasios College For Advanced Studies Thiruvalla
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={SchoolIcon} />
          <Timeline.Content>
            <Timeline.Time>2018-2021</Timeline.Time>
            <Timeline.Title>Bachelor of Computer Application</Timeline.Title>
            <Timeline.Body>
            Catholicate College, Pathanamthitta
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={SchoolIcon} />
          <Timeline.Content>
            <Timeline.Time>2017-2018</Timeline.Time>
            <Timeline.Title>Higher Secondary</Timeline.Title>
            <Timeline.Body>
            Padmanabodayam HSS, Mezhuveli
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={SchoolIcon} />
          <Timeline.Content>
            <Timeline.Time>2016-2017</Timeline.Time>
            <Timeline.Title>High School</Timeline.Title>
            <Timeline.Body>
            SN Vidya Peedtom, Kotta
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default Education;
