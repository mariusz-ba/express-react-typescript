import * as React from 'react';
import axios from 'axios';

export default class Test extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const res = await axios.get('/test');
    const data = res.data;
    console.log(data);
  }
  
  render() {
    return <noscript/>
  }
}