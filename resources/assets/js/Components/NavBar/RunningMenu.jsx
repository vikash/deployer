import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ProjectMenu from './ProjectMenu';

const RunningMenu = (props) => {
  const { projects } = props;

  return (
    <ProjectMenu type="running" projects={projects} />
  );
};

RunningMenu.propTypes = {
  projects: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  projects: state.projects.running,
});

export default connect(mapStateToProps)(RunningMenu);

