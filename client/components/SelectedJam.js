import React, { Component } from 'react';
import {connect} from 'react-redux';

const SelectedJam = ({selectedJam}) => {
    console.log("selectedJam", selectedJam)
    return (
      <div className="selectedJam">1Love</div>
    );
  }

const mapStateToProps = (state) => ({
  selectedJam: state.jamReducer.selectedJam
})

export default connect(mapStateToProps)(SelectedJam)
