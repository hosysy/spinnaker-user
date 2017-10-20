import React from 'react';

const Tipsy = require('react-tipsy');
const axios = require('axios').create({baseURL: "https://solapi.com/app"});

class AppAdminList extends React.Component {
  constructor(props) {
  }

  render() {
    return (
      <div>
        Hello
      </div>
    );
  }
}

export default AppAdminList;
