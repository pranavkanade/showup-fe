import React, { Component } from 'react';

import Hero from './Hero';

import { fetchAllLeads } from '../../../../src/requests/lead/lead.requests';

class Home extends Component {
  componentDidMount() {
    fetchAllLeads();
  }
  render() {
    return (
      <div>
        <Hero />
      </div>
    );
  }
}

export default Home;
