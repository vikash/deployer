import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Box from '../../app/components/Box';
import DeploymentIcon from '../../app/components/deployment/DeploymentIcon';
import DeploymentStatus from '../../app/components/deployment/DeploymentStatus';
import Icon from '../../app/components/Icon';
import FormattedDate from '../../app/components/Date';
import FormattedTime from '../../app/components/Time';

const Timeline = (props) => {
  const strings = {
    none: Lang.get('dashboard.no_timeline'),
    timeline: Lang.choice('dashboard.latest', 2),
    view: Lang.get('dashboard.view'),
  };

  const {
    timeline,
  } = props;

  if (Object.keys(timeline).length === 0) {
    return (
      <Box title={strings.timeline} id="timeline">
        <p>{strings.none}</p>
      </Box>
    );
  }

  let timelineItems = [];

  for (const date in timeline) {
    timelineItems.push(
      <li className="time-label" key={date}>
        <span className="bg-gray"><FormattedDate date={date} /></span>
      </li>
    );

    Object.keys(timeline[date]).forEach((index) => {
      const item = timeline[date][index];

      let reason;

      if (item.reason) {
        reason = (
          <div className="timeline-body">
             item.reason
          </div>
        );
      }

      timelineItems.push(
        <li key={index}>
          <DeploymentIcon status={item.status} includeBackground />
          <div className="timeline-item">
            <span className="time"><Icon fa="clock-o" /> <FormattedTime date={item.started_at} /></span>
            <h3 className="timeline-header">
              <Link to={`/projects/${item.project.id}`} title={strings.view}>
                {item.project.name}
              </Link>&nbsp;-&nbsp;
              <Link to={`/deployments/${item.id}`} title={strings.view}>
                {Lang.get('dashboard.deployment_number', { id: item.id })}
              </Link>&nbsp;-&nbsp;
              <DeploymentStatus status={item.status} />
            </h3>
            {reason}
          </div>
        </li>
      );
    });
  }

  return (
    <Box title={strings.timeline} id="timeline">
      <ul className="timeline">
        {timelineItems}
        <li>
          <Icon fa="clock-o" className="bg-gray" />
        </li>
      </ul>
    </Box>
  );
};

Timeline.propTypes = {
  timeline: PropTypes.object.isRequired, // FIXME: Should be a shape object?
};

export default Timeline;